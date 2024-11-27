// src/index.ts
import app from './app';
import { env } from './config/env';
import { testConnection } from './config/database';

const startServer = async () => {
  try {
    // Verificar conexión a la base de datos
    const isConnected = await testConnection();
    if (!isConnected) {
      throw new Error('No se pudo establecer conexión con la base de datos');
    }

    // Iniciar servidor
    app.listen(env.PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${env.PORT}`);
      console.log(`📝 Ambiente: ${env.NODE_ENV}`);
    });

  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

startServer();