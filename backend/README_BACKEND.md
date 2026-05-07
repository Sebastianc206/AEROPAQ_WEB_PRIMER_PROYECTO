# Backend AEROPAQ

Backend simple con Express.js listo para producción y AWS Lambda.

## 🚀 Instalación local

```bash
cd backend
npm install
npm run dev
```

El servidor estará disponible en: `http://localhost:3001`

## 🧪 Endpoints de prueba

### GET /api/health
Verifica que el backend está funcionando.

```bash
curl http://localhost:3001/api/health
```

### GET /api/info
Información del servidor.

```bash
curl http://localhost:3001/api/info
```

### POST /api/echo
Echo del servidor (devuelve lo que envíes).

```bash
curl -X POST http://localhost:3001/api/echo \
  -H "Content-Type: application/json" \
  -d '{"mensaje": "Hola desde el frontend"}'
```

### POST /api/process
Procesa un número (duplica y eleva al cuadrado).

```bash
curl -X POST http://localhost:3001/api/process \
  -H "Content-Type: application/json" \
  -d '{"number": 5}'
```

## 📡 Probar desde React

En tu componente React:

```javascript
// Verificar que el backend está activo
async function testBackend() {
  try {
    const response = await fetch('http://localhost:3001/api/health');
    const data = await response.json();
    console.log('Backend status:', data);
  } catch (error) {
    console.error('Backend no disponible:', error);
  }
}
```

## 🌐 Despliegue en AWS

### Opción 1: AWS Lambda + API Gateway (Recomendado - Serverless)

1. **Instala Serverless Framework:**
```bash
npm install -g serverless
```

2. **Configura AWS (si no lo has hecho):**
```bash
aws configure
# Proporciona: Access Key ID, Secret Access Key, región (ej: us-east-1)
```

3. **Crea el archivo serverless.yml:**

```yaml
service: aeropaq-backend

frameworkVersion: '3'

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1
  environment:
    NODE_ENV: production

functions:
  api:
    handler: serverless.handler
    events:
      - http:
          path: /{proxy+}
          method: ANY
          cors: true
      - http:
          path: /
          method: ANY
          cors: true

plugins:
  - serverless-http

package:
  patterns:
    - '!node_modules/**'
    - 'node_modules/express/**'
    - 'node_modules/cors/**'
```

4. **Despliega:**
```bash
serverless deploy
```

Esto te dará la URL de la API Gateway.

### Opción 2: AWS EC2

1. Lanza una instancia EC2 (Ubuntu)
2. SSH a tu instancia
3. Instala Node.js:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. Clone el repositorio y ejecuta:
```bash
cd backend
npm install
NODE_ENV=production npm start
```

5. Usa PM2 para mantener el servidor activo:
```bash
sudo npm install -g pm2
pm2 start index.js --name aeropaq
pm2 startup
pm2 save
```

### Opción 3: AWS App Runner

1. Sube tu código a GitHub
2. Ve a App Runner en AWS Console
3. Crea un nuevo servicio desde tu repo
4. Configura puertos: `3001`

## 🔗 Variables de entorno

Crea un archivo `.env` en la carpeta backend:

```
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:5173
```

## 📦 Archivos principales

- `index.js` - Servidor Express principal
- `serverless.js` - Adaptador para AWS Lambda
- `package.json` - Dependencias
- `.gitignore` - Archivos a ignorar

## ✅ Próximos pasos

1. Personaliza los endpoints según tus necesidades
2. Añade una base de datos (MongoDB, PostgreSQL)
3. Implementa autenticación (JWT, OAuth)
4. Despliega en AWS
5. Conecta desde tu frontend React

¡Éxito! 🎉
