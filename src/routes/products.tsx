import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWidgets } from "@/components/site/FloatingWidgets";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | Polymer Granules & Masterbatches — Jai Shree Group" },
      { name: "description", content: "Complete product catalogue — HDPE, LDPE, LLDPE, PP, PPCP granules and full Poddar Pigments masterbatch range. Grades from Reliance, GAIL, HMEL, OPaLene and Haldia." },
      { property: "og:title", content: "Products — Jai Shree Group" },
      { property: "og:description", content: "Browse the complete range of polymer granules and masterbatches supplied by Jai Shree Group." },
    ],
  }),
  component: ProductsPage,
});

const jseProducts = [
  { name: "PPCP", grades: "CO POLYMER — M312, C080, CM12" },
  { name: "PP Homo Polymer", grades: "M12/110MA, MH13" },
  { name: "PP Film", grades: "F10SR, FH10, 100EY" },
  { name: "PP Random", grades: "RM30, RM12, 2120" },
  { name: "PP Extrusion (C2420)", grades: "Y35GR, 1350YG" },
  { name: "PP Raffia", grades: "PP R03RR, RH03" },
  { name: "PP Lamination", grades: "320EC, 350FG, 3155" },
  { name: "HD Blow (HDPE)", grades: "B52, B63, B6401, B56, B55" },
  { name: "HD HM", grades: "LUBAN 4811, F55, F5400, F0050D, 0148D" },
  { name: "HD Moulding", grades: "i56200, i50, M5018, M60075" },
  { name: "HD Pipe", grades: "P63, E52, DB52, P5004 — suppliers: GAIL, HALDIA, HMEL, IOC, RIL" },
  { name: "LLDPE", grades: "LD 24FS040, 2427K, FD0474" },
  { name: "LD Lamination", grades: "1070, 7019" },
  { name: "Vistamax", grades: "6202" },
  { name: "Metlocine", grades: "1018MK, 1018RK, 116LM" },
];

const jstProducts = [
  { name: "Colour Masterbatches", details: "Vibrant, consistent colours for films, packaging, pipes, injection moulding & consumer products." },
  { name: "White Masterbatches", details: "Whitening, opacity, brightness & cost optimisation for films, sheets, packaging." },
  { name: "Black Masterbatches", details: "Deep black colour, UV protection & strength for pipes, films, cables, moulded products." },
  { name: "Optical Brightener (OBA) MB", details: "Enhances brightness & whiteness in films, packaging, textiles." },
  { name: "UV Stabilizer Masterbatches", details: "Protects plastics from UV degradation — outdoor products, pipes, agro films." },
  { name: "Flame Retardant (FR) MB", details: "Fire resistance & safety for electrical, automotive, industrial plastics." },
  { name: "Slip / Antiblock / Antistat MB", details: "Improves film processing, smoothness; reduces blocking in packaging." },
  { name: "Filler Masterbatches", details: "Cost-effective fillers for blown film & moulding." },
  { name: "Fibre Masterbatches (Polyester / PP / Nylon)", details: "Dope dyeing for POY/FDY/IDY/BCF/Non-woven fibres." },
  { name: "Film Masterbatches (BOPP / CPP / BOPET)", details: "Specialty grades for biaxially-oriented and cast films." },
  { name: "Custom / Tailor-made MB", details: "Application-specific masterbatch development on request." },
];

export const description = "Products page";

function ProductsPage() {
  return (
    <div className="bg-background overflow-x-hidden">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-orange font-semibold uppercase text-sm tracking-widest mb-3">Catalogue</p>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-navy leading-tight">
            All <span className="text-gradient-orange">Products</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Premium polymer granules and the complete Poddar Pigments masterbatch range — all under one roof.
          </p>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-orange font-semibold">Jai Shree Enterprises</p>
                <h2 className="font-display font-bold text-3xl text-navy">Polymer Granules</h2>
              </div>
              <Link to="/jse" className="text-orange font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Visit JSE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {jseProducts.map((p, i) => (
                <Reveal key={p.name} delay={i * 30}>
                  <article className="bg-card rounded-2xl p-6 border border-border shadow-card card-hover">
                    <h3 className="font-display font-bold text-lg text-navy mb-2">{p.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.grades}</p>
                    <a href="https://wa.me/917615094242" target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1 text-orange font-semibold text-sm hover:gap-2 transition-all">
                      Enquire on WhatsApp <ArrowRight className="w-4 h-4" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--purple)" }}>Jai Shree Traders</p>
                <h2 className="font-display font-bold text-3xl text-navy">Poddar Pigments Masterbatches</h2>
              </div>
              <Link to="/jst" className="font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all" style={{ color: "var(--purple)" }}>
                Visit JST <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {jstProducts.map((p, i) => (
                <Reveal key={p.name} delay={i * 30}>
                  <article className="bg-card rounded-2xl p-6 border border-border shadow-card card-hover h-full">
                    <h3 className="font-display font-bold text-base text-navy mb-2">{p.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.details}</p>
                    <a href="https://wa.me/917615094242" target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1 text-purple font-semibold text-sm hover:gap-2 transition-all">
                      Enquire on WhatsApp <ArrowRight className="w-4 h-4" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
