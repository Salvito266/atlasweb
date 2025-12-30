import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

// Tus componentes
import GlowBackground from "./components/GlowBackground.jsx"
import NavBar from "./components/NavBar.jsx"
import Hero from "./components/Hero.jsx"
import AtlasMethod from "./components/AtlasMethod.jsx"
import ServicesBento from "./components/ServicesBento.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import ParallaxSection from "./components/ParallaxSection.jsx"

export default function App() {
  useEffect(() => {
    // Inicializa Lenis
    const lenis = new Lenis({
      lerp: 0.1,          // suavidad (0.08–0.12 recomendado)
      duration: 1.2,      // tiempo objetivo por scroll
      smoothWheel: true,  // normaliza rueda/trackpad
      smoothTouch: false, // deja touch nativo (puedes poner true si quieres suavizar mobile)
    })

    // Loop con requestAnimationFrame
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Opcional: escuchar eventos de scroll
    lenis.on("scroll", ({ scroll, velocity, direction }) => {
      // console.log(scroll, velocity, direction)
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen text-white bg-atlas-bg">
      {/* Depth & light */}
      <GlowBackground />


      {/* Content */}
      <main className="pt-24">
        <Hero />
        <ParallaxSection />
        <AtlasMethod />
        <ServicesBento />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}