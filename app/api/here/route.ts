import { NextApiRequest, NextApiResponse } from "next";

export const GET = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.headers);
  return res.json({ message: JSON.stringify(req.headers) });
};
