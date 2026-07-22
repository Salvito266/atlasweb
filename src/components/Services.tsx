import { services } from "@/lib/data";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="section-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Servicios
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
            Todo lo que tu empresa necesita para escalar con tecnología
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Un equipo, todas las disciplinas: de la idea al producto en
            producción.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.1}>
              <div className="group h-full rounded-xl2 border border-border bg-surface/60 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface">
                <ServiceIcon icon={service.icon} />
                <h3 className="mt-5 text-lg font-bold text-text">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
