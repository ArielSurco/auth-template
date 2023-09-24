import type { NextFunction, Request, Response } from 'express';

export const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  const errorStatus = res.statusCode || 500;
  const errorMessage = err.message || 'Something went wrong';

  res.status(errorStatus);
  res.send({
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
};