import { HttpStatusCode } from "../../types/http-status-code";
import { ExpressError } from "../base/express-error";

export class ForbiddenError extends ExpressError {
  statusCode: HttpStatusCode = 403;

  constructor(public errMessage: string = "Forbidden") {
    super(errMessage);
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }

  serializeError(): { message: string; timestamp: Date } {
    return { message: this.errMessage, timestamp: this.timestamp };
  }
}
