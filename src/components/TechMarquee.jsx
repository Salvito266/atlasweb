import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Aperture, Cpu, Code, Palette } from "lucide-react"

const items = [
  { icon: Aperture, label: "Aperture" },
  { icon: Cpu, label: "Performance" },
  { icon: Code, label: "Development" },
  { icon: Palette, label: "Design" },
]

export default function TechMarquee() {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -100,
        repeat: -1,
        duration: 20,
        ease: "linear",
      })
    }, marqueeRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={marqueeRef} className="w-full overflow-hidden bg-atlas-surface py-6">
      <div className="flex marquee-track whitespace-nowrap">
        {items.map(({ icon: Icon, label }, i) => (
          <div key={i} className="flex items-center gap-2 text-white text-xl font-semibold mx-6">
            <Icon size={32} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}