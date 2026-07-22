"use client";

import { caseStudies } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export function CaseStudies() {
  return (
    <section id="proyectos" className="py-24 md:py-32">
      <div className="section-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Casos de éxito
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
            Proyectos que generaron resultados medibles
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <a 
                href={project.link || "#"}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className="group flex flex-col h-full overflow-hidden rounded-xl2 border border-border bg-surface/60 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-surface">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105"
                    style={{ 
                      objectPosition: project.imagePosition || 'center',
                      objectFit: project.imageFit || 'cover'
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 via-surface to-accent/10">
                    <div className="absolute inset-0 bg-grid-fade opacity-60" />
                    <span className="relative text-4xl font-extrabold text-white/10">
                      {project.name.split(" ")[0]}
                    </span>
                  </div>
                  <ArrowUpRight className="absolute right-4 top-4 z-10 h-6 w-6 text-white drop-shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-bold text-text">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {project.result}
                  </p>
                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] font-medium text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
