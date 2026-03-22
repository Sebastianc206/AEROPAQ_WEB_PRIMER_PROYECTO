# AEROPAQ_WEB_PRIMER_PROYECTO
# AeroPaq — Sitio Web Corporativo

Plataforma web estática para la empresa de paquetería **AeroPaq**, desarrollada como parte del Proyecto de Aplicación 1 del curso de Programación Web — Universidad Rafael Landívar, 1S2026.

El sitio comunica la propuesta de valor de AeroPaq, sus servicios, cobertura, proceso de envío y permite a los usuarios cotizar envíos y contactar a la empresa.

---

## Tabla de Contenidos

- [Tecnologías y versiones](#tecnologías-y-versiones)
- [Cómo ejecutar el proyecto](#cómo-ejecutar-el-proyecto)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Decisiones técnicas relevantes](#decisiones-técnicas-relevantes)
- [Funcionalidades implementadas](#funcionalidades-implementadas)
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
| Google Apps Script | — | Backend para formulario de contacto |

> Para verificar tus versiones locales: `node -v` y `npm -v`

---

## Cómo ejecutar el proyecto

### Prerequisitos

Tener instalado [Node.js](https://nodejs.org/en) (versión LTS recomendada).

### Pasos

**1. Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/aeropaq.git
cd aeropaq
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
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Genera la versión de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción localmente |

---

## Estructura del proyecto

```
aeropaq/
├── public/                  # Archivos estáticos públicos
├── src/
│   ├── assets/              # Imágenes y recursos estáticos
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

### ¿Por qué React + Vite?

Se utilizó **React** por ser el framework solicitado en los requisitos del proyecto. Se eligió **Vite** como herramienta de build en lugar de Create React App (CRA) porque:

- Es significativamente más rápido en el arranque del servidor de desarrollo (~300ms vs ~10s).
- Create React App fue discontinuado oficialmente en 2023 y ya no recibe mantenimiento.
- Vite es el estándar actual de la industria para proyectos React modernos.

### Navegación con React Router DOM

Se implementó **React Router DOM** para manejar la navegación entre páginas sin recargar el sitio (Single Page Application). Cada sección del enunciado corresponde a una ruta independiente:

| Ruta | Página |
|---|---|
| `/` | Inicio (Home) |
| `/servicios` | Servicios |
| `/cobertura` | Cobertura |
| `/como-funciona` | Cómo Funciona |
| `/sobre-nosotros` | Sobre Nosotros |
| `/faq` | Preguntas Frecuentes |
| `/contacto` | Contacto |
| `/cotizador` | Cotizador de Envíos |

### Estructura de componentes

Se separaron en **`components/`** únicamente las piezas reutilizables que aparecen en todas las vistas: `Navbar` y `Footer`.

Las secciones de la landing page (Hero, Servicios, Cotizador, ComoFunciona, Cobertura, SobreNosotros, FAQ y Contacto) se implementaron como componentes funcionales locales dentro de `Home.jsx`, dado que todas forman parte de una misma vista y no se reutilizan en otras rutas. Esto simplifica la organización sin sacrificar la estructura de componentes de React.

### CSS por componente (sin librerías externas)

Se optó por **CSS puro por componente** siguiendo los requisitos del proyecto que especifican el uso de CSS sin frameworks de terceros. Se utilizan variables CSS (custom properties) definidas en `:root` para mantener consistencia en colores, tipografía y espaciados a lo largo de todo el sitio.

### Formulario de contacto con Google Apps Script

El formulario de contacto envía los datos directamente a **Google Sheets** mediante un **Google Apps Script** desplegado como Web App. Esto permite almacenar las respuestas sin necesidad de un backend propio, manteniendo el sitio como una solución completamente estática.

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

El sitio está diseñado para funcionar correctamente en **computadoras y teléfonos** usando media queries CSS. El Navbar incluye un menú hamburguesa para pantallas menores a 900px.

---

## Funcionalidades implementadas

- [x] Navbar responsivo con menú hamburguesa para móvil
- [x] Hero con animaciones CSS
- [x] Resumen de servicios en Home
- [x] Sección "Cómo funciona" (4 pasos)
- [x] Footer
- [ ] Página de Servicios
- [ ] Página de Cobertura
- [ ] Página Sobre Nosotros
- [ ] FAQ
- [ ] Formulario de Contacto con validaciones y Google Sheets
- [ ] Cotizador de envíos

---

## Integrantes

| Nombre | Carné |
|---|---|
| Sebastián Cuevas | 1034222 |
| Saul Ovalle | 1226122 |
