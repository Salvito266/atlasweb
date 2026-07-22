import { process } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32">
      <div className="section-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            El método Atlas
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
            Un proceso claro, de principio a fin
          </h2>
        </Reveal>

        <div className="relative mt-20">
          {/* Vertical line for mobile, horizontal for desktop */}
          <div className="absolute left-5 top-0 h-full w-px bg-border md:left-0 md:top-5 md:h-px md:w-full" />

          <div className="grid gap-10 md:grid-cols-5 md:gap-6">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08}>
                <div className="relative flex gap-5 md:flex-col md:gap-0">
                  <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-surface text-sm font-bold text-primary shadow-glow">
                    {item.step}
                  </div>
                  <div className="md:mt-6">
                    <h3 className="text-base font-bold text-text">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
