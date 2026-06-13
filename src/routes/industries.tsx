import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWidgets } from "@/components/site/FloatingWidgets";
import { Industries } from "@/components/site/Industries";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Jai Shree Group — Polymer Applications" },
      { name: "description", content: "We supply polymer granules & masterbatches for injection moulding, blow moulding, film, packaging, pipes, tanks, infrastructure, non-woven, woven bags & shade nets." },
      { property: "og:title", content: "Industries We Serve — Jai Shree Group" },
      { property: "og:description", content: "Polymer solutions for 9+ industries across India: moulding, packaging, pipes, tanks, infrastructure, non-woven, raffia, agro." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <div className="bg-background overflow-x-hidden">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-orange font-semibold uppercase text-sm tracking-widest mb-3">Applications</p>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-navy leading-tight">
            Industries <span className="text-gradient-orange">We Serve</span>
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            From moulded containers to agricultural shade nets — Jai Shree Group's polymer granules and masterbatches are at work across India's plastic value chain.
          </p>
        </section>
        <Industries />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
