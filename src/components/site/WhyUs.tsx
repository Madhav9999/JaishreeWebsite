import { Trophy, Microscope, MapPin, Briefcase, Phone, Globe } from "lucide-react";
import { Reveal } from "./Reveal";

const points = [
  { icon: Trophy, text: "Authorised dealer of top brands — Reliance, GAIL, HMEL, Haldia, OPaL, Poddar Pigments" },
  { icon: Microscope, text: "Stringent quality checks before every dispatch" },
  { icon: MapPin, text: "Based in Jaipur, VKI — well-connected logistics hub" },
  { icon: Briefcase, text: "Both Virgin & Reprocessed material available" },
  { icon: Phone, text: "Direct manufacturer relationships = best pricing" },
  { icon: Globe, text: "Serving packaging, textiles, pipes, automobiles, FMCG, agriculture" },
];

export function WhyUs() {
  return (
    <section id="why" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://5.imimg.com/data5/UI/PW/KH/SELLER-6372546/colour-masterbatches-500x500.jpg"
              alt="Why choose us background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-navy/40">
              <div className="text-center text-white px-6">
                <div className="font-display font-extrabold text-4xl mb-2">From Granules to Masterbatches</div>
                <div className="text-white/80">Your most trusted partner</div>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-orange font-semibold uppercase text-sm tracking-widest mb-3">Why Choose Us</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-navy mb-8 leading-tight">
              Why Businesses Across India Trust <span className="text-gradient-orange">Jai Shree Group</span>
            </h2>
          </Reveal>
          <div className="space-y-4">
            {points.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ background: "var(--gradient-orange)" }}>
                    <p.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-foreground/80 leading-relaxed pt-1">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}