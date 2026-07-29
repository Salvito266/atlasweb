# Atlas Devs — Landing Page

Landing page para Atlas Devs, creada con React, TypeScript, Vite, Tailwind CSS y Framer Motion.

## Tecnologías

- React 19 y TypeScript
- Vite 6 para desarrollo y compilación
- Tailwind CSS para estilos y tokens de diseño
- Framer Motion para animaciones
- Lucide React para iconografía
- Fuente Manrope cargada desde Google Fonts

## Requisitos

- Node.js 18 o superior
- npm

## Desarrollo local

Instala las dependencias y levanta el servidor de desarrollo:

```bash
npm install
npm run dev
```

Vite mostrará la URL local en la terminal; habitualmente es `http://localhost:5173`.

## Compilación y vista previa

Genera los archivos estáticos de producción:

```bash
npm run build
```

Para revisar el resultado localmente:

```bash
npm run preview
```

La compilación se genera en `dist/`. Puede desplegarse en cualquier hosting de archivos estáticos, configurando esa carpeta como directorio de publicación.

## Estructura

```text
public/                    # Imágenes y páginas estáticas
src/
  components/              # Secciones de la landing
    ui/                    # Componentes reutilizables
  lib/data.ts              # Copy, servicios, métricas y proyectos
  App.tsx                  # Ensamble de la página
  index.css                # Estilos globales
  main.tsx                 # Punto de entrada de React
index.html                 # Metadatos y documento base
tailwind.config.ts         # Tokens visuales de Tailwind
vite.config.ts             # Configuración de Vite
```

## Personalización

- **Contenido:** edita `src/lib/data.ts` para cambiar servicios, métricas, proyectos y datos de contacto.
- **Diseño:** ajusta colores, sombras, radios y animaciones en `tailwind.config.ts`.
- **Imágenes de proyectos:** añade los archivos en `public/` y referencia su ruta desde `src/lib/data.ts`.
- **SEO:** actualiza el título, la descripción, la URL canónica y los metadatos Open Graph en `index.html`.
- **Identidad visual:** agrega `public/favicon.ico` y `public/og-image.png` antes de publicar.

## Notas de producción

- La interfaz es responsive y respeta `prefers-reduced-motion`.
- Los enlaces de teclado tienen foco visible.
- Verifica los enlaces, las imágenes y los datos de contacto antes de cada despliegue.
- Optimiza las imágenes grandes y usa formatos modernos como WebP o AVIF para mejorar la carga.
