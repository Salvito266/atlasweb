export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-8xl px-6 py-8 text-xs text-white/50">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Atlas. Ingeniería de precisión.</div>
          <div className="flex items-center gap-4">
            <a href="#method" className="hover:text-white/80">Método</a>
            <a href="#services" className="hover:text-white/80">Servicios</a>
            <a href="#contact" className="hover:text-white/80">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  )
}