import { HttpStatusCode } from "../../types/http-status-code";
import { ExpressError } from "../base/express-error";

export class LockedError extends ExpressError {
  statusCode: HttpStatusCode = 423;

  constructor(public errMessage: string = "Locked") {
    super(errMessage);
    Object.setPrototypeOf(this, LockedError.prototype);
  }

  serializeError(): { message: string; timestamp: Date } {
    return { message: this.errMessage, timestamp: this.timestamp };
  }
}
