import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Atlas desplegó un stack crítico con tiempos de respuesta por debajo de 120ms y cero regresiones en producción.',
    author: 'CTO, Retail LatAm',
  },
  {
    quote:
      'El proceso fue quirúrgico: discovery sólido, sprints medibles y despliegues impecables con trazabilidad.',
    author: 'Director de Tecnología, Finanzas',
  },
  {
    quote:
      'Auditorías de seguridad y observabilidad nos dieron control total del riesgo. Operamos con confianza.',
    author: 'Gerente de Operaciones, Salud',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="mt-16">
      <div className="mx-auto max-w-8xl px-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold">Testimonios "Ghost"</h2>
          <p className="text-sm text-white/60">Resultados verificables.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.blockquote
              key={t.author}
              className="rounded-2xl p-6 border border-atlas-border bg-black/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="absolute inset-0">
                <div className="absolute -inset-1 rounded-2xl border border-transparent [mask-image:linear-gradient(white,transparent)] bg-gradient-to-r from-atlas-primary/30 to-atlas-accent/30" />
              </div>
              <p className="relative text-sm text-white/80">{t.quote}</p>
              <footer className="relative mt-4 text-xs text-white/50">{t.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}