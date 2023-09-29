import jwt from 'jsonwebtoken';

import { AUTH_ENV } from '../constants/authEnvironment';

export const createJWT = (payload: Record<string, string | number>): Promise<string> => new Promise(
  (resolve, reject) => {
    jwt.sign(
      payload,
      AUTH_ENV.JWT_SECRET,
      { expiresIn: AUTH_ENV.JWT_EXPIRATION },
      (err, token) => {
        if (err) {
          reject(err);
        }

        resolve(token ?? '');
      },
    );
  });