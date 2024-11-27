import { ResponseService } from "./response";

export class CustomError extends Error {
  constructor(
    public message: string,
    public statusCode: number
  ) {
    super(message);
    this.name = 'CustomError';
  }
}

export class Response extends ResponseService {
  constructor(message: string, data: any, statusCode: number) {
    super(message, data, statusCode);
  }

  // Puedes agregar métodos estáticos o adicionales aquí
  static CREATED = new Response('Created successfully', null, 201);
}
