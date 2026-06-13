import { Palette, Droplet, Circle, Sparkles, Sun, Flame, FlaskConical, Layers, ArrowRight, Award } from "lucide-react";
import { Reveal } from "./Reveal";
import colourImg from "@/assets/prod-colour-mb.jpg";
import whiteImg from "@/assets/prod-white-mb.jpg";
import blackImg from "@/assets/prod-black-mb.jpg";
import obaImg from "@/assets/prod-oba.jpg";
import uvImg from "@/assets/prod-uv.jpg";
import frImg from "@/assets/prod-fr.jpg";
import additiveImg from "@/assets/prod-additive.jpg";
import fibreImg from "@/assets/prod-fibre.jpg";
import colormasterbatch from "@/assets/colormasterbatch.jpg";
import opticabrightner from "@/assets/optical_brightner.jpg";
import uvstabilizer from "@/assets/uv_stabilizer.jpg";
import additivemasterbatch from "@/assets/additive_masterbatch.webp";
import fibre from "@/assets/fibre.webp";

const products = [
  { name: "Colour Masterbatches", desc: "Rich, vibrant colour concentrates with high pigment loading. Excellent dispersion, heat stability, and light fastness.", icon: Palette, img: colormasterbatch },
  { name: "White Masterbatches", desc: "Neutral and blue tone with TiO2 25–75%. Outstanding opacity and whiteness for films and moulding.", icon: Droplet, img: whiteImg },
  { name: "Black Masterbatches", desc: "Carbon black 30–60%. Exceptional jetness, UV protection, uniform dispersion for cables, pipes, films.", icon: Circle, img: colourImg },
  { name: "Optical Brighteners", desc: "Enhances whiteness and brightness of plastic products. Used in fibres, films, and packaging.", icon: Sparkles, img: opticabrightner },
  { name: "UV Stabilizers", desc: "Protects polymers from UV degradation. Essential for shade nets, agricultural films, PET bottles.", icon: Sun, img: uvstabilizer },
  { name: "Flame Retardant (FR)", desc: "Reduces flammability for cables, electrical housings, electronics, construction materials.", icon: Flame, img: frImg },
  { name: "Additive Masterbatches", desc: "Slip, antiblock, antistat, antioxidant, processing aids. Tailor-made solutions.", icon: FlaskConical, img: additivemasterbatch },
  { name: "Fibre Masterbatches", desc: "Dope dyeing of Polyester, PP, Nylon yarns. Compatible with POY/FDY/IDY/BCF/Non-woven.", icon: Layers, img: fibre },
];

export function JST() {
  return (
    <section id="jst" className="section-pad bg-muted/30">
      <div className="text-white py-10 px-4 sm:px-6 lg:px-8 mb-16" style={{ background: "var(--gradient-purple)" }}>
        <div className="mx-auto max-w-7xl flex items-center gap-4 flex-wrap">
          <Award className="w-10 h-10 text-white" />
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl">JAI SHREE TRADERS</h2>
            <p className="text-white/80 text-sm sm:text-base">Authorised Dealer — Poddar Pigments Masterbatches</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-card rounded-2xl p-8 sm:p-10 shadow-card border border-border mb-16">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-full lg:w-64 rounded-xl p-6 text-center text-white" style={{ background: "var(--gradient-purple)" }}>
                <div className="font-display font-extrabold text-3xl mb-1">PODDAR</div>
                <div className="font-display font-bold text-lg tracking-widest mb-3">PIGMENTS</div>
                <div className="text-xs text-white/80 border-t border-white/20 pt-3">Since 1994 • ISO 9001:2015</div>
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-navy mb-4">
                  Authorised Dealer of Poddar Pigments Limited
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Jai Shree Traders is the authorised dealer of Poddar Pigments Limited (PPL) — India's first company to manufacture masterbatches for dope dyeing of Polyester, Nylon and PP fibres. As an authorised partner, we supply the complete range of PPL's masterbatches across Rajasthan at best-in-market rates.
                </p>
                <a href="mailto:jaishreetraders5@gmail.com" className="text-purple font-semibold hover:underline">jaishreetraders5@gmail.com</a>
              </div>
            </div>
          </div>
        </Reveal>

        <h3 id="jst-products" className="font-display font-bold text-3xl sm:text-4xl text-navy mb-10 text-center">
          Complete Range of <span style={{ color: "var(--purple)" }}>Masterbatches</span>
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 50}>
              <article className="group relative rounded-2xl overflow-hidden border border-border shadow-card card-hover h-full flex flex-col min-h-[300px]">
                <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(67,28,99,0.25) 0%, rgba(67,28,99,0.85) 55%, rgba(45,15,75,0.96) 100%)" }} />
                <div className="relative z-10 p-6 flex flex-col flex-1 text-white">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-auto shadow-lg bg-white/15 backdrop-blur">
                    <p.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-display font-bold text-base mt-5 mb-2">{p.name}</h4>
                  <p className="text-white/85 text-xs leading-relaxed">{p.desc}</p>
                  <a href="https://wa.me/917615094242" target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1 font-semibold text-xs hover:gap-2 transition-all text-white">
                    Request Sample <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-2xl p-8 sm:p-10 text-white text-center shadow-xl" style={{ background: "var(--gradient-purple)" }}>
            <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3">Poddar Pigments Limited</h3>
            <p className="text-white/90 max-w-3xl mx-auto leading-relaxed">
              ISO 9001:2015 Certified | India's First Masterbatch Manufacturer | Present in 30+ Countries.
              As their Authorised Dealer in Rajasthan, Jai Shree Traders brings you guaranteed quality at the best prices.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
