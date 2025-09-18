import { NextResponse } from "next/server";

import { makeErrorResponse } from "@/lib/http";

const TRUSTED_HOST_SNIPPETS = ["instagram", "cdninstagram", "fbcdn"];

function isTrustedImageUrl(url: URL) {
  return TRUSTED_HOST_SNIPPETS.some((snippet) => url.hostname.includes(snippet));
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const imageUrlParam = searchParams.get("imageUrl");

  if (!imageUrlParam) {
    const response = makeErrorResponse("imageUrl query parameter is required");
    return NextResponse.json(response, { status: 400 });
  }

  let imageUrl: URL;
  try {
    imageUrl = new URL(imageUrlParam);
  } catch (error) {
    const response = makeErrorResponse("Invalid image URL provided");
    return NextResponse.json(response, { status: 400 });
  }

  if (!isTrustedImageUrl(imageUrl)) {
    const response = makeErrorResponse("Untrusted image host");
    return NextResponse.json(response, { status: 400 });
  }

  let upstreamResponse: Response;

  try {
    upstreamResponse = await fetch(imageUrl, {
      headers: {
        Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        Referer: "https://www.instagram.com/",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      },
      cache: "no-store",
    });
  } catch (error) {
    console.error("Failed to fetch thumbnail", error);
    const response = makeErrorResponse("Unable to reach image host at the moment");
    return NextResponse.json(response, { status: 502 });
  }

  if (!upstreamResponse.ok || !upstreamResponse.body) {
    const response = makeErrorResponse("Unable to fetch the thumbnail");
    return NextResponse.json(response, { status: upstreamResponse.status || 502 });
  }

  const headers = new Headers();
  const contentType = upstreamResponse.headers.get("content-type") ?? "image/jpeg";
  const contentLength = upstreamResponse.headers.get("content-length");

  headers.set("Content-Type", contentType);
  if (contentLength) {
    headers.set("Content-Length", contentLength);
  }

  headers.set("Cache-Control", "public, max-age=300");
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Cross-Origin-Resource-Policy", "cross-origin");

  return new NextResponse(upstreamResponse.body, {
    status: upstreamResponse.status,
    headers,
  });
}
