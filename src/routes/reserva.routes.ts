import { Router } from "express";
import { ReservaController } from "../controllers/reserva.controller";

const router = Router();
const reservaController = new ReservaController();

router.post('/reservas', reservaController.createReserva.bind(reservaController));
router.get('/reservas/:id', reservaController.getReservaById.bind(reservaController));
router.get('/reservas', reservaController.getAllReservas.bind(reservaController));
router.get('/reservasfiltered', reservaController.getReservasFiltered.bind(reservaController));

export default router;
