import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
    return;
  }

  const errorMessage = errors.array().map((error) => error.msg);
  res.status(400).json({ errors: errorMessage });
};