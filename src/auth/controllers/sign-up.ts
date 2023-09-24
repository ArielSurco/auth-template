import type { NextFunction, Request, Response } from 'express';

import { createUser } from '../modules/application/create-user';
import { userRepository } from '../dependencies';

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password } = req.body;
  
    await createUser(userRepository, { username, email, password });
  
    res.json({ message: 'User created' });
  } catch (err) {
    next(err);
  }
};