import { motion } from "framer-motion"
import { ArrowRight, PlayCircle } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Video De Fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/a.jpg"
      >
        <source src="/videos/wave.webm" type="video/webm" />
        <source src="/videos/wave.mp4" type="video/mp4" />
      </video>

      {/* Overlay degradado para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black z-0" />

      {/* Contenido más arriba */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-atlas-primary via-white to-atlas-accent">
            Ingeniería de software de precisión <br />
            para empresas que no aceptan errores.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-base sm:text-lg text-white/80"
        >
          Diseñamos y desplegamos sistemas críticos con rigor de producción:
          observabilidad integral, pipelines reproducibles y UX sin fricción.
        </motion.p>

        {/* Botones CTA centrados */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-atlas-primary px-6 py-3 text-sm font-semibold shadow-lg hover:bg-atlas-primary/90 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="h-4 w-4" />
            Comenzar proyecto
          </motion.a>
          <motion.a
            href="#stack"
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PlayCircle className="h-4 w-4" />
            Ver Stack Tecnológico
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ↓
      </motion.div>
    </section>
  )
}