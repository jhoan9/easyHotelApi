import { CreateReservaDto } from "../types/reserva.types";
import { ReservaModel } from "../models/reserva.model";
import { Response } from "../utils/errors";

export class ReservaService {
    async createReserva(reservaData:CreateReservaDto): Promise<Response>{
        const dataReserva = await ReservaModel.createReserva(reservaData);
        return new Response('Reserva creada con éxito', dataReserva, 201);
    }

    async getReservaById(id: number){
        const reservas = await ReservaModel.getReservaById(id);
        return reservas;
    }

    async getAllReservas(){
        const reservas = await ReservaModel.getAllReservas();
        return reservas;
    }

    async getReservasFiltered(){
        const reservas = await ReservaModel.getReservasFiltered();
        return reservas;
    }
}
