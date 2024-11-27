import { Usuario, CreateUsuarioDTO } from '../types/usuario.types';
import { pool } from '../config/database';
import bcrypt from 'bcrypt';
import { Response } from '../utils/errors';

export class UsuarioModel {
  static async findAll(): Promise<Usuario[]> {
    const [rows] = await pool.execute('SELECT * FROM usuario where id_rol = 2');
    return rows as Usuario[];
  }

  static async findById(id: number): Promise<Usuario | null> {
    const [rows] = await pool.execute(
      'SELECT * FROM usuario WHERE id_usuario = ?',
      [id]
    );
    const users = rows as Usuario[];
    return users.length ? users[0] : null;
  }

  static async create(usuario: CreateUsuarioDTO): Promise<Response> {
    // Validar si el id_usuario ya existe en la base de datos
    const existingUser = await this.findById(usuario.id_usuario);
    if (existingUser) {
      return new Response(`El id_usuario ${usuario.id_usuario} ya está registrado.`, usuario.id_usuario, 200);
    }

    // Hashear la clave del usuario
    const hashedPassword = await bcrypt.hash(usuario.clave_usuario, 10);

    // Insertar el usuario en la base de datos
    await pool.execute(
      `INSERT INTO usuario (
        id_usuario,
        nombre_usuario, 
        correo_usuario, 
        telefono_usuario, 
        ciudad_usuario, 
        pais_usuario, 
        clave_usuario,
        id_rol
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        usuario.id_usuario, // Incluir el id_usuario proporcionado
        usuario.nombre_usuario,
        usuario.correo_usuario,
        usuario.telefono_usuario,
        usuario.ciudad_usuario,
        usuario.pais_usuario,
        hashedPassword,
        2
      ]
    );

    // Devolver el usuario creado
    return new Response('Usuario creado con éxito', usuario, 200);

  }

  static async update(id_user:number, usuario: CreateUsuarioDTO): Promise<Response> {

    // Hashear la clave del usuario
    const hashedPassword = await bcrypt.hash(usuario.clave_usuario, 10);

    // Actualizar el usuario en la base de datos
    await pool.execute(
      `UPDATE usuario SET 
        nombre_usuario = ?,
        correo_usuario = ?,
        telefono_usuario = ?,
        ciudad_usuario = ?,
        pais_usuario = ?,
        clave_usuario = ?
        WHERE id_usuario = ?`,
      [
        usuario.nombre_usuario,
        usuario.correo_usuario,
        usuario.telefono_usuario,
        usuario.ciudad_usuario,
        usuario.pais_usuario,
        hashedPassword,
        id_user
      ]
    );

    // Devolver el usuario actualizado
    return new Response('Usuario actualizado con éxito', usuario, 200);
  }
}
