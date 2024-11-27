import { CreateReservaDto, Reserva, ReservaResponse, ReservationFilter } from "../types/reserva.types";
import { pool } from '../config/database';
import { Response } from "../utils/errors";

export class ReservaModel {
    static async createReserva(reserva: CreateReservaDto): Promise<Response> {

        await pool.execute(
            `INSERT INTO reserva (
                fecha_inicio_reserva,
                fecha_fin_reserva,
                id_habitacion,
                id_pago,
                id_usuario
            ) VALUES (?, ?, ?, ?, ?)`,
            [
                reserva.fecha_inicio_reserva,
                reserva.fecha_fin_reserva,
                reserva.id_habitacion,
                reserva.id_pago,
                reserva.id_usuario
            ]
        )
        return new Response('Reserva creada con éxito', reserva, 201);
    }

    static async getReservaById(id: number): Promise<ReservaResponse[]> {
        const [rows] = await pool.execute(
            `SELECT 
    res.id_reserva,
    res.fecha_inicio_reserva,
    res.fecha_fin_reserva,
    hab.numero_habitacion,
    hab.piso_habitacion,
    tipo.descripcion_habitacion
FROM
    reserva res
        INNER JOIN
    habitacion hab ON hab.id_habitacion = res.id_habitacion
    INNER JOIN tipo_habitacion tipo ON tipo.id_tipo_habitacion = hab.id_tipo_habitacion
    WHERE res.id_usuario = ?;`,
            [id]
        );

        const habitacionReserva = rows as ReservaResponse[];
        return habitacionReserva;
    }

    static async getAllReservas(): Promise<Reserva[]> {
        const [rows] = await pool.execute(
            'SELECT * FROM reserva;');
        return rows as Reserva[];
    }

    static async getReservasFiltered(): Promise<ReservationFilter[]> {
        const [rows] = await pool.execute(
            `SELECT 
    res.id_reserva,
    res.id_usuario,
    usr.nombre_usuario,
    res.fecha_inicio_reserva,
    res.fecha_fin_reserva,
    hab.numero_habitacion
FROM reserva res
INNER JOIN habitacion hab ON hab.id_habitacion = res.id_habitacion
INNER JOIN usuario usr ON usr.id_usuario = res.id_usuario;`,);
        return rows as ReservationFilter[];
    }

}