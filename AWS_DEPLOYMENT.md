# 🚀 Despliegue en AWS - Guía Paso a Paso

## Opción Recomendada: AWS Lambda + API Gateway (Serverless)

Este es el método **más económico y fácil** para proyectos pequeños/medianos.

### Requisitos Previos

1. **Cuenta AWS** - Crear en https://aws.amazon.com
2. **AWS CLI** - Descargar e instalar: https://aws.amazon.com/cli/
3. **Serverless Framework** - Instalar globalmente

### 📋 Paso 1: Configurar AWS Credentials

```bash
# Instala AWS CLI si no lo tienes
aws --version

# Configura tus credenciales
aws configure

# Te pedirá:
# AWS Access Key ID: [tu-access-key]
# AWS Secret Access Key: [tu-secret-key]
# Default region: us-east-1
# Default output format: json
```

**¿De dónde obtengo las credenciales?**
1. Ve a AWS Console → IAM
2. Users → Create user
3. Attach policy: `AdministratorAccess` (para desarrollo)
4. Security credentials → Create access key
5. Copia las claves

### 🔧 Paso 2: Instalar Serverless Framework

```bash
npm install -g serverless
```

Verifica:
```bash
serverless --version
```

### 📦 Paso 3: Preparar el Backend

```bash
cd backend

# Instala las dependencias (si no las tienes)
npm install

# Asegúrate que serverless-http está instalado
npm install serverless-http --save-dev
```

### 🚀 Paso 4: Desplegar en AWS

```bash
# Desde la carpeta backend/
serverless deploy

# O con más opciones:
serverless deploy --stage prod --region us-east-1
```

**Salida esperada:**
```
endpoints:
  ANY https://abcd1234ef.execute-api.us-east-1.amazonaws.com/dev/
  ANY - https://abcd1234ef.execute-api.us-east-1.amazonaws.com/dev/{proxy+}

functions:
  api: aeropaq-backend-dev-api

layers:
  None

✅ Deployment successful
```

### 📝 Paso 5: Obtener tu URL y Testear

La URL de tu API es: `https://abcd1234ef.execute-api.us-east-1.amazonaws.com/dev`

Testa en el navegador:
```
https://abcd1234ef.execute-api.us-east-1.amazonaws.com/dev/api/health
```

Deberías ver:
```json
{
  "status": "ok",
  "message": "Backend está funcionando correctamente",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### 🔗 Paso 6: Conectar el Frontend

1. Crea `.env` en la raíz:
```
VITE_BACKEND_URL=https://abcd1234ef.execute-api.us-east-1.amazonaws.com/dev
```

2. Reconstruye el frontend:
```bash
npm run build
```

3. Deploy el build (ver Paso 7)

### 🌐 Paso 7: Desplegar Frontend en AWS (S3 + CloudFront)

#### Opción A: S3 + CloudFront (Recomendado)

```bash
# 1. Crea un bucket S3
aws s3 mb s3://aeropaq-front-produccion --region us-east-1

# 2. Sube los archivos
aws s3 sync dist/ s3://aeropaq-front-produccion --delete

# 3. Configura el bucket para sitio web estático
aws s3 website s3://aeropaq-front-produccion/ \
  --index-document index.html \
  --error-document index.html

# Tu sitio estará en:
# http://aeropaq-front-produccion.s3-website-us-east-1.amazonaws.com
```

#### Opción B: CloudFront (Más rápido globalmente)

1. AWS Console → CloudFront
2. Create distribution
3. S3 bucket: selecciona tu bucket
4. Default root object: `index.html`
5. Create

**Tu sitio estará en:** `https://d123abc.cloudfront.net`

#### Opción C: Amplify (La Más Fácil)

```bash
# 1. Sube tu código a GitHub

# 2. AWS Console → Amplify → New app

# 3. Conecta tu repo GitHub

# 4. Amplify detecta el framework y despliega automáticamente

# El sitio se actualizará con cada push a main
```

### 📊 Monitoreo y Logs

**Ver logs del backend:**
```bash
# Desde la carpeta backend/
serverless logs -f api

# O con más detalle
serverless logs -f api --tail
```

**Ver en AWS Console:**
1. AWS Console → CloudWatch → Logs
2. Busca `/aws/lambda/aeropaq-backend-dev-api`

### 💰 Costos Estimados

**Lambda:**
- 1,000,000 solicitudes/mes gratis
- $0.20 por millón de solicitudes después

**API Gateway:**
- 1,000,000 solicitudes/mes gratis
- $3.50 por millón después

**S3:**
- 5GB de almacenamiento gratis
- $0.023 por GB después

**Para un proyecto pequeño: ¡GRATIS o casi nada!** 🎉

### 🔄 Actualizar Después

**Backend:**
```bash
cd backend
# Haz cambios en index.js
serverless deploy
```

**Frontend:**
```bash
npm run build
aws s3 sync dist/ s3://aeropaq-front-produccion --delete
# O con Amplify: git push
```

### 🆘 Troubleshooting

**Error: "No credentials in shared credentials file"**
```bash
aws configure
```

**Error: "Access Denied"**
- Verifica que tu IAM user tiene permisos
- AWS Console → IAM → Attach policy: `AdministratorAccess`

**Error: "Cannot find module"**
```bash
cd backend
npm install
serverless deploy
```

**Backend retorna 502 Bad Gateway**
```bash
serverless logs -f api --tail
# Revisa los errores en CloudWatch
```

**Frontend no se conecta al backend**
- Verifica la URL en `.env`
- Comprueba que el backend está en AWS
- Revisa CORS en backend/index.js

### 📱 URLs Finales

Tendrás:
- **Frontend:** `https://d123abc.cloudfront.net` (o similar)
- **Backend:** `https://api123def.execute-api.us-east-1.amazonaws.com/dev`

Usa ambas en tu `.env` de producción.

### ✅ Checklist Final

- [ ] AWS Account creada
- [ ] AWS CLI instalado y configurado
- [ ] Serverless Framework instalado
- [ ] Backend desplegado en Lambda
- [ ] Frontend construido (`npm run build`)
- [ ] Frontend desplegado en S3/CloudFront/Amplify
- [ ] URLs actualizadas en `.env`
- [ ] Testeaste los endpoints desde tu app

¡Felicidades! 🎉 Tu app está en el cloud.

---

**Necesitas ayuda?**
- AWS Docs: https://docs.aws.amazon.com
- Serverless Docs: https://www.serverless.com/framework/docs
