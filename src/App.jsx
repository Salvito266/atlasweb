import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

// Tus componentes
import GlowBackground from "./components/GlowBackground"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TechMarquee from "./components/TechMarquee"
import AtlasMethod from "./components/AtlasMethod"
import ServicesBento from "./components/ServicesBento"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ParallaxSection from "./components/ParallaxSection"

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
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="pt-24">
        <Hero />
        <ParallaxSection />
        <TechMarquee />
        <AtlasMethod />
        <ServicesBento />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}