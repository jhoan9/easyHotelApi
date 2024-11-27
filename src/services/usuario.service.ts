import { Usuario, CreateUsuarioDTO } from '../types/usuario.types';
import { UsuarioModel } from '../models/usuario.model';
import { CustomError, Response } from '../utils/errors';

export class UsuarioService {
  async getAllUsers(): Promise<Usuario[]> {
    return UsuarioModel.findAll();
  }

  async createUser(userData: CreateUsuarioDTO): Promise<Response> {
    // Verificar si el correo ya existe
    const existingUser = await UsuarioModel.findById(userData.id_usuario);
    if (existingUser) {
      return new Response('El usuario ya está registrado', userData.id_usuario, 200);
    }

    const createdUser = await UsuarioModel.create(userData);
    return new Response('Usuario creado con éxito', createdUser, 201);
  }

  async getUserById(id: number): Promise<Response> {
    const user = await UsuarioModel.findById(id);
    if (!user) {
      throw new CustomError('Usuario no encontrado', 404);
    }
    return new Response('Usuario encontrado', user, 200);
  }

  async updateUser(idUser:number, userData: CreateUsuarioDTO): Promise<Response> {
    const updatedUser = await UsuarioModel.update(idUser, userData);
    return new Response('Usuario actualizado', updatedUser, 200);
  }
}