@echo off
REM Script para instalar y ejecutar el proyecto completo en Windows

echo ========================================
echo AEROPAQ - Setup Completo
echo ========================================
echo.

REM Verificar si Node.js está instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js no está instalado
    echo Por favor descárgalo de: https://nodejs.org
    pause
    exit /b 1
)

echo ✅ Node.js detectado

REM Instalar dependencias del Frontend
echo.
echo 📦 Instalando dependencias del Frontend...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Error al instalar dependencias del Frontend
    pause
    exit /b 1
)
echo ✅ Frontend instalado

REM Instalar dependencias del Backend
echo.
echo 📦 Instalando dependencias del Backend...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Error al instalar dependencias del Backend
    cd ..
    pause
    exit /b 1
)
cd ..
echo ✅ Backend instalado

REM Crear archivo .env si no existe
if not exist ".env" (
    echo.
    echo 📝 Creando archivo .env...
    copy ".env.example" ".env" >nul
    echo ✅ Archivo .env creado
)

echo.
echo ========================================
echo ✅ Setup completado exitosamente
echo ========================================
echo.
echo Próximos pasos:
echo.
echo 1. Terminal 1 - Ejecutar Frontend:
echo    npm run dev
echo.
echo 2. Terminal 2 - Ejecutar Backend:
echo    cd backend
echo    npm run dev
echo.
echo 3. Abre en el navegador:
echo    Frontend: http://localhost:5173
echo    Backend: http://localhost:3001/api/health
echo.

pause
