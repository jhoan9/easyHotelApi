import { CreatePagoDTO, Pago } from "../types/pago.types";
import { PagoModel } from "../models/pago.model";
import { Response } from "../utils/errors";

export class PagoService {
    async createPayment(paymentData: Pago): Promise<Response> {
        const dataPayment = await PagoModel.create(paymentData);
        return new Response('Pago creado con éxito', dataPayment, 201);
    }
}
