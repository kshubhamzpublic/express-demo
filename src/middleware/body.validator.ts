import { NextFunction, Request, Response } from "express";
import { ForbiddenError } from "../error/client-error/forbidden.error";

export const RequestBodyValidator = (...bodyProps: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const missingBodyProps: string[] = [];
    for (const prop of bodyProps) {
      if (req.body[prop] === undefined) missingBodyProps.push(prop);
    }
    if (missingBodyProps.length)
      throw new ForbiddenError(
        `Missing in body of request: ${missingBodyProps.join(", ")}`
      );
    next();
  };
};
