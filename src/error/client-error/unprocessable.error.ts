import { HttpStatusCode } from "../../types/http-status-code";
import { ExpressError } from "../base/express-error";

export class UnProcessableError extends ExpressError {
  statusCode: HttpStatusCode = 422;

  constructor(public errMessage: string = "Unprocessable Entity") {
    super(errMessage);
    Object.setPrototypeOf(this, UnProcessableError.prototype);
  }

  serializeError(): { message: string; timestamp: Date } {
    return { message: this.errMessage, timestamp: this.timestamp };
  }
}
