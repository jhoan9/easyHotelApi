import { HabitacionModel } from '../models/habitacion.model';
import { Response } from '../utils/errors';

export class HabitacionService {
    async getAllRooms(): Promise<Response> {
        return HabitacionModel.getAll();
    }

    async getRoomsDetail(): Promise<Response> {
        return HabitacionModel.getRoomsDetail();
    }
}