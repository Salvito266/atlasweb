import { Menu, ChevronRight } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-40">
      <div className="mx-auto max-w-8xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl glass px-4 py-3">
          <a href="#hero" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-atlas-primary/30 shadow-glow" />
            <span className="text-sm font-semibold tracking-wide">ATLAS</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#method" className="opacity-80 hover:opacity-100">Método</a>
            <a href="#services" className="opacity-80 hover:opacity-100">Servicios</a>
            <a href="#testimonials" className="opacity-80 hover:opacity-100">Casos</a>
            <a href="#contact" className="opacity-80 hover:opacity-100">Contacto</a>
          </nav>
          <button
            data-hoverable="true"
            className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs border border-white/10 hover:bg-white/10"
          >
            <Menu className="h-4 w-4" />
            <span>Menú</span>
            <ChevronRight className="h-4 w-4 opacity-60" />
          </button>
        </div>
      </div>
    </header>
  )
}