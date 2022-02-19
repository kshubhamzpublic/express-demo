import { HttpStatusCode } from "../../types/http-status-code";
import { ExpressError } from "../base/express-error";

export class UnAuthorizedError extends ExpressError {
  statusCode: HttpStatusCode = 401;

  constructor(public errMessage: string = "Unauthorized") {
    super(errMessage);
    Object.setPrototypeOf(this, UnAuthorizedError.prototype);
  }

  serializeError(): { message: string; timestamp: Date } {
    return { message: this.errMessage, timestamp: this.timestamp };
  }
}
