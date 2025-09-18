import { NextResponse } from "next/server";

import { makeErrorResponse } from "@/lib/http";
import { getTimedFilename, sanitizeFilename } from "@/lib/utils";

const TRUSTED_HOST_SNIPPETS = ["instagram", "cdninstagram", "fbcdn"];

function isTrustedVideoUrl(url: URL) {
  return TRUSTED_HOST_SNIPPETS.some((snippet) => url.hostname.includes(snippet));
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoUrlParam = searchParams.get("videoUrl");
  const filenameParam = searchParams.get("filename") ?? "";

  if (!videoUrlParam) {
    const response = makeErrorResponse("videoUrl query parameter is required");
    return NextResponse.json(response, { status: 400 });
  }

  let videoUrl: URL;
  try {
    videoUrl = new URL(videoUrlParam);
  } catch (error) {
    const response = makeErrorResponse("Invalid video URL provided");
    return NextResponse.json(response, { status: 400 });
  }

  if (!isTrustedVideoUrl(videoUrl)) {
    const response = makeErrorResponse("Untrusted video host");
    return NextResponse.json(response, { status: 400 });
  }

  let upstreamResponse: Response;
  try {
    upstreamResponse = await fetch(videoUrl, {
      headers: {
        Accept: "*/*",
        "Accept-Language": "en-US,en;q=0.9",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      },
      cache: "no-store",
    });
  } catch (error) {
    console.error("Failed to fetch video from Instagram", error);
    const response = makeErrorResponse("Unable to reach media host at the moment");
    return NextResponse.json(response, { status: 502 });
  }

  if (!upstreamResponse.ok || !upstreamResponse.body) {
    const response = makeErrorResponse("Unable to fetch the video stream");
    return NextResponse.json(response, { status: upstreamResponse.status || 502 });
  }

  const fallbackFilename = getTimedFilename("instagram-video", "mp4");
  const filename = sanitizeFilename(
    filenameParam || videoUrl.pathname.split("/").pop() || fallbackFilename,
    fallbackFilename,
  );
  const asciiFilename = filename.replace(/"/g, "'");

  const headers = new Headers();
  const contentType = upstreamResponse.headers.get("content-type") ?? "video/mp4";
  const contentLength = upstreamResponse.headers.get("content-length");
  headers.set("Content-Type", contentType);
  if (contentLength) {
    headers.set("Content-Length", contentLength);
  }
  headers.set(
    "Content-Disposition",
    `attachment; filename="${asciiFilename}"; filename*=UTF-8''${encodeURIComponent(filename)}`,
  );
  headers.set("Cache-Control", "private, max-age=0, must-revalidate");

  return new NextResponse(upstreamResponse.body, {
    status: 200,
    headers,
  });
}
