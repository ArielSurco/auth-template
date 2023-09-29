import { Request, Response } from 'express';

export const signOut = (req: Request, res: Response) => {
  res.clearCookie('token');
  res.sendStatus(200);
};