import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    process.env.FRONTEND_URL || '*'
  ],
  credentials: true
}));
app.use(express.json());

// Rutas de prueba
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Backend está funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    app: 'AEROPAQ Backend',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    deployed: new Date().toISOString()
  });
});

// Endpoint POST de ejemplo
app.post('/api/echo', (req, res) => {
  const data = req.body;
  res.json({
    message: 'Echo desde el backend',
    receivedData: data,
    timestamp: new Date().toISOString()
  });
});

// Endpoint para simular procesamiento
app.post('/api/process', (req, res) => {
  const { number } = req.body;
  
  if (!number || isNaN(number)) {
    return res.status(400).json({
      error: 'Se requiere un número válido'
    });
  }

  const result = {
    originalNumber: number,
    doubled: number * 2,
    squared: number * number,
    description: `Procesamiento completado para el número ${number}`
  };

  res.json(result);
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    path: req.path,
    method: req.method
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor backend ejecutándose en puerto ${PORT}`);
  console.log(`📍 Prueba: http://localhost:${PORT}/api/health`);
});

// Para uso con AWS Lambda
export { app };
