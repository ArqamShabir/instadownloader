import { apiClient } from "@/lib/api-client";

import { CustomError } from "@/lib/errors";

import { APIResponse, ProfileInfo, VideoInfo } from "@/types";

import { ServerEndpoints } from "./constants";

export async function getVideoInfo({
  postUrl,
}: {
  postUrl: string;
}): Promise<VideoInfo> {
  const searchParams = new URLSearchParams({ postUrl });
  const res = await apiClient.get(
    `${ServerEndpoints.GetByPostURL}?${searchParams.toString()}`
  );

  const json = (await res.json()) as APIResponse<VideoInfo>;

  if (json.status === "error") {
    throw new CustomError(json.message);
  }

  const data = json.data;

  return data;
}

export async function getProfileInfo({
  username,
}: {
  username: string;
}): Promise<ProfileInfo> {
  const searchParams = new URLSearchParams({ username });
  const res = await apiClient.get(
    `${ServerEndpoints.GetProfile}?${searchParams.toString()}`
  );

  const json = (await res.json()) as APIResponse<ProfileInfo>;

  if (json.status === "error") {
    throw new CustomError(json.message);
  }

  return json.data;
}
