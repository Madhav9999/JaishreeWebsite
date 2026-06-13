import reliance from "@/assets/reliance.jpg";
import hmel from "@/assets/hmel.jpg";
import gail from "@/assets/gail.jpg";
import opalene from "@/assets/opalene.jpg";
import haldia from "@/assets/haldia.png";
import poddar from "@/assets/poddar.jpg";
import borouge from "@/assets/Borouge_logo.jpg";

const brands = [
  { name: "Reliance Industries", src: reliance },
  { name: "HMEL", src: hmel },
  { name: "GAIL India", src: gail },
  { name: "OPaL (OPaLene)", src: opalene },
  { name: "Haldia Petrochemicals", src: haldia },
  { name: "Poddar Pigments", src: poddar },
  { name: "Borouge", src: borouge },
];

export function BrandTicker() {
  const loop = [...brands, ...brands];
  return (
    <section id="brands" className="py-16 bg-muted/40">
      <div className="text-center mb-10 px-4">
        <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
          Authorised Dealer & Trusted Supplier of India's Leading Polymer Brands
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee gap-10 w-max items-center">
          {loop.map((b, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-10 py-6 min-w-[220px] h-[120px] bg-card rounded-xl shadow-sm border border-border/70"
            >
              <img
                src={b.src}
                alt={`${b.name} logo`}
                loading="lazy"
                className="max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
