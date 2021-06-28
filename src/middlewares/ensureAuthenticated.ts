import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "9f2ad26eb84806f3ed49f77b967b101b"
    ) as IPayload;

    req.user_id = sub;

    return next();
  } catch (err) {
    res.status(401).end();
  }
}
