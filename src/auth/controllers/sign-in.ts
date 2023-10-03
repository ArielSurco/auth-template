import type { NextFunction, Request, Response } from 'express';

import { userRepository } from '../dependencies';
import { authUser } from '../modules/application/auth-user';

export const signIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
  
    const token = await authUser(userRepository, { email, password });
  
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ message: 'User authenticated' });
  } catch (err) {
    next(err);
  }
};
