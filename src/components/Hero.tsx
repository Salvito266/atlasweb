"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TrendingUp, Activity, Users } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-40 md:pb-32 md:pt-48"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="section-container relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Software empresarial de alto valor
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl">
            Desarrollamos software que{" "}
            <span className="accent-gradient">impulsa el crecimiento</span>{" "}
            de tu empresa.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            Web, Apps, IA y Automatización para empresas que buscan escalar
            con tecnología.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#contacto" variant="primary">
              Agendar reunión
            </Button>
            <Button href="#proyectos" variant="secondary" showIcon={false}>
              Ver proyectos
            </Button>
          </div>

          <div className="mt-14 flex items-center gap-8 border-t border-border pt-8">
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
              Confiado por equipos que escalan
            </p>
          </div>
        </motion.div>

        {/* Right: product mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-primary/20 blur-[100px]" />

          {/* Dashboard card */}
          <div className="glass animate-float rounded-xl2 p-5 shadow-card">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>
              <span className="text-xs font-medium text-text-muted">
                Analítica empresarial
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <Activity className="h-4 w-4 text-primary" strokeWidth={1.75} />
                <p className="mt-3 text-xl font-bold text-text">128k</p>
                <p className="text-[11px] text-text-muted">Requests/día</p>
              </div>
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <TrendingUp className="h-4 w-4 text-accent" strokeWidth={1.75} />
                <p className="mt-3 text-xl font-bold text-text">+34%</p>
                <p className="text-[11px] text-text-muted">Conversión</p>
              </div>
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <Users className="h-4 w-4 text-primary-hover" strokeWidth={1.75} />
                <p className="mt-3 text-xl font-bold text-text">9.2k</p>
                <p className="text-[11px] text-text-muted">Usuarios activos</p>
              </div>
            </div>

            <div className="mt-4 flex h-28 items-end gap-2 rounded-2xl border border-border bg-background/60 p-4">
              {[40, 65, 45, 80, 60, 95, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-accent"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
