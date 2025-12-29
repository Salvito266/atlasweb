
/* NO SE VE VIDEO DE FONDO */


import { motion } from "framer-motion"
import { ArrowRight, PlayCircle } from "lucide-react"


export default function Hero() {
  return (
    <section id="hero" className="pt-28 relative h-screen overflow-hidden">
      {/* Video De Fondo */}
      <video
          className="absolute inset-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/a.jpg"
        >
          <source src="/videos/wave.webm" type="video/webm" />
          <source src="/videos/wave.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 mx-auto max-w-8xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Texto principal */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-atlas-primary via-white to-atlas-accent">
                Ingeniería de software de precisión
              </span>
              <br />
              <span className="text-white/80">
                para empresas que no aceptan errores.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 max-w-2xl text-base sm:text-lg text-white/70"
            >
              Diseñamos y desplegamos sistemas críticos con rigor de producción:
              observabilidad integral, pipelines reproducibles y UX sin fricción.
            </motion.p>

            {/* Botones CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                data-hoverable="true"
                className="inline-flex items-center gap-2 rounded-xl bg-atlas-primary px-5 py-3 text-sm font-semibold shadow-glow hover:bg-atlas-primary/90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="h-4 w-4" />
                Comenzar proyecto
              </motion.a>
              <motion.a
                href="#stack"
                data-hoverable="true"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-white/5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="h-4 w-4" />
                Ver Stack Tecnológico
              </motion.a>
            </div>
          </div>

          {/* Card visual derecha */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative rounded-2xl glass p-6"
            >
              <div className="aspect-video rounded-xl bg-black/30 border border-white/10 flex items-center justify-center">
                <div className="text-xs text-white/60 text-center px-4">
                  Dashboard de rendimiento, auditorías de seguridad y despliegues canary.
                </div>
              </div>

              {/* Bloques con stagger */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.2 }
                  }
                }}
                className="mt-4 grid grid-cols-3 gap-3 text-xs text-white/60"
              >
                <motion.div
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  className="rounded-lg border border-white/10 p-3"
                >
                  SLIs/SLAs
                </motion.div>
                <motion.div
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  className="rounded-lg border border-white/10 p-3"
                >
                  CI/CD
                </motion.div>
                <motion.div
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  className="rounded-lg border border-white/10 p-3"
                >
                  Zero-downtime
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
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