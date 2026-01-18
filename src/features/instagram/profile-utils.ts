const USERNAME_REGEX = /^[a-zA-Z0-9._]{1,30}$/;
const RESERVED_PATHS = new Set([
  "p",
  "reel",
  "reels",
  "stories",
  "explore",
  "accounts",
  "about",
  "developer",
  "directory",
  "graphql",
  "api",
  "oauth",
  "challenge",
]);

export const isValidInstagramUsername = (username: string) =>
  USERNAME_REGEX.test(username);

export const normalizeInstagramUsername = (input: string): string | null => {
  let value = input.trim();
  if (!value) return null;

  if (value.startsWith("@")) {
    value = value.slice(1);
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    try {
      const url = new URL(value);
      const hostname = url.hostname.replace(/^www\./, "");
      if (hostname !== "instagram.com") {
        return null;
      }
      const segments = url.pathname.split("/").filter(Boolean);
      const candidate = segments[0];
      if (!candidate || RESERVED_PATHS.has(candidate.toLowerCase())) {
        return null;
      }
      return isValidInstagramUsername(candidate) ? candidate : null;
    } catch {
      return null;
    }
  }

  return isValidInstagramUsername(value) ? value : null;
};
