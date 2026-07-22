import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { Process } from "@/components/Process";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Atlas Devs",
            description:
              "Desarrollo de software, aplicaciones móviles, inteligencia artificial y automatización empresarial.",
            url: "https://atlasdevs.cl",
            email: "atlasdevscl@gmail.com",
            sameAs: [
              "https://linkedin.com/company/atlasdevs",
              "https://github.com/atlasdevs",
            ],
          }),
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <Metrics />
        <Services />
        <CaseStudies />
        <Process />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
