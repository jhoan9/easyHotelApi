export interface Habitacion{
    id_habitacion: number;
    habitacion: string;
    precio: string;
    descripcion: string;
    piso_habitacion: number;
    fecha_inicio_reserva: string;
    fecha_fin_reserva: string;
}

export interface HabitacionDetalle{
    id_habitacion: number;
    numero_habitacion: string;
    habitacion: string;
    precio: string;
    descripcion: string;
    piso_habitacion: number;
    fnombre_estado_habitacion: string;
}
