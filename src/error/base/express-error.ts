import { HttpStatusCode } from "../../types/http-status-code";

export abstract class ExpressError extends Error {
  abstract statusCode: HttpStatusCode;
  protected timestamp = new Date();

  constructor(private errorMessage: string) {
    super(errorMessage);
    Object.setPrototypeOf(this, ExpressError.prototype);
  }

  abstract serializeError(): { message: string; timestamp: Date };
}
