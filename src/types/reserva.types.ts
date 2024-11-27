export interface Reserva {
    id_reserva: number;
    fecha_inicio_reserva: string;
    fecha_fin_reserva: string;
    id_habitacion: number;
    id_pago: number;
    id_usuario: number;
}

export type CreateReservaDto = Omit<Reserva, 'id_reserva'>;


export interface ReservaResponse {
    id_reserva: number;
    fecha_inicio_reserva: string;
    fecha_fin_reserva: string;
    numero_habitacion: number;
    piso_habitacion: number;
    descripcion_habitacion: string;
}

export interface ReservationFilter {
    id_reserva: number,
    id_usuario: number,
    nombre_usuario: string,
    fecha_inicio_reserva: string,
    fecha_fin_reserva: string,
    numero_habitacion: number,
}