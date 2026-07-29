import { LayoutTemplate } from "lucide-react";
import { landingPages } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

function LandingCard({ page }: { page: (typeof landingPages)[number] }) {
  const CardWrapper = page.link ? "a" : "article";
  const linkProps = page.link ? { 
    href: page.link, 
    target: "_blank", 
    rel: "noopener noreferrer",
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.blur()
  } : {};

  return (
    // @ts-ignore - CardWrapper can be an 'a' or 'article' element
    <CardWrapper
      {...linkProps}
      className={`w-[300px] flex-none overflow-hidden rounded-xl2 border border-border bg-surface/60 p-5 shadow-card sm:w-[380px] ${
        page.link ? "block transition-colors hover:border-primary/50" : ""
      }`}
    >
      {page.image ? (
        <img
          src={page.image}
          alt={`Vista previa de ${page.name}`}
          loading="lazy"
          className="h-48 w-full rounded-2xl sm:h-56"
          style={{ 
            objectPosition: page.imagePosition || "center",
            objectFit: page.imageFit || "cover"
          }}
        />
      ) : (
        <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-gradient-to-br from-primary/15 via-surface to-accent/10 sm:h-56">
          <div className="text-center">
            <LayoutTemplate className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
            <p className="mt-3 text-sm font-medium text-text-muted">Próximamente</p>
          </div>
        </div>
      )}
      <h4 className="mt-5 text-lg font-bold text-text">{page.name}</h4>
      <p className="mt-2 text-sm text-text-muted">
        {page.description || "Espacio reservado para una de nuestras landing pages."}
      </p>
    </CardWrapper>
  );
}

export function LandingCarousel() {
  return (
    <Reveal className="mt-16 md:mt-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Portfolio web
        </p>
        <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-text sm:text-3xl">
          Algunas de nuestras landing pages
        </h3>
        <p className="mt-3 text-base text-text-muted">
          Sitios claros, rápidos y diseñados para generar oportunidades.
        </p>
      </div>

      <div className="relative left-1/2 mt-8 w-screen -translate-x-1/2">
        <div className="overflow-hidden">
          <div className="landing-marquee">
            <div className="flex gap-5">
              {landingPages.map((page) => (
                <LandingCard key={page.id} page={page} />
              ))}
            </div>
            <div aria-hidden="true" className="landing-marquee-copy flex gap-5">
              {landingPages.map((page) => (
                <LandingCard key={`${page.id}-copy`} page={page} />
              ))}
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-background to-transparent sm:w-8" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-background to-transparent sm:w-8" />
      </div>
    </Reveal>
  );
}
