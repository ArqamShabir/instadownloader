import { load, type CheerioAPI } from "cheerio";

import { HTTPError } from "@/lib/errors";
import { ProfileInfo } from "@/types";
import { getProfilePageHTML, getProfileWebInfo } from "@/services/instagram/requests";

import { normalizeInstagramUsername } from "./profile-utils";

const parseCount = (value?: string) => {
  if (!value) return undefined;
  const normalized = value.replace(/,/g, "").trim();
  const match = normalized.match(/^(\d+(?:\.\d+)?)([kmb])?$/i);
  if (!match) return undefined;
  let amount = parseFloat(match[1]);
  const suffix = match[2]?.toLowerCase();
  if (suffix === "k") amount *= 1000;
  if (suffix === "m") amount *= 1000000;
  if (suffix === "b") amount *= 1000000000;
  return Math.round(amount);
};

const extractCount = (description: string, label: string) => {
  const match = description.match(
    new RegExp(`([\\d.,]+\\s*[kmb]?)\\s+${label}`, "i")
  );
  return parseCount(match?.[1]);
};

const extractSummary = (description?: string) => {
  if (!description) return undefined;
  const parts = description.split(" - ");
  const summary = parts.length > 1 ? parts.slice(1).join(" - ") : description;
  const cleaned = summary.trim();
  return cleaned ? cleaned : undefined;
};

const extractFullName = (ogTitle?: string, description?: string) => {
  if (ogTitle) {
    const titleMatch = ogTitle.match(/^(.+?)\s+\(@/);
    if (titleMatch?.[1]) {
      return titleMatch[1].trim();
    }
  }
  if (description) {
    const descMatch = description.match(/from\s+(.+?)\s+\(@/i);
    if (descMatch?.[1]) {
      return descMatch[1].trim();
    }
  }
  return undefined;
};

const findBiography = (payload: unknown): string | undefined => {
  if (!payload || typeof payload === "string") return undefined;
  if (Array.isArray(payload)) {
    for (const item of payload) {
      const found = findBiography(item);
      if (found) return found;
    }
    return undefined;
  }
  if (typeof payload === "object") {
    const record = payload as Record<string, unknown>;
    const biography = record.biography;
    if (typeof biography === "string" && biography.trim()) {
      return biography.trim();
    }
    const bio = record.bio;
    if (typeof bio === "string" && bio.trim()) {
      return bio.trim();
    }
    const biographyEntities = record.biography_with_entities;
    if (biographyEntities && typeof biographyEntities === "object") {
      const text = (biographyEntities as Record<string, unknown>).text;
      if (typeof text === "string" && text.trim()) {
        return text.trim();
      }
    }
    for (const value of Object.values(record)) {
      const found = findBiography(value);
      if (found) return found;
    }
  }
  return undefined;
};

const findJsonLdDescription = (payload: unknown): string | undefined => {
  if (!payload) return undefined;
  if (typeof payload === "string") return undefined;
  if (Array.isArray(payload)) {
    for (const item of payload) {
      const found = findJsonLdDescription(item);
      if (found) return found;
    }
    return undefined;
  }
  if (typeof payload === "object") {
    const record = payload as Record<string, unknown>;
    const description = record.description;
    if (typeof description === "string" && description.trim()) {
      return description.trim();
    }
    for (const value of Object.values(record)) {
      const found = findJsonLdDescription(value);
      if (found) return found;
    }
  }
  return undefined;
};

const extractJsonLdBio = (profileHtml: CheerioAPI) => {
  const scripts = profileHtml("script[type='application/ld+json']");
  if (!scripts.length) return undefined;
  for (const script of scripts.toArray()) {
    const text = profileHtml(script).text().trim();
    if (!text) continue;
    try {
      const parsed = JSON.parse(text);
      const description = findJsonLdDescription(parsed);
      if (description) return description;
    } catch {
      continue;
    }
  }
  return undefined;
};

const extractJsonSubstring = (text: string, startIndex: number) => {
  let depth = 0;
  let inString = false;
  let escape = false;
  for (let i = startIndex; i < text.length; i += 1) {
    const char = text[i];
    if (inString) {
      if (escape) {
        escape = false;
      } else if (char === "\\") {
        escape = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }
    if (char === '"') {
      inString = true;
      continue;
    }
    if (char === "{" || char === "[") {
      depth += 1;
    } else if (char === "}" || char === "]") {
      depth -= 1;
      if (depth === 0) {
        return text.slice(startIndex, i + 1);
      }
    }
  }
  return null;
};

const extractBioFromScripts = (profileHtml: CheerioAPI) => {
  const scripts = profileHtml("script");
  if (!scripts.length) return undefined;

  for (const script of scripts.toArray()) {
    const raw = profileHtml(script).text();
    const text = raw.trim();
    if (!text) continue;

    const tryParse = (candidate: string) => {
      try {
        const parsed = JSON.parse(candidate);
        return findBiography(parsed);
      } catch {
        return undefined;
      }
    };

    if (text.startsWith("{") || text.startsWith("[")) {
      const found = tryParse(text);
      if (found) return found;
    }

    const sharedIndex = text.indexOf("window._sharedData");
    if (sharedIndex !== -1) {
      const jsonStart = text.indexOf("{", sharedIndex);
      if (jsonStart !== -1) {
        const jsonText = extractJsonSubstring(text, jsonStart);
        if (jsonText) {
          const found = tryParse(jsonText);
          if (found) return found;
        }
      }
    }

    const additionalIndex = text.indexOf("window.__additionalDataLoaded");
    if (additionalIndex !== -1) {
      const jsonStart = text.indexOf("{", additionalIndex);
      if (jsonStart !== -1) {
        const jsonText = extractJsonSubstring(text, jsonStart);
        if (jsonText) {
          const found = tryParse(jsonText);
          if (found) return found;
        }
      }
    }
  }

  return undefined;
};

export const getProfileInfo = async (
  usernameInput: string
): Promise<ProfileInfo> => {
  const username = normalizeInstagramUsername(usernameInput);
  if (!username) {
    throw new HTTPError("Invalid Instagram username.", 400);
  }

  try {
    const webInfo = await getProfileWebInfo({ username });
    const user = webInfo?.data?.user;
    if (user) {
      const profileInfo: ProfileInfo = {
        username: user.username ?? username,
        fullName: user.full_name ?? undefined,
        bio: user.biography ?? undefined,
        profileImageUrl: user.profile_pic_url_hd ?? user.profile_pic_url ?? undefined,
        profileUrl: `https://www.instagram.com/${user.username ?? username}/`,
        followers: user.edge_followed_by?.count ?? undefined,
        following: user.edge_follow?.count ?? undefined,
        posts: user.edge_owner_to_timeline_media?.count ?? undefined,
      };
      return profileInfo;
    }
  } catch (error) {
    console.error(error);
  }

  const data = await getProfilePageHTML({ username });
  const profileHtml = load(data);

  const ogTitle = profileHtml("meta[property='og:title']").attr("content") ?? "";
  const ogDescription =
    profileHtml("meta[property='og:description']").attr("content") ?? "";
  const metaDescription =
    profileHtml("meta[name='description']").attr("content") ?? "";
  const ogImage =
    profileHtml("meta[property='og:image']").attr("content") ?? "";
  const ogUrl =
    profileHtml("meta[property='og:url']").attr("content") ??
    `https://www.instagram.com/${username}/`;
  const jsonLdBio = extractJsonLdBio(profileHtml);
  const scriptBio = extractBioFromScripts(profileHtml);

  const description = ogDescription || metaDescription;
  if (!ogTitle && !description) {
    throw new HTTPError("Profile not found or private.", 404);
  }

  const profileInfo: ProfileInfo = {
    username,
    fullName: extractFullName(ogTitle, description),
    bio: scriptBio ?? jsonLdBio,
    profileImageUrl: ogImage || undefined,
    profileUrl: ogUrl,
    summary: extractSummary(description),
    followers: description ? extractCount(description, "Followers") : undefined,
    following: description ? extractCount(description, "Following") : undefined,
    posts: description ? extractCount(description, "Posts") : undefined,
  };

  return profileInfo;
};
