import { Habitacion, HabitacionDetalle } from "../types/habitacion.types";
import { pool } from "../config/database";
import { Response } from "../utils/errors";

export class HabitacionModel {
    static async getAll(): Promise<Response> {

        const [rows] =
            await pool.execute(
                `SELECT hab.id_habitacion, hab.numero_habitacion, CONCAT('Habitación ', tipo.nombre_habitacion) AS habitacion, tipo.precio_habitacion AS precio, CONCAT(tipo.descripcion_habitacion, ' Ubicada en el piso', hab.piso_habitacion, ', identificada con el número ', hab.numero_habitacion) AS descripcion, hab.piso_habitacion, fecha_inicio_reserva, fecha_fin_reserva FROM habitacion hab INNER JOIN tipo_habitacion tipo ON tipo.id_tipo_habitacion = hab.id_tipo_habitacion LEFT JOIN reserva res ON res.id_habitacion = hab.id_habitacion;`,
            );
        return new Response('Habitaciones encontradas', rows as Habitacion[], 200);
    }

    static async getRoomsDetail(): Promise<Response> {
        const [rows] =
            await pool.execute(
                `SELECT 
	hab.id_habitacion,
    hab.numero_habitacion,
    CONCAT('Habitación ', tipo.nombre_habitacion) AS habitacion,
    tipo.precio_habitacion AS precio,
    CONCAT(tipo.descripcion_habitacion,
            ' Ubicada en el piso',
            hab.piso_habitacion,
            ', identificada con el número ',
            hab.numero_habitacion) AS descripcion,
	hab.piso_habitacion,
    est.nombre_estado_habitacion
FROM
    habitacion hab
        INNER JOIN
    tipo_habitacion tipo ON tipo.id_tipo_habitacion = hab.id_tipo_habitacion
        INNER JOIN
    estado_habitacion est ON est.id_estado_habitacion = hab.id_estado_habitacion;`,
            );
        return new Response('Habitaciones encontradas', rows as HabitacionDetalle[], 200);
    }
}