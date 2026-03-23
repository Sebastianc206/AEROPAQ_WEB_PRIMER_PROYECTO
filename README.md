# AeroPaq 

Plataforma web estática para la empresa de paquetería **AeroPaq**, desarrollada como parte del Proyecto de Aplicación 1 del curso de Programación Web

El sitio comunica la propuesta de valor de AeroPaq, sus servicios, cobertura, proceso de envío y permite a los usuarios cotizar envíos y contactar a la empresa.

---

## Tabla de Contenidos

- [Tecnologías y versiones](#tecnologías-y-versiones)
- [Cómo ejecutar el proyecto](#cómo-ejecutar-el-proyecto)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Decisiones técnicas relevantes](#decisiones-técnicas-relevantes)
- [Funcionalidades implementadas](#funcionalidades-implementadas)
- [Despliegue](#despliegue)
- [Integrantes](#integrantes)

---

## Tecnologías y versiones

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | 19.x | Librería principal de UI |
| [Vite](https://vitejs.dev/) | 8.x | Bundler y servidor de desarrollo |
| [React Router DOM](https://reactrouter.com/) | 7.x | Navegación entre páginas |
| CSS3 | — | Estilos por componente |
| [Node.js](https://nodejs.org/) | 22.x | Entorno de ejecución |
| [npm](https://www.npmjs.com/) | 10.x | Gestión de dependencias |
| [Google Apps Script](https://developers.google.com/apps-script) | — | Web App para recibir datos del formulario y escribirlos en Google Sheets |
| [Netlify](https://www.netlify.com/) | — | Hosting y despliegue continuo |

> Para verificar tus versiones locales ejecuta: `node -v` y `npm -v`

---

## Cómo ejecutar el proyecto

### Prerequisitos

Tener instalado [Node.js](https://nodejs.org/en) (versión LTS recomendada).

### Pasos

**1. Clonar el repositorio**
```bash
git clone https://github.com/Sebastianc206/AEROPAQ_WEB_PRIMER_PROYECTO.git
cd AEROPAQ_WEB_PRIMER_PROYECTO
```

**2. Instalar dependencias**
```bash
npm install
```

**3. Iniciar el servidor de desarrollo**
```bash
npm run dev
```

**4. Abrir en el navegador**
```
http://localhost:5173
```

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con HMR (Hot Module Replacement) |
| `npm run build` | Genera la versión de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción localmente |

---

## Estructura del proyecto

```
AEROPAQ_WEB_PRIMER_PROYECTO/
├── public/                  # Archivos estáticos públicos
│   └── _redirects           # Configuración de rutas para Netlify
├── src/
│   ├── assets/              # Recursos estáticos generales
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.jsx       # Barra de navegación principal
│   │   ├── Navbar.css
│   │   ├── Footer.jsx       # Pie de página
│   │   └── Footer.css
│   ├── Imagenes/            # Imágenes utilizadas en el sitio
│   ├── pages/
│   │   ├── Home.jsx         # Vista principal — contiene Hero, Servicios,
│   │   │                    # Cotizador, ComoFunciona, Cobertura,
│   │   │                    # SobreNosotros, FAQ y Contacto
│   │   └── Home.css
│   ├── App.jsx              # Componente raíz con definición de rutas
│   ├── App.css
│   ├── index.css            # Estilos globales
│   └── main.jsx             # Punto de entrada de la aplicación
├── .gitignore
├── eslint.config.js
├── index.html               # HTML base (único, SPA)
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Decisiones técnicas relevantes

### Por qué React + Vite

Se utilizó **React** por ser el framework solicitado en los requisitos del proyecto. Se eligió **Vite** como herramienta de build en lugar de Create React App (CRA) porque:

- Es significativamente más rápido en el arranque del servidor de desarrollo (~300ms vs ~10s).
- Create React App fue discontinuado oficialmente en 2023 y ya no recibe mantenimiento activo.
- Vite es el estándar actual de la industria para proyectos React modernos.

### Navegación con React Router DOM

Se implementó **React Router DOM** para manejar la navegación sin recargar el sitio (Single Page Application). Dado que el sitio es una landing page de una sola vista con scroll, todas las secciones se encuentran en la ruta raíz `/`. La navegación del Navbar usa scroll suave hacia cada sección mediante `id` de HTML.

### Estructura de componentes

Se separaron en **`components/`** únicamente las piezas reutilizables que aparecen en todas las vistas: `Navbar` y `Footer`.

Las secciones de la landing page (Hero, Servicios, Cotizador, ComoFunciona, Cobertura, SobreNosotros, FAQ y Contacto) se implementaron como componentes funcionales locales dentro de `Home.jsx`, dado que todas forman parte de una misma vista y no se reutilizan en otras rutas. Esto simplifica la organización sin sacrificar la estructura de componentes de React.

### CSS por componente sin librerías externas

Se optó por **CSS puro por componente** siguiendo los requisitos del proyecto que especifican el uso de CSS sin frameworks de terceros. Se utilizan variables CSS (custom properties) definidas en `:root` para mantener consistencia en colores, tipografía y espaciados a lo largo de todo el sitio.

### Formulario de contacto con Google Apps Script

El formulario de contacto envía los datos directamente a **Google Sheets** mediante un **Google Apps Script** desplegado como Web App. Esto permite almacenar las respuestas sin necesidad de un backend propio, manteniendo el sitio como una solución completamente estática.

El flujo de datos es el siguiente:

1. El usuario llena y envía el formulario en el sitio
2. React realiza un `fetch POST` con los datos en formato JSON hacia el endpoint del Apps Script
3. El script recibe los datos y agrega una nueva fila en Google Sheets con: fecha, nombre, correo, teléfono y mensaje
4. Los datos quedan almacenados automáticamente sin intervención manual

Se utilizó `mode: 'no-cors'` en el fetch debido a que Google Apps Script no permite CORS desde dominios externos. Esto significa que el sitio no puede leer la respuesta del servidor, pero los datos sí se escriben correctamente en la hoja.

El formulario incluye validaciones en el frontend para: nombre (mínimo 2 caracteres), correo (formato válido), teléfono (7-15 dígitos) y mensaje (mínimo 10 caracteres). El botón se deshabilita mientras se procesa el envío para evitar duplicados y se muestra un mensaje de confirmación al completarse.

### Cotizador de envíos

El cotizador opera completamente en el frontend sin llamadas a un servidor externo. El cálculo del costo se realiza en tiempo real con la siguiente lógica:

- Costo base según tipo de ruta (misma ciudad, otro departamento, internacional)
- Costo por peso (precio por kg según la ruta)
- Ajuste volumétrico opcional si se ingresan dimensiones (fórmula: ancho x alto x largo / 5000)
- Multiplicador por nivel de servicio (estándar x1, exprés x1.6)
- Extras opcionales: recolección a domicilio (+Q20) y seguro (+Q15)

### Estrategia de ramas en Git

El repositorio utiliza la siguiente estrategia de ramas:

| Rama | Propósito |
|---|---|
| `main` | Versión estable y desplegada |
| `feature/nav_bar` | Desarrollo de la barra de navegación |
| `feature/footer` | Desarrollo del footer |
| `Web_Landing` | Desarrollo de la landing page principal |

Cada funcionalidad se desarrolla en una rama independiente y se integra a `main` mediante Pull Requests.

### Diseño responsivo

El sitio está diseñado para funcionar correctamente en computadoras y teléfonos usando media queries CSS. El Navbar incluye un menú hamburguesa para pantallas menores a 900px. Las secciones utilizan CSS Grid con `auto-fit` para adaptarse automáticamente al ancho disponible.

---

## Funcionalidades implementadas

- [x] Navbar responsivo con menú hamburguesa para móvil
- [x] Hero con estadísticas y tarjeta de seguimiento animada
- [x] Sección de servicios (Envíos Nacionales, Internacionales, Recolección, Exprés)
- [x] Cotizador de envíos con desglose de costos y tiempo estimado
- [x] Sección Cómo Funciona (4 pasos)
- [x] Sección de Cobertura (local, nacional, internacional)
- [x] Sección Sobre Nosotros (historia, misión, visión, valores)
- [x] Preguntas Frecuentes (FAQ) con acordeón interactivo
- [x] Formulario de Contacto con validaciones y almacenamiento en Google Sheets
- [x] Footer
- [x] Sitio responsivo para computadoras y teléfonos
- [x] Despliegue en Netlify

---

## Despliegue

El sitio está desplegado en **Netlify** con integración continua desde GitHub. Cada `git push` a la rama `main` desencadena un nuevo build y despliegue automático.

- Build command: `npm run build`
- Publish directory: `dist`
- El archivo `public/_redirects` contiene la regla `/* /index.html 200` para que React Router maneje correctamente todas las rutas en producción.

---

## Integrantes

| Nombre | Carné |
|---|---|
| Sebastián Cuevas | 1034222 |
| Saul Ovalle | 1226122 |
