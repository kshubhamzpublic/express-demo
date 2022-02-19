# EXPRESS-COMMON

A common library build for handling server exceptions and validating body.

Includes few predefined client and server exceptions which can further be extended according to the requirements.

If Exception is encountered then response will be of type `{ message: string, timestamp: Date }`

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

## Demo

```
import { ServerErrorHandler, Validator } from '@kz-ts/express-common'
```

- For activating error-handler, after all `app.use` insert below line
  ```
  app.use(ServerErrorHandler.HandleError)
  ```
- To use body validator apply `Validator.BodyValidator` middleware as following
  ```
  app.post('/route', Validator.BodyValidator('email', 'password'), callback: RequestHandler);
  ```
