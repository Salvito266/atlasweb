import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ParallaxSection() {
  const ref = useRef(null)

  // Vinculamos el scroll a este bloque
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
    // "start end" → cuando el bloque entra en pantalla
    // "end start" → cuando sale de pantalla
  })

  // Creamos un efecto parallax vertical
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={ref}
      className="relative h-[120vh] flex items-center justify-center bg-gradient-to-b from-black to-atlas-bg"
    >
      <motion.div
        style={{ y }}
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-atlas-primary via-white to-atlas-accent"
      >
        Aprende Mas Sobre Nosotros
      </motion.div>
    </section>
  )
}