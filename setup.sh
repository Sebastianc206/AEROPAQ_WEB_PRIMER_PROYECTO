#!/bin/bash

# Script para instalar y ejecutar el proyecto completo en Linux/Mac

echo "========================================"
echo "AEROPAQ - Setup Completo"
echo "========================================"
echo ""

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado"
    echo "Por favor descárgalo de: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js detectado"

# Instalar dependencias del Frontend
echo ""
echo "📦 Instalando dependencias del Frontend..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Error al instalar dependencias del Frontend"
    exit 1
fi
echo "✅ Frontend instalado"

# Instalar dependencias del Backend
echo ""
echo "📦 Instalando dependencias del Backend..."
cd backend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Error al instalar dependencias del Backend"
    cd ..
    exit 1
fi
cd ..
echo "✅ Backend instalado"

# Crear archivo .env si no existe
if [ ! -f ".env" ]; then
    echo ""
    echo "📝 Creando archivo .env..."
    cp ".env.example" ".env"
    echo "✅ Archivo .env creado"
fi

echo ""
echo "========================================"
echo "✅ Setup completado exitosamente"
echo "========================================"
echo ""
echo "Próximos pasos:"
echo ""
echo "1. Terminal 1 - Ejecutar Frontend:"
echo "   npm run dev"
echo ""
echo "2. Terminal 2 - Ejecutar Backend:"
echo "   cd backend"
echo "   npm run dev"
echo ""
echo "3. Abre en el navegador:"
echo "   Frontend: http://localhost:5173"
echo "   Backend: http://localhost:3001/api/health"
echo ""
