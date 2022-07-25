import { Request, Response, NextFunction } from 'express';

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};
