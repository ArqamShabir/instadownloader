export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImageUrl: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type Unit = "ms" | "s" | "m" | "h" | "d";
export type Duration = `${number} ${Unit}` | `${number}${Unit}`;

export type VideoInfo = {
  filename: string;
  width: string;
  height: string;
  videoUrl: string;
  thumbnailUrl?: string;
  title?: string;
  caption?: string;
  authorName?: string;
  authorUsername?: string;
  authorProfilePicture?: string;
  durationSeconds?: number;
  viewCount?: number;
  source?: "graphql" | "webpage";
};

export type ProfileInfo = {
  username: string;
  fullName?: string;
  bio?: string;
  profileImageUrl?: string;
  profileUrl?: string;
  summary?: string;
  followers?: number;
  following?: number;
  posts?: number;
};

export type SuccessResponse<T> = {
  status: "success";
  message?: string;
  data: T;
};

export type ErrorResponse = {
  status: "error";
  message: string;
};

export type APIResponse<T> = SuccessResponse<T> | ErrorResponse;

export type AsyncReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : never;
