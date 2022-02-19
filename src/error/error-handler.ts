import { NextFunction, Request, Response } from "express";
import { ExpressError } from "./base/express-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ExpressError) {
    res.status(err.statusCode).send(err.serializeError());
  }
  res.status(500).send({ message: "Something went wrong!!" });
};
