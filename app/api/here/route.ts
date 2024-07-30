import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  // Convert headers to a plain object
  const headersObj = Object.fromEntries(req.headers);

  // Log the headers object
  console.log(JSON.stringify(headersObj, null, 2));

  return NextResponse.json({ headers: headersObj });
};
