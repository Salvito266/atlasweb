import { metrics } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Metrics() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="section-container grid grid-cols-2 gap-8 py-16 md:grid-cols-4 md:py-20">
        {metrics.map((metric, i) => (
          <Reveal key={metric.label} delay={i * 0.08} className="text-center md:text-left">
            <p className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
              {metric.value}
            </p>
            <p className="mt-2 text-sm text-text-muted">{metric.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
