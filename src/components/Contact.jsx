import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 mt-4 pt-8">
      <div className="mx-auto max-w-8xl px-6">
        {/* Grid con stagger reveal */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Formulario */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 rounded-2xl glass p-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold">Contacto</h2>
            <p className="mt-2 text-sm text-white/60">
              Detalla objetivos y restricciones. Respondemos con un plan técnico.
            </p>
            <form className="mt-6 space-y-4">
              <div>
                <label className="text-xs text-white/60">Nombre</label>
                <input
                  className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-atlas-primary/60 focus:shadow-[0_0_10px_rgba(94,139,255,0.4)] transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="text-xs text-white/60">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-atlas-primary/60 focus:shadow-[0_0_10px_rgba(94,139,255,0.4)] transition-all"
                  placeholder="tu@empresa.com"
                />
              </div>
              <div>
                <label className="text-xs text-white/60">Mensaje</label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-atlas-primary/60 focus:shadow-[0_0_10px_rgba(94,139,255,0.4)] transition-all"
                  placeholder="Contexto, métricas, deadlines"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="inline-flex items-center gap-2 rounded-xl bg-atlas-primary px-5 py-3 text-sm font-semibold shadow-glow hover:bg-atlas-primary/90"
              >
                <Send className="h-4 w-4" />
                Enviar
              </motion.button>
            </form>
          </motion.div>

          {/* Reactor energético */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 rounded-2xl glass p-6 relative overflow-hidden flex flex-col items-center justify-center"
          >
            <motion.h3
              className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-atlas-primary via-white to-atlas-accent text-center"
              whileHover={{ scale: 1.05 }}
            >
              Innovación constante
            </motion.h3>
            <motion.p
              className="mt-3 text-base sm:text-lg text-white/70 text-center max-w-xl"
              whileHover={{ color: "#5E8BFF" }}
            >
              Iteramos con rigor técnico y creatividad para mantener sistemas vivos y resilientes.
            </motion.p>

            {/* Bola de energía */}
            <motion.div
              className="mt-8 relative w-full h-64 flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-atlas-primary to-atlas-accent blur-3xl opacity-30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-40 h-40 rounded-full border-4 border-atlas-primary/50"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-atlas-accent to-atlas-primary shadow-[0_0_40px_rgba(94,139,255,0.8)]"
                animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-8 h-8 rounded-full bg-white"
                animate={{ scale: [1, 2, 1], opacity: [1, 0.6, 1] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}