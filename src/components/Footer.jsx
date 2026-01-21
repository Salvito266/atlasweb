import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-8xl px-6 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          {/* Marca con glow pulsante */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative text-xs text-white/60"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 4px rgba(94,139,255,0.4)",
                  "0 0 12px rgba(94,139,255,0.6)",
                  "0 0 4px rgba(94,139,255,0.4)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="text-white/80"
            >
              © {new Date().getFullYear()} Atlas. Ingeniería de precisión.
            </motion.span>
          </motion.div>

          {/* Navegación + Teléfono */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex items-center gap-6 text-xs font-medium"
          >
            <a
              href="#method"
              className="text-white/60 hover:text-atlas-primary transition-colors"
            >
              Método
            </a>
            <a
              href="#services"
              className="text-white/60 hover:text-atlas-primary transition-colors"
            >
              Servicios
            </a>
            <a
              href="#contact"
              className="text-white/60 hover:text-atlas-primary transition-colors"
            >
              Contacto
            </a>

            {/* Teléfono */}
            <motion.a
              href="https://wa.me/56993967609"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 transition-colors shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_12px_rgba(94,139,255,0.35)]"
            >
              <span className="text-[11px] uppercase tracking-wide text-white/50">Tel</span>
              <span className="text-sm font-semibold">Escríbenos/Llámanos</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}