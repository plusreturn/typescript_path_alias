import { Request, Response, NextFunction } from 'express';

export const valdiateAdminRole = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};
