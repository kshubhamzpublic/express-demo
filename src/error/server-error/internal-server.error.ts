import { HttpStatusCode } from "../../types/http-status-code";
import { ExpressError } from "../base/express-error";

export class InternalServerError extends ExpressError {
  statusCode: HttpStatusCode = 500;

  constructor(public errMessage: string = "Internal Server Error") {
    super(errMessage);
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  serializeError(): { message: string; timestamp: Date } {
    return { message: this.errMessage, timestamp: this.timestamp };
  }
}
