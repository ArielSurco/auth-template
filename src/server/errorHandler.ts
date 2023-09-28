import type { NextFunction, Request, Response } from 'express';

import { ResponseError } from './ResponseError';

export const ErrorHandler = (err: ResponseError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  const errorStatus = err.statusCode || 500;
  const errorMessage = err.message || 'Something went wrong';

  res.status(errorStatus);
  res.send({
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
};