# AEROPAQ - Frontend + Backend

Proyecto fullstack con React + Express.js listo para AWS.

## 📁 Estructura del Proyecto

```
AEROPAQ_WEB_PRIMER_PROYECTO/
├── src/                          # Código frontend React
│   ├── components/
│   │   ├── TestBackend.jsx       # Componente para probar backend
│   │   ├── TestBackend.css       # Estilos del componente
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── backend/                       # Código backend Express
│   ├── index.js                  # Servidor Express
│   ├── serverless.js             # Adaptador Lambda
│   ├── serverless.yml            # Config para despliegue AWS
│   ├── package.json
│   └── README_BACKEND.md
├── package.json                  # Frontend dependencies
├── vite.config.js
├── .env.example                  # Variables de entorno
└── README.md
```

## 🚀 Inicio Rápido

### 1️⃣ Instala dependencias

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd backend
npm install
```

### 2️⃣ Configura variables de entorno

Crea un archivo `.env` en la raíz (copiar de `.env.example`):
```bash
VITE_BACKEND_URL=http://localhost:3001
```

### 3️⃣ Ejecuta en desarrollo

**En terminal 1 (Frontend):**
```bash
npm run dev
```

**En terminal 2 (Backend):**
```bash
cd backend
npm run dev
```

Ahora tienes:
- 🎨 Frontend: http://localhost:5173
- 🔧 Backend: http://localhost:3001
- 🧪 API Health: http://localhost:3001/api/health

### 4️⃣ Prueba el Backend desde React

Edita [src/App.jsx](src/App.jsx) e importa el componente:

```jsx
import TestBackend from './components/TestBackend';

export default function App() {
  return (
    <div>
      {/* Tus otros componentes */}
      <TestBackend />
    </div>
  );
}
```

## 📡 Endpoints Disponibles

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/health` | Verifica que el servidor está activo |
| GET | `/api/info` | Información del servidor |
| POST | `/api/echo` | Echo del servidor |
| POST | `/api/process` | Procesa un número |

## 🌐 Despliegue en AWS

### Opción 1: Lambda + API Gateway (Serverless) ⭐ Recomendado

**1. Instala Serverless Framework:**
```bash
npm install -g serverless
```

**2. Configura AWS:**
```bash
aws configure
# Proporciona:
# - AWS Access Key ID
# - AWS Secret Access Key
# - Default region: us-east-1
# - Default output format: json
```

**3. Desde la carpeta `backend`, despliega:**
```bash
cd backend
serverless deploy
```

**4. Obtén tu URL:**
Serverless mostrará algo como:
```
endpoint: https://abcd1234.execute-api.us-east-1.amazonaws.com/dev
```

**5. Actualiza tu frontend:**
Crea `.env` con:
```
VITE_BACKEND_URL=https://abcd1234.execute-api.us-east-1.amazonaws.com/dev
```

**6. Redeploy del frontend:**
```bash
npm run build
```

### Opción 2: EC2 (Servidor Virtual)

1. Lanza instancia EC2 en AWS Console
2. Conéctate por SSH
3. Instala Node.js:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs npm
```

4. Clona tu repo y ejecuta:
```bash
git clone <tu-repo>
cd AEROPAQ_WEB_PRIMER_PROYECTO/backend
npm install
NODE_ENV=production npm start
```

5. Usa PM2 para mantenerlo activo:
```bash
sudo npm install -g pm2
pm2 start index.js
pm2 startup
pm2 save
```

### Opción 3: App Runner (Simplificado)

1. Sube tu código a GitHub
2. AWS Console → App Runner
3. Conecta tu repo GitHub
4. Configura el Dockerfile o usa buildpacks automáticos
5. Deploy automático

## 🛠️ Desarrollo

### Agregar nuevos endpoints

En [backend/index.js](backend/index.js):

```javascript
app.post('/api/tuendpoint', (req, res) => {
  const { data } = req.body;
  
  // Tu lógica aquí
  
  res.json({ resultado: 'tu resultado' });
});
```

### Variables de entorno

**Backend (.env en carpeta backend):**
```
NODE_ENV=development
PORT=3001
DATABASE_URL=mongodb://...
JWT_SECRET=tu_secret_aqui
```

### CORS

Por defecto, el backend permite:
- `http://localhost:5173` (Frontend local)
- `http://localhost:3000`
- URL de producción (variable `FRONTEND_URL`)

Modifica en [backend/index.js](backend/index.js) si necesitas otras URLs.

## 📊 Logs y Debugging

**Ver logs del backend:**
```bash
npm run dev  # En modo desarrollo
```

**Ver logs en AWS:**
```bash
serverless logs -f api
```

## ✅ Checklist de Despliegue

- [ ] Backend funciona localmente (`npm run dev` en backend/)
- [ ] Frontend se conecta al backend (TestBackend.jsx funciona)
- [ ] Configuraste `.env` con `VITE_BACKEND_URL`
- [ ] Instalaste y configuraste AWS CLI (`aws configure`)
- [ ] Instalaste Serverless Framework
- [ ] Desplegaste el backend (`serverless deploy`)
- [ ] Actualizaste `.env` con URL de Lambda
- [ ] Hiciste build del frontend (`npm run build`)
- [ ] Testeaste endpoints en AWS

## 🐛 Troubleshooting

**"Cannot find module 'express'"**
```bash
cd backend && npm install
```

**"CORS error"**
- Verifica que `VITE_BACKEND_URL` es correcto
- Chequea que el backend tiene CORS habilitado

**"Backend no responde en AWS"**
```bash
serverless logs -f api --tail
```

**Puerto 3001 ya en uso**
```bash
# Cambia el puerto en backend/index.js o:
PORT=3002 npm run dev
```

## 📝 Recursos Útiles

- [Express.js Docs](https://expressjs.com/)
- [React Docs](https://react.dev)
- [AWS Lambda Docs](https://docs.aws.amazon.com/lambda/)
- [Vite Docs](https://vitejs.dev)
- [Serverless Framework](https://www.serverless.com/)

## 💡 Próximos Pasos Sugeridos

1. **Base de datos**: Agregar MongoDB o PostgreSQL
2. **Autenticación**: JWT o AWS Cognito
3. **Validación**: Joi o Zod
4. **Testing**: Jest para backend
5. **CI/CD**: GitHub Actions o AWS CodePipeline
6. **Logging**: CloudWatch en AWS

---

¿Necesitas ayuda con algo específico? 🚀
