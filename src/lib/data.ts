export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export const metrics = [
  { value: "20+", label: "Proyectos entregados" },
  { value: "95%", label: "Satisfacción de clientes" },
  { value: "48h", label: "Tiempo promedio de respuesta" },
  { value: "100%", label: "Soporte post lanzamiento" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "code" | "smartphone" | "brain" | "chart" | "cloud" | "shield";
};

export const services: Service[] = [
  {
    id: "web",
    title: "Desarrollo Web",
    description:
      "Plataformas y sitios corporativos de alto rendimiento, construidos con arquitecturas modernas y escalables.",
    icon: "code",
  },
  {
    id: "mobile",
    title: "Aplicaciones Móviles",
    description:
      "Apps nativas e híbridas con experiencias fluidas, pensadas para retener usuarios y escalar sin fricción.",
    icon: "smartphone",
  },
  {
    id: "ai",
    title: "Inteligencia Artificial",
    description:
      "Modelos y agentes de IA a medida que automatizan procesos y generan ventaja competitiva real.",
    icon: "brain",
  },
  {
    id: "dashboards",
    title: "Dashboards y Analítica",
    description:
      "Paneles de datos en tiempo real que transforman información compleja en decisiones claras.",
    icon: "chart",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description:
      "Infraestructura escalable, despliegues automatizados y monitoreo continuo para operar sin interrupciones.",
    icon: "cloud",
  },
  {
    id: "security",
    title: "Ciberseguridad",
    description:
      "Auditorías, hardening y buenas prácticas para proteger tus sistemas y los datos de tus clientes.",
    icon: "shield",
  },
];

export type CaseStudy = {
  id: string;
  name: string;
  result: string;
  tech: string[];
  image: string;
  link?: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain" | "fill" | "scale-down" | "none";
};

export const caseStudies: CaseStudy[] = [
  {
    id: "FaguGO",
    name: "FaguGO — Copiloto Clinico",
    result: "Aumento considerablemente los pacientes",
    tech: ["Python", "FastAPI", "Sql"],
    image: "/facugo.png",
    link: "https://www.atlasdevs.cl/facugo.html",
    imagePosition: "top", // Mucho más abajo (ver el header donde dice facugo)
  },
  {
    id: "splitandes",
    name: "Split Andes — Rental de ski",
    result: "Landing page para turismo y rental de ski",
    tech: ["React", "Next.js", "Tailwind CSS"],
    image: "/split.png",
    link: "https://www.splitandes.cl",
    imagePosition: "50% 25%", // Ajustado para que se vea el logo completo
  },
  {
    id: "casakanata",
    name: "Casa Kanata — Alojamiento",
    result: "Sitio web para gestión de reservas y contacto",
    tech: ["React", "Tailwind CSS"],
    image: "/casakanata.jpeg",
    link: "https://casakanata.vercel.app",
    imagePosition: "50% 50%", // Centrado por defecto para que se vea mejor
  },
];

export const process = [
  {
    step: "01",
    title: "Descubrimiento",
    description:
      "Analizamos tu negocio, objetivos y usuarios para definir el alcance correcto del proyecto.",
  },
  {
    step: "02",
    title: "Diseño",
    description:
      "Diseñamos la experiencia y la interfaz priorizando claridad, conversión y usabilidad.",
  },
  {
    step: "03",
    title: "Desarrollo",
    description:
      "Construimos el producto con arquitecturas robustas, código limpio y entregas iterativas.",
  },
  {
    step: "04",
    title: "Implementación",
    description:
      "Desplegamos en producción con monitoreo, pruebas y estándares de seguridad.",
  },
  {
    step: "05",
    title: "Soporte",
    description:
      "Acompañamos el crecimiento del producto con soporte continuo y mejoras constantes.",
  },
];

export const footerLinks = {
  email: "atlasdevscl@gmail.com",
  whatsapp: "https://wa.me/56993967609",
};
