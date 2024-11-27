import { Request, Response, NextFunction } from "express";
import { ReservaService } from "../services/reserva.service";

export class ReservaController{
    private reservaService: ReservaService;

    constructor(){
        this.reservaService = new ReservaService();
    }

    async createReserva(req: Request, res: Response, next: NextFunction){
        try{
            const newReserva = await this.reservaService.createReserva(req.body);
            const {data} = newReserva;
            return res.status(201).json(data);
        }catch(error){
            next(error);
        }
    }

    async getReservaById(req: Request, res: Response, next: NextFunction){
        try{
            const {id} = req.params;
            const reservas = await this.reservaService.getReservaById(Number(id));
            return res.status(200).json(reservas);
        }catch(error){
            next(error);
        }
    }

    async getAllReservas(req: Request, res: Response, next: NextFunction){
        try{
            const reservas = await this.reservaService.getAllReservas();
            return res.status(200).json(reservas);
        }catch(error){
            next(error);
        }
    }

    async getReservasFiltered(req: Request, res: Response, next: NextFunction){
        try{
            const reservas = await this.reservaService.getReservasFiltered();
            return res.status(200).json(reservas);
        }catch(error){
            next(error);
        }
    }
}