import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { Process } from "@/components/Process";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <>
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

export default App;
