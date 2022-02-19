import { BadRequestError } from "./error/client-error/bad-request.error";
import { ForbiddenError } from "./error/client-error/forbidden.error";
import { LockedError } from "./error/client-error/locked.error";
import { NotFoundError } from "./error/client-error/not-found.error";
import { UnAuthorizedError } from "./error/client-error/unauthorized.error";
import { UnProcessableError } from "./error/client-error/unprocessable.error";
import { errorHandler } from "./error/error-handler";
import { InternalServerError } from "./error/server-error/internal-server.error";
import { NotImplementedError } from "./error/server-error/not-implemented.error";
import { RequestBodyValidator } from "./middleware/body.validator";

export { HttpStatusCode } from "./types/http-status-code";
export { ExpressError } from "./error/base/express-error";

export const ClientErrorResponse = {
  BadRequest: (message?: string) =>
    message ? new BadRequestError(message) : new BadRequestError(),
  Forbidden: (message?: string) =>
    message ? new ForbiddenError(message) : new ForbiddenError(),
  Locked: (message?: string) =>
    message ? new LockedError(message) : new LockedError(),
  NotFound: (message?: string) =>
    message ? new NotFoundError(message) : new NotFoundError(),
  UnAuthorized: (message?: string) =>
    message ? new UnAuthorizedError(message) : new UnAuthorizedError(),
  UnProcessable: (message?: string) =>
    message ? new UnProcessableError(message) : new UnProcessableError(),
};

export const ServerErrorResponse = {
  InternalServer: (message?: string) =>
    message ? new InternalServerError(message) : new InternalServerError(),
  NotImplemented: (message?: string) =>
    message ? new NotImplementedError(message) : new NotImplementedError(),
};

export const ServerErrorHandler = {
  HandleError: errorHandler,
};

export const Validator = {
  BodyValidator: RequestBodyValidator,
};
