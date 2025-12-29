import { motion, AnimatePresence } from 'framer-motion'
import { useMousePosition } from '../hooks/useMousePosition'
import { useEffect, useState } from 'react'

export default function Cursor() {
  const { x, y } = useMousePosition()
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const hoverables = ['a', 'button', '[data-hoverable="true"]']
    const onOver = (e) => {
      if (e.target.closest(hoverables.join(','))) setHovering(true)
    }
    const onOut = (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest(hoverables.join(','))) {
        setHovering(false)
      }
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed left-0 top-0 pointer-events-none z-[100] mix-blend-screen"
        animate={{ x, y }}
        transition={{ type: 'spring', stiffness: 600, damping: 40 }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2"
          aria-hidden
        >
          <motion.div
            className="rounded-full bg-atlas-primary/40 blur-2xl"
            animate={{ scale: hovering ? 1.6 : 1 }}
            style={{ width: 24, height: 24 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
          <motion.div
            className="rounded-full border border-white/60"
            animate={{ scale: hovering ? 0.7 : 1 }}
            style={{ width: 8, height: 8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}