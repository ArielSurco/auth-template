import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

import { AUTH_ENV } from '../../auth/constants/authEnvironment';
import { ResponseError } from '../../server/ResponseError';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  if (!token) {
    throw new ResponseError(401, 'Unauthorized');
  }

  try {
    jwt.verify(token, AUTH_ENV.JWT_SECRET ?? '');

    next();
  } catch (error) {
    throw new ResponseError(401, 'Unauthorized');
  }
};