import { NextResponse } from "next/server";

import { HTTPError } from "@/lib/errors";
import { makeErrorResponse, makeSuccessResponse } from "@/lib/http";
import { ProfileInfo } from "@/types";
import { getProfileInfo } from "@/features/instagram/profile";
import { INSTAGRAM_CONFIGS } from "@/features/instagram/constants";

function handleError(error: any) {
  if (error instanceof HTTPError) {
    const response = makeErrorResponse(error.message);
    return NextResponse.json(response, { status: error.status });
  }
  console.error(error);
  const response = makeErrorResponse();
  return NextResponse.json(response, { status: 500 });
}

export async function GET(request: Request) {
  if (!INSTAGRAM_CONFIGS.enableServerAPI) {
    const notImplementedResponse = makeErrorResponse("Not Implemented");
    return NextResponse.json(notImplementedResponse, { status: 501 });
  }

  const username = new URL(request.url).searchParams.get("username");
  if (!username) {
    const badRequestResponse = makeErrorResponse("Username is required");
    return NextResponse.json(badRequestResponse, { status: 400 });
  }

  try {
    const profileInfo = await getProfileInfo(username);
    const response = makeSuccessResponse<ProfileInfo>(profileInfo);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
}
