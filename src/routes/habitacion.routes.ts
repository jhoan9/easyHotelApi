import { Router } from "express";
import { HabitacionController } from "../controllers/habitacion.controller";

const router = Router();
const habitacionController = new HabitacionController();

router.get('/habitaciones', habitacionController.getHabitaciones.bind(habitacionController));
router.get('/habitacionesDetalle', habitacionController.getHabitacionesDetalle.bind(habitacionController));

export default router;