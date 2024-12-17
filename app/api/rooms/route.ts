import dbConnect from "@/server/config/db.connect";
import { allRooms, newRoom } from "@/server/controllers/room.controllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest, NextResponse } from "next/server";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(allRooms);
router.post(newRoom);

export async function GET(
  request: NextRequest,
  ctx: RequestContext
): Promise<NextResponse> {
  const response = await router.run(request, ctx);

  // Ensure the response is of type NextResponse
  if (response instanceof NextResponse) {
    return response;
  }

  // Handle unexpected response types
  return NextResponse.json(
    { message: "Unexpected response type" },
    { status: 500 }
  );
}

export async function POST(
  request: NextRequest,
  ctx: RequestContext
): Promise<NextResponse> {
  const response = await router.run(request, ctx);

  // Ensure the response is of type NextResponse
  if (response instanceof NextResponse) {
    return response;
  }

  // Handle unexpected response types
  return NextResponse.json(
    { message: "Unexpected response type" },
    { status: 500 }
  );
}