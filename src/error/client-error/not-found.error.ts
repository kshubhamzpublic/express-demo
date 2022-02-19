import { HttpStatusCode } from "../../types/http-status-code";
import { ExpressError } from "../base/express-error";

export class NotFoundError extends ExpressError {
  statusCode: HttpStatusCode = 404;

  constructor(public errMessage: string = "Not Found") {
    super(errMessage);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeError(): { message: string; timestamp: Date } {
    return { message: this.errMessage, timestamp: this.timestamp };
  }
}
