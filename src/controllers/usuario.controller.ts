import { Request, Response, NextFunction } from 'express';
import { UsuarioService } from '../services/usuario.service';
import { CreateUsuarioDTO } from '../types/usuario.types';

export class UsuarioController {
  private usuarioService: UsuarioService;

  constructor() {
    this.usuarioService = new UsuarioService();
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const newUser = await this.usuarioService.createUser(req.body);
      // Eliminamos la contraseña del objeto de respuesta
      const { data, ...userResponse } = newUser;
      res.status(201).json(userResponse);
    } catch (error) {
      next(error);
    }
  }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.usuarioService.getAllUsers();
      // Eliminamos las contraseñas del objeto de respuesta
      const usersWithoutPassword = users.map(({ clave_usuario, ...user }) => user);
      res.json(usersWithoutPassword);
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.usuarioService.getUserById(Number(req.params.id));
      const { data, ...userWithoutPassword } = user;
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    console.log("Update ", req.body);
    const idUser:number = req.body.id;
    const body:CreateUsuarioDTO = req.body;
    console.log("id User ", idUser);
    console.log("body ", body);
    try {
      const updatedUser = await this.usuarioService.updateUser(idUser, body);
      const { data, ...userResponse } = updatedUser;
      res.json(userResponse);
    } catch (error) {
      next(error);
    }
  }
}