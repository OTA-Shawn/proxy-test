import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest, res: NextResponse) => {
  console.log(req.headers);
  return NextResponse.json({ message: JSON.stringify(req.headers) });
};
