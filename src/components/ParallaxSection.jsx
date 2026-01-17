import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ParallaxSection() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]) // zoom sutil estable

  return (
    <section
      ref={ref}
      className="relative h-[70vh] flex items-center justify-center bg-gradient-to-b from-black to-atlas-bg"
    >
      <motion.h2
        style={{ y, opacity, scale }}
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-atlas-primary via-white to-atlas-accent"
      >
        Aprende Más Sobre Nosotros
      </motion.h2>

      {/* Separador de ondas */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0,0 C600,120 600,0 1200,120 L1200,0 L0,0 Z"
            className="fill-atlas-bg"
          />
        </svg>
      </div>
    </section>
  )
}