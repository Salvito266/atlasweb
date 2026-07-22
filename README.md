# Atlas Devs — Landing Page

Landing page premium para Atlas Devs, construida con **Next.js 15 (App Router)**, **TailwindCSS** y **Framer Motion**.

## Stack

- Next.js 15 + React 19 + TypeScript
- TailwindCSS (tokens de diseño en `tailwind.config.ts`)
- Framer Motion (animaciones fade-up / scale-in / hover lift)
- lucide-react (iconografía)
- Fuente Manrope vía `next/font/google`

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Build de producción:

```bash
npm run build
npm start
```

## Estructura

```
app/
  layout.tsx       # Metadata, SEO, fuente Manrope
  page.tsx          # Ensambla todas las secciones + JSON-LD
  globals.css       # Tokens globales, glassmorphism, scrollbar
components/
  Navbar.tsx
  Hero.tsx
  Metrics.tsx
  Services.tsx
  CaseStudies.tsx
  Process.tsx
  FinalCta.tsx
  Footer.tsx
  ui/
    Button.tsx
    Reveal.tsx        # wrapper de animación scroll-reveal
    ServiceIcon.tsx
lib/
  data.ts           # Todo el contenido (copy, servicios, métricas, casos)
```

## Personalización rápida

- **Contenido**: edita `lib/data.ts` — ahí vive todo el copy, sin tocar componentes.
- **Colores**: edita los tokens en `tailwind.config.ts` (`background`, `surface`, `border`, `primary`, `accent`, `text`).
- **Casos de éxito**: reemplaza los bloques placeholder en `components/CaseStudies.tsx` por `<Image src={project.image} />` con screenshots reales (agrégalas en `/public`).
- **Favicon / OG image**: agrega `favicon.ico` y `og-image.png` en `/public`.

## Notas de producción

- Mobile-first, probado desde 360px de ancho.
- `prefers-reduced-motion` respetado globalmente en `globals.css`.
- Foco de teclado visible en links y botones.
- SEO: metadata completa + JSON-LD de tipo `Organization` en `app/page.tsx`.
