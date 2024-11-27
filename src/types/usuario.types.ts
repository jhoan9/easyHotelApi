export interface Usuario {
    id_usuario: number;
    nombre_usuario: string;
    correo_usuario: string;
    telefono_usuario: string;
    ciudad_usuario: string;
    pais_usuario: string;
    clave_usuario: string;
  }
  
  export type CreateUsuarioDTO = Usuario;