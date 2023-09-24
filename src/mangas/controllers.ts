import type { Request, Response } from 'express';

export const getMangas = (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
};