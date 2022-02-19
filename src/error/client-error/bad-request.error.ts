import { HttpStatusCode } from "../../types/http-status-code";
import { ExpressError } from "../base/express-error";

export class BadRequestError extends ExpressError {
  statusCode: HttpStatusCode = 400;

  constructor(public errMessage: string = "Bad Request") {
    super(errMessage);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeError(): { message: string; timestamp: Date } {
    return { message: this.errMessage, timestamp: this.timestamp };
  }
}
