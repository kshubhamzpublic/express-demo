## Documentation

Want to define your own Exception ?

```
import { ExpressError, HttpStatusCode } from '@kz-ts/express-common';

class CustomError extends ExpressError {
  statusCode: HttpStatusCode = 400;

  constructor(public errMessage: string = "Default Message") {
    super(errMessage);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  serializeError(): { message: string; timestamp: Date } {
    return { message: this.errMessage, timestamp: this.timestamp };
  }
}
```

Predefined client exception:

```
BadRequest: (message?: string | undefined) => BadRequestError;
Forbidden: (message?: string | undefined) => ForbiddenError;
Locked: (message?: string | undefined) => LockedError;
NotFound: (message?: string | undefined) => NotFoundError;
UnAuthorized: (message?: string | undefined) => UnAuthorizedError;
UnProcessable: (message?: string | undefined) => UnProcessableError;
```

Predefined server exception:

```
InternalServer: (message?: string | undefined) => InternalServerError;
NotImplemented: (message?: string | undefined) => NotImplementedError;
```

**client-exceptions and server-exceptions are available on `ClientErrorResponse` & `ServerErrorResponse`. And, can be imported from `@kz-ts/express-common` directly.**
