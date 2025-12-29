import { motion } from 'framer-motion'

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Soft grid for technical texture */}
      <div className="absolute inset-0 bg-grid bg-grid" style={{ opacity: 0.2 }} />

      {/* Glow spheres */}
      <motion.div
        className="absolute -top-24 -left-24 w-[40vw] h-[40vw] rounded-full bg-atlas-glow1/25 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/4 right-[-10vw] w-[30vw] h-[30vw] rounded-full bg-atlas-glow2/25 blur-3xl"
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10vw] left-1/3 w-[35vw] h-[35vw] rounded-full bg-atlas-primary/20 blur-3xl"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}