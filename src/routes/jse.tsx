import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWidgets } from "@/components/site/FloatingWidgets";
import { JSE } from "@/components/site/JSE";
import { BrandTicker } from "@/components/site/BrandTicker";
import jseLogo from "@/assets/jse.jpg";

export const Route = createFileRoute("/jse")({
  head: () => ({
    meta: [
      { title: "Jai Shree Enterprises | HDPE LDPE PP Polymer Granules Supplier Jaipur" },
      { name: "description", content: "Jai Shree Enterprises (est. 2004) — manufacturer & trader of HDPE, LDPE, LLDPE, PP, PPCP granules. Authorised supplier of Reliance, GAIL, HMEL, Haldia, OPaLene. Jaipur, India." },
      { property: "og:title", content: "Jai Shree Enterprises — Polymer Granules" },
      { property: "og:description", content: "HDPE B6401, 50MA180, R50, PE80/100, LDPE 7019EC, LLDPE F220S, PP M12RR and more — supplied pan-India." },
  { property: "og:image", content: jseLogo },
    ],
  }),
  component: JsePage,
});

function JsePage() {
  return (
    <div className="bg-background overflow-x-hidden">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-orange font-semibold uppercase text-sm tracking-widest mb-3">Polymer Division · Since 2004</p>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-navy leading-tight">
              Jai Shree <span className="text-gradient-orange">Enterprises</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              Polymer Solutions. Quality You Can Trust. <br /> Specialists in polymer trading &amp; solutions — HDPE, LDPE, LLDPE, PP &amp; PPCP granules in injection, blow, pipe and film grades.
            </p>
          </div>
          <div className="h-32 sm:h-44 bg-white rounded-2xl border border-border shadow-card p-4 flex items-center">
            <img src={jseLogo} alt="JSE — Jai Shree Enterprises logo" className="h-full w-auto object-contain" />
          </div>
        </section>
        <JSE />
        <BrandTicker />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
