import { HabitacionService } from "../services/habitacion.service";
import { Request, Response, NextFunction } from 'express';

export class HabitacionController {

    private habitacionService: HabitacionService;

    constructor(){
        this.habitacionService = new HabitacionService();
    }

    async getHabitaciones(req: Request, res: Response, next: NextFunction){
        try{
            const habitaciones = await this.habitacionService.getAllRooms();
            const {data, ...habitacionesResponse} = habitaciones;
            res.status(200).json(data);
        }catch(error){
            next(error);
        }
    }

    async getHabitacionesDetalle(req: Request, res: Response, next: NextFunction){
        try{
            const habitaciones = await this.habitacionService.getRoomsDetail();
            const {data, ...habitacionesResponse} = habitaciones;
            res.status(200).json(data);
        }catch(error){
            next(error);
        }
    }
}