interface IErrorHandler {
  withError(action: () => string): string;
}

class ErrorHandler implements IErrorHandler {
  withError(action: () => string): string {
    try {
      return action();
    } catch (err) {
      return err.message;
    }
  }
}

export const errorHandler: IErrorHandler = new ErrorHandler();
