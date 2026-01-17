import { motion } from "framer-motion"
import { ArrowRight, Mouse } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/carga.jpg"
      >
        <source src="/videos/wave.webm" type="video/webm" />
        <source src="/videos/wave.mp4" type="video/mp4" />
      </video>

      {/* Overlay degradado para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black z-0" />

      {/* Contenido */}
      <div className="relative z-10 text-center max-w-4xl px-6 flex flex-col gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-[0_0_20px_rgba(0,200,255,0.6)]"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-atlas-primary via-white to-atlas-accent">
            Atlas Devs
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base sm:text-lg text-white/80"
        >
          Desarrollo ágil y soluciones innovadoras que impulsan tu negocio al siguiente nivel.
        </motion.p>

        {/* Subtítulo secundario */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm sm:text-base text-white/60"
        >
          Creamos experiencias digitales memorables con precisión técnica y diseño vivo.
        </motion.p>

        {/* CTA centrado */}
        <div className="mt-4 flex justify-center">
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-atlas-primary px-6 py-3 text-sm font-semibold shadow-lg hover:bg-atlas-primary/90 hover:shadow-[0_0_15px_rgba(0,150,255,0.6)] text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="h-4 w-4" />
            Comenzar proyecto
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Mouse className="h-6 w-6" />
      </motion.div>
    </section>
  )
}