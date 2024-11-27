import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const userSchema = z.object({
  nombre_usuario: z.string().min(3).max(30),
  correo_usuario: z.string().email().max(50),
  telefono_usuario: z.string().min(10).max(12),
  ciudad_usuario: z.string().min(3).max(15),
  pais_usuario: z.string().min(3).max(20),
  clave_usuario: z.string().min(0).max(100)
});

export const validateCreateUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    userSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        error: 'Datos de usuario inválidos',
        details: error.errors
      });
    } else {
      next(error);
    }
  }
};