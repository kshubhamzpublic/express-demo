import { HttpStatusCode } from "../../types/http-status-code";
import { ExpressError } from "../base/express-error";

export class NotImplementedError extends ExpressError {
  statusCode: HttpStatusCode = 401;

  constructor(public errMessage: string = "Not Implemented") {
    super(errMessage);
    Object.setPrototypeOf(this, NotImplementedError.prototype);
  }

  serializeError(): { message: string; timestamp: Date } {
    return { message: this.errMessage, timestamp: this.timestamp };
  }
}
