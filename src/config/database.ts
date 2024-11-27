// src/config/database.ts
import mysql from 'mysql2/promise';
import { env } from './env';

export const pool = mysql.createPool({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Función para probar la conexión
export const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conexión a la base de datos exitosa');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
    return false;
  }
};