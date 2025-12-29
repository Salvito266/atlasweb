import { motion } from 'framer-motion'
import { Search, Rocket, UploadCloud } from 'lucide-react'

const steps = [
  {
    id: '01',
    title: 'Discovery',
    icon: Search,
    desc:
      'Levantamiento técnico y de negocio. Riesgos, métricas, arquitectura y alcance con trazabilidad.',
  },
  {
    id: '02',
    title: 'Sprint',
    icon: Rocket,
    desc:
      'Iteraciones cortas con entregables verificables. QA automatizado, observabilidad y performance budgets.',
  },
  {
    id: '03',
    title: 'Deploy',
    icon: UploadCloud,
    desc:
      'Despliegue canary/blue-green, infraestructura como código y monitoreo activo post-release.',
  },
]

export default function AtlasMethod() {
  return (
    <section id="method" className="mt-16">
      <div className="mx-auto max-w-8xl px-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold">El Método Atlas</h2>
          <p className="text-sm text-white/60">Procesos que eliminan el riesgo.</p>
        </div>

        <div className="relative mt-8">
          {/* Animated connection line */}
          <motion.div
            className="absolute left-0 right-0 top-12 h-0.5 bg-gradient-to-r from-atlas-primary/50 via-white/20 to-atlas-accent/50"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left center' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {steps.map((s, idx) => (
              <motion.div
                key={s.id}
                className="rounded-2xl glass p-6 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-xs font-mono text-white/60">{s.id}.</div>
                  <s.icon className="h-5 w-5 text-atlas-primary" />
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/70">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}