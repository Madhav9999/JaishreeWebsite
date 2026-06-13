import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWidgets } from "@/components/site/FloatingWidgets";
import { JST } from "@/components/site/JST";
import jstLogo from "@/assets/jst.jpg";
import poddar from "@/assets/poddar.jpg";

export const Route = createFileRoute("/jst")({
  head: () => ({
    meta: [
      { title: "Jai Shree Traders | Authorised Poddar Pigments Masterbatch Dealer Jaipur" },
      { name: "description", content: "Jai Shree Traders (est. 2008) — Rajasthan's authorised dealer of Poddar Pigments masterbatches. Colour, White, Black, UV, FR, OBA and additive masterbatches." },
      { property: "og:title", content: "Jai Shree Traders — Poddar Pigments Masterbatches" },
      { property: "og:description", content: "Colours that enhance. Quality that lasts. Complete Poddar Pigments range — supplied across Rajasthan." },
  { property: "og:image", content: jstLogo },
    ],
  }),
  component: JstPage,
});

function JstPage() {
  return (
    <div className="bg-background overflow-x-hidden">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="font-semibold uppercase text-sm tracking-widest mb-3" style={{ color: "var(--purple)" }}>Masterbatch Division · Since 2008</p>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-navy leading-tight">
              Jai Shree <span style={{ color: "var(--purple)" }}>Traders</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              Colours that enhance. Quality that lasts. Authorised dealer of <strong>Poddar Pigments Limited</strong> — premium masterbatches with excellent dispersion, finish &amp; consistency.
            </p>
          </div>
          <div className="h-32 sm:h-44 bg-white rounded-2xl border border-border shadow-card p-4 flex items-center">
            <img src={jstLogo} alt="JST — Jai Shree Traders logo" className="h-full w-auto object-contain" />
          </div>
        </section>
        <JST />
        <section className="section-pad">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 bg-card rounded-3xl p-8 sm:p-12 border border-border shadow-card text-center">
            <img src={poddar} alt="Poddar Pigments logo" className="mx-auto h-20 object-contain mb-6" />
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy mb-4">Authorised Dealer — Poddar Pigments Limited</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Poddar Pigments Ltd. is one of India's leading manufacturers of polymer colour, additive &amp; functional masterbatches. As an authorised channel partner, Jai Shree Traders brings their complete portfolio to Rajasthan with guaranteed quality, factory pricing and reliable stock availability.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
