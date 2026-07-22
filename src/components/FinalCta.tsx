import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="section-container">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl2 border border-border bg-surface/60 px-8 py-16 text-center shadow-card sm:px-16 sm:py-24">
            <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />

            <h2 className="relative mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
              Convirtamos tu idea en una{" "}
              <span className="accent-gradient">solución digital real.</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-lg text-text-muted">
              Cuéntanos sobre tu proyecto y te responderemos en menos de 48
              horas con una propuesta clara.
            </p>
            <div className="relative mt-10 flex justify-center">
              <Button href="mailto:atlasdevscl@gmail.com" variant="primary">
                Solicitar propuesta
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
