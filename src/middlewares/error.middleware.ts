import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/errors';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({
      error: error.message
    });
  }

  console.error(error);
  res.status(500).json({
    error: 'Error interno del servidor'
  });
};