import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Code2, Cpu, Cloud, ShieldCheck, Smartphone, BarChart3 } from "lucide-react"
import clsx from "clsx"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    title: "Software a medida",
    icon: Code2,
    desc: "Construimos exactamente lo que tu negocio necesita. Escuchamos tus requerimientos, te asesoramos con nuestra experiencia y desarrollamos las funciones que nos pidas con rigor técnico y atención al detalle.",
    tag: "Entrega predecible",
    glow: "bg-sky-500/20",
    iconColor: "text-sky-400",
  },
  {
    title: "Aplicaciones móviles a medida",
    icon: Smartphone,
    desc: "Diseñamos y desarrollamos apps nativas e híbridas que reflejan la identidad de tu marca y resuelven necesidades reales de tus usuarios. Desde la idea hasta la publicación en App Store y Google Play.",
    tag: "Experiencia móvil",
    glow: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    title: "Dashboard de datos",
    icon: BarChart3,
    desc: "Creamos dashboards interactivos que convierten tus datos en información clara y accionable. Visualiza métricas clave en tiempo real y toma decisiones estratégicas con confianza.",
    tag: "Insights en tiempo real",
    glow: "bg-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    title: "IA aplicada",
    icon: Cpu,
    desc: "Inteligencia artificial sencilla, confiable y diseñada para dar valor real a tu negocio.",
    tag: "Precisión",
    glow: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
  },
  {
    title: "Cloud Ops",
    icon: Cloud,
    desc: "Operaciones en la nube seguras, eficientes y con continuidad garantizada para tu negocio.",
    tag: "SLA real",
    glow: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    title: "Seguridad",
    icon: ShieldCheck,
    desc: "Seguridad total, confianza garantizada y cumplimiento normativo para proteger tu negocio sin compromisos.",
    tag: "Confianza",
    glow: "bg-rose-500/20",
    iconColor: "text-rose-400",
  },
]

export default function ServicesBento() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="mt-16">
      <div className="mx-auto max-w-8xl px-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold">Servicios</h2>
          <p className="text-sm text-white/60">Claridad y poder.</p>
        </div>

        {/* Grid uniforme */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              className={clsx(
                "service-card rounded-3xl p-6 border relative overflow-hidden",
                "border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl"
              )}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 30px rgba(0,200,255,0.3)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Glow dinámico con color personalizado */}
              <motion.div
                className={`absolute right-[-20%] bottom-[-20%] w-2/3 h-2/3 ${c.glow} blur-3xl rounded-full`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />

              <div className="flex items-center gap-3 relative z-10">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <c.icon className={`h-5 w-5 ${c.iconColor}`} />
                </motion.div>
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <span className="ml-auto text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10">
                  {c.tag}
                </span>
              </div>
              <p className="mt-3 text-sm text-white/70 relative z-10">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}