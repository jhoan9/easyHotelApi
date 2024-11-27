import {Router} from 'express';
import {PagoController} from '../controllers/pago.controller';
//import {validateCreatePago} from '../middlewares/validation.middleware';

const router = Router();
const pagoController = new PagoController();

router.post('/pagos', pagoController.createPayment.bind(pagoController));

export default router;
