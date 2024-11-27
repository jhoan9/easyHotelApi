import { CreatePagoDTO, Pago } from '../types/pago.types';
import { pool } from '../config/database';
import { Response } from '../utils/errors';

export class PagoModel {
    static async create(pago: Pago): Promise<Response> {
        // Insertar el pago en la base de datos
        const [result] = await pool.execute(
            `INSERT INTO pago (
        fecha_pago,
        id_estado_pago,
        id_metodo_pago
      ) VALUES (?, ?, ?)`,
            [
                pago.fecha_pago,
                pago.id_estado_pago,
                pago.id_metodo_pago,
            ]
        );

        const insertId = (result as any).insertId;

        // Devolver el pago creado
        return new Response('Pago creado con éxito', {id_pago: insertId}, 201);
    }
}