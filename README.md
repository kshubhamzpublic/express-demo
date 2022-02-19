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
