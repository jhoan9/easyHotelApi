export interface Pago{
    id_pago: number;
    fecha_pago: string;
    id_estado_pago: number;
    id_metodo_pago: number;
}

export type CreatePagoDTO = Omit<Pago, 'id_pago'>;