# Tu Coche Alemán

Web React/Vite con portfolio y blog basados en datos, rutas internas, SEO dinámico y formulario conectado a una API SMTP.

## Desarrollo

1. `npm install`
2. Copia `.env.example` como `.env` y añade los datos reales.
3. En una terminal: `npm run server`
4. En otra terminal: `npm run dev`

## Contenido

- Vehículos: `src/data/projects.js`
- Artículos: `src/data/posts.js`
- Datos de contacto: `src/config.js`
- Imágenes: `public/images/`

## Producción

Ejecuta `npm run build` y publica `dist/` en un proveedor compatible con SPA. La API de `server/contact.mjs` debe desplegarse en un servicio Node y recibir las variables SMTP del entorno. Configura todas las rutas para devolver `index.html` y nunca publiques el archivo `.env`.

Antes de lanzar, sustituye teléfono, correo, datos legales, casos demostrativos y cualquier afirmación comercial por información verificable de la empresa.
