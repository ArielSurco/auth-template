import type { NextFunction, Request, Response } from 'express';

import { ResponseError } from './ResponseError';

export const ErrorHandler = (err: ResponseError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  const errorStatus = err.statusCode ?? 500;
  const errorMessage = err.message || 'Internal server error';
  const showStack = err.withStack || errorStatus === 500;

  res.status(errorStatus);
  res.send({
    status: errorStatus,
    message: errorMessage,
    stack: showStack ? err.stack : undefined,
  });
};