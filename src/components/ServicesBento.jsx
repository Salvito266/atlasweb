import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Code2, Cpu, Cloud, ShieldCheck } from "lucide-react"
import clsx from "clsx"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    title: "Software a medida",
    icon: Code2,
    cols: "md:col-span-2",
    rows: "md:row-span-2",
    desc:
      "Construimos exactamente lo que tu negocio necesita. Escuchamos tus requerimientos, te asesoramos con nuestra experiencia y desarrollamos las funciones que nos pidas con rigor técnico y atención al detalle. Cada entrega está pensada para que tu sistema funcione tal como lo imaginaste, con la confianza de que tendrás un producto sólido, transparente y alineado a tus objetivos. Nuestro compromiso es que quedes plenamente satisfecho con un servicio que combina personalización y excelencia.",
    tag: "Entrega predecible",
  },
  {
    title: "IA aplicada",
    icon: Cpu,
    cols: "md:col-span-1",
    rows: "md:row-span-1",
    desc:
      "Inteligencia artificial sencilla, confiable y diseñada para dar valor real a tu negocio.",
    tag: "Precisión",
  },
  {
    title: "Cloud Ops",
    icon: Cloud,
    cols: "md:col-span-1",
    rows: "md:row-span-1",
    desc:
      "Operaciones en la nube seguras, eficientes y con continuidad garantizada para tu negocio.",
    tag: "SLA real",
  },
  {
    title: "Ciberseguridad",
    icon: ShieldCheck,
    cols: "md:col-span-2",
    rows: "md:row-span-1",
    desc:
      "Seguridad total, confianza garantizada y cumplimiento normativo para proteger tu negocio sin compromisos.",
    tag: "Confianza",
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
          <p className="text-sm text-white/60">Bento Grid: claridad y poder.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(140px,1fr)] gap-6">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              className={clsx(
                "service-card rounded-3xl p-6 border relative overflow-hidden",
                "border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl",
                c.cols,
                c.rows
              )}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 30px rgba(0,200,255,0.3)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Glow dinámico */}
              <motion.div
                className="absolute right-[-20%] bottom-[-20%] w-2/3 h-2/3 bg-atlas-primary/10 blur-3xl rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />

              <div className="flex items-center gap-3 relative z-10">
                {/* Ícono flotando */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <c.icon className="h-5 w-5 text-atlas-primary" />
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