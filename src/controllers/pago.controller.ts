import { Request, Response, NextFunction } from "express";
import { PagoService } from "../services/pago.service";

export class PagoController{
    private pagoService: PagoService;

    constructor(){
        this.pagoService = new PagoService();
    }

    async createPayment(req: Request, res: Response, next: NextFunction){
        try{
            const newPayment = await this.pagoService.createPayment(req.body);
            const {data} = newPayment;
            return res.status(201).json(data);
        }catch(error){
            next(error);
        }
    }
}
