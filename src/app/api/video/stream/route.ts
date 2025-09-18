import { NextResponse } from "next/server";

import { makeErrorResponse } from "@/lib/http";

const TRUSTED_HOST_SNIPPETS = ["instagram", "cdninstagram", "fbcdn"];

function isTrustedVideoUrl(url: URL) {
  return TRUSTED_HOST_SNIPPETS.some((snippet) => url.hostname.includes(snippet));
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoUrlParam = searchParams.get("videoUrl");

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

  const rangeHeader = request.headers.get("range");

  let upstreamResponse: Response;
  try {
    upstreamResponse = await fetch(videoUrl, {
      headers: {
        Accept: "*/*",
        "Accept-Language": "en-US,en;q=0.9",
        ...(rangeHeader ? { Range: rangeHeader } : {}),
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      },
      cache: "no-store",
    });
  } catch (error) {
    console.error("Failed to fetch video stream", error);
    const response = makeErrorResponse("Unable to reach media host at the moment");
    return NextResponse.json(response, { status: 502 });
  }

  if (!upstreamResponse.ok || !upstreamResponse.body) {
    const response = makeErrorResponse("Unable to fetch the video stream");
    return NextResponse.json(response, { status: upstreamResponse.status || 502 });
  }

  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Expose-Headers", "Accept-Ranges, Content-Length, Content-Type");
  headers.set("Cross-Origin-Resource-Policy", "cross-origin");

  const contentType = upstreamResponse.headers.get("content-type") ?? "video/mp4";
  const contentLength = upstreamResponse.headers.get("content-length");
  const acceptRanges = upstreamResponse.headers.get("accept-ranges");
  const status = upstreamResponse.status;

  headers.set("Content-Type", contentType);
  if (contentLength) {
    headers.set("Content-Length", contentLength);
  }
  if (acceptRanges) {
    headers.set("Accept-Ranges", acceptRanges);
  }

  headers.set("Cache-Control", "public, max-age=60");

  return new NextResponse(upstreamResponse.body, {
    status,
    headers,
  });
}
