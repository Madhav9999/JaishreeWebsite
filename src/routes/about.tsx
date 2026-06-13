import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWidgets } from "@/components/site/FloatingWidgets";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Factory, Award, MapPin, Phone, Mail } from "lucide-react";
import jseLogo from "@/assets/jse.jpg";
import jstLogo from "@/assets/jst.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jai Shree Group | 20+ Years in Polymers & Masterbatches" },
      { name: "description", content: "Jai Shree Enterprises (est. 2004) and Jai Shree Traders (est. 2008) — Jaipur-based sister concerns supplying polymer granules and Poddar Pigments masterbatches across India." },
      { property: "og:title", content: "About Jai Shree Group" },
      { property: "og:description", content: "Two sister businesses, one promise — Building Trust, Delivering Quality since 2004." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-background overflow-x-hidden">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-orange font-semibold uppercase text-sm tracking-widest mb-3">About Us</p>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-navy leading-tight">
            Shaping Tomorrow with <span className="text-gradient-orange">Polymers & Colours</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jai Shree Group brings together two sister concerns — <strong>Jai Shree Enterprises</strong> and <strong>Jai Shree Traders</strong> — under one promise: <em>Building Trust, Delivering Quality.</em>
          </p>
        </section>

        {/* Group Banner replaced with styled logo banner */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center py-14"
              style={{ background: "var(--gradient-navy)" }}>
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-2xl text-white font-black text-3xl shadow-md"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  JS
                </div>
                <div>
                  <div className="font-display font-extrabold text-white text-4xl leading-none tracking-tight">
                    JAI SHREE
                  </div>
                  <div className="text-[11px] font-semibold tracking-[0.25em] text-orange uppercase mt-1">
                    Enterprises & Traders
                  </div>
                  <div className="text-white/50 text-xs mt-1 tracking-wide">
                    From Polymers to Masterbatches, We Add Value to Your Products.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
            <Reveal>
              <article className="bg-card rounded-3xl p-8 border border-border shadow-card card-hover h-full flex flex-col">
                <div className="h-24 w-full flex items-center justify-start mb-5">
                  <img src={jseLogo} alt="Jai Shree Enterprises" className="h-24 w-auto object-contain" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Factory className="w-4 h-4 text-orange" /> Established 2004 · Manufacturer & Trader
                </div>
                <h2 className="font-display font-bold text-2xl text-navy mb-3">Jai Shree Enterprises (JSE)</h2>
                <p className="text-foreground/75 leading-relaxed mb-5">
                  Specializing in quality polymers, we provide reliable material solutions that help industries build stronger products. With 25+ years of cumulative experience in polymer solutions, we deliver consistent supply backed by strong industry knowledge and trusted relationships.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                  <li>• HDPE, LDPE, LLDPE, PP, PPCP granules</li>
                  <li>• Filler &amp; Moisture masterbatches</li>
                  <li>• Authorised supplier — Reliance, GAIL, HMEL, OPaLene, Haldia</li>
                  <li>• GST: 08AADFJ8100D1ZT</li>
                </ul>
                <Link to="/jse" className="mt-auto inline-flex items-center gap-2 text-orange font-semibold hover:gap-3 transition-all">
                  Explore Jai Shree Enterprises <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="bg-card rounded-3xl p-8 border border-border shadow-card card-hover h-full flex flex-col">
                <div className="h-24 w-full flex items-center justify-start mb-5">
                  <img src={jstLogo} alt="Jai Shree Traders" className="h-24 w-auto object-contain" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Award className="w-4 h-4" style={{ color: "var(--purple)" }} /> Established 2008 · Dealer / Supplier
                </div>
                <h2 className="font-display font-bold text-2xl text-navy mb-3">Jai Shree Traders (JST)</h2>
                <p className="text-foreground/75 leading-relaxed mb-5">
                  Jai Shree Traders specialises in quality masterbatch solutions, delivering vibrant colours, consistency, and reliable performance for plastic industries. Premium masterbatches with excellent dispersion and finish — serving all of Rajasthan.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                  <li>• Colour, White, Black masterbatches</li>
                  <li>• UV, FR, Optical Brightener, Slip / Antiblock</li>
                  <li>• Authorised dealer — <strong>Poddar Pigments</strong></li>
                  <li>• GST: 08DCQPS2695N1ZE</li>
                </ul>
                <Link to="/jst" className="mt-auto inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all" style={{ color: "var(--purple)" }}>
                  Explore Jai Shree Traders <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-muted/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy mb-10">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { v: "25+", l: "Years of Experience" },
                { v: "500+", l: "Happy Customers" },
                { v: "1L+", l: "Deliveries" },
                { v: "Pan", l: "India Reach" },
              ].map((s) => (
                <div key={s.l} className="bg-card rounded-2xl p-6 border border-border shadow-card">
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-orange">{s.v}</div>
                  <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 bg-card rounded-3xl p-8 sm:p-10 border border-border shadow-card">
            <h2 className="font-display font-bold text-2xl text-navy mb-6 text-center">Registered & Office Address</h2>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                <span>Plot No. G-1-3, Badharna Industrial Area, V.K.I Area, Jaipur, Rajasthan — 302013</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                <span>
                  +91 76150 94242<br />
                  +91 93140 94242<br />
                  +91 94144 05215
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                <span className="break-all">
                  books.jse@gmail.com<br />
                  jaishreetraders5@gmail.com
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}