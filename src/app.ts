// src/app.ts
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usuarioRoutes from './routes/usuario.routes';
import pagoRoutes from './routes/pago.routes';
import reservaRoutes from './routes/reserva.routes';
import habitacionRoutes from './routes/habitacion.routes';
import { errorHandler } from './middlewares/error.middleware';

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', usuarioRoutes);
app.use('/api', pagoRoutes);
app.use('/api', reservaRoutes);
app.use('/api', habitacionRoutes);

// Error handling
app.use(errorHandler);

export default app;