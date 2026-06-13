import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { BrandTicker } from "@/components/site/BrandTicker";
import { JSE } from "@/components/site/JSE";
import { JST } from "@/components/site/JST";
import { Industries } from "@/components/site/Industries";
import { Stats } from "@/components/site/Stats";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWidgets } from "@/components/site/FloatingWidgets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jai Shree Group | HDPE LDPE PP Granules & Poddar Pigments Masterbatch Dealer Jaipur" },
      { name: "description", content: "Jai Shree Group — Supplier of HDPE, LDPE, PP polymer granules and authorised dealer of Poddar Pigments masterbatches in Jaipur. 20+ years experience. Pan-India supply. Call +91 7615094242" },
      { property: "og:title", content: "Jai Shree Group | Polymer Granules & Masterbatch Supplier" },
      { property: "og:description", content: "Building Trust, Delivering Quality. HDPE, LDPE, PP granules and Poddar Pigments masterbatches across India since 2004." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <BrandTicker />
        <JSE />
        <JST />
        <Industries />
        <Stats />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
