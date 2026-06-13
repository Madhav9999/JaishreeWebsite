import { Factory, Package, Truck, BadgeCheck, IndianRupee, Boxes, Users, Zap, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import hdpeImg from "@/assets/prod-hdpe.jpg";
import ldpeImg from "@/assets/prod-ldpe.jpg";
import lldpeImg from "@/assets/prod-lldpe.jpg";
import ppImg from "@/assets/prod-pp.jpg";
import fillerImg from "@/assets/prod-filler.jpg";
import moistureImg from "@/assets/prod-moisture.jpg";

const products = [
  { name: "HDPE Granules", desc: "High Density Polyethylene for pipes, containers, industrial packaging. Natural, white, black, and colour variants.", icon: Package, img: hdpeImg },
  { name: "LDPE Granules", desc: "Low Density Polyethylene for film, bags, pouches, coating applications.", icon: Boxes, img: ldpeImg },
  { name: "LLDPE Granules", desc: "Linear Low Density PE — stretch films, milk pouches, flexible packaging.", icon: Package, img: lldpeImg },
  { name: "PP / PPCP Granules", desc: "Polypropylene copolymer for injection moulding, automotive parts, household goods.", icon: Boxes, img: ppImg },
  { name: "Filler Masterbatches", desc: "Cost-reducing CaCO3-based filler granules for film and moulding applications.", icon: Package, img: fillerImg },
  { name: "Moisture Granules", desc: "Specially formulated granules with moisture-absorbing additives.", icon: Boxes, img: moistureImg },
];

const why = [
  { icon: BadgeCheck, text: "ISI & Quality Certified Material" },
  { icon: Truck, text: "Pan-India Logistics Network" },
  { icon: IndianRupee, text: "Competitive & Transparent Pricing" },
  { icon: Package, text: "Customised Packing Available" },
  { icon: Users, text: "Trusted by 300+ Manufacturers" },
  { icon: Zap, text: "Fast Turnaround & Prompt Delivery" },
];

export function JSE() {
  return (
    <section id="jse" className="section-pad">
      <div className="text-white py-10 px-4 sm:px-6 lg:px-8 mb-16" style={{ background: "var(--gradient-navy)" }}>
        <div className="mx-auto max-w-7xl flex items-center gap-4 flex-wrap">
          <Factory className="w-10 h-10 text-orange" />
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl">JAI SHREE ENTERPRISES</h2>
            <p className="text-white/70 text-sm sm:text-base">Raw Polymer Division — Since 2004</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-navy mb-4">
                Rajasthan's most trusted polymer raw material supplier
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Established in 2004, Jai Shree Enterprises is one of Rajasthan's most trusted manufacturers and suppliers of compound plastic raw materials. We specialize in HDPE, LDPE, LLDPE, PP, and PPCP granules, serving industries across India with consistent quality, competitive pricing, and on-time delivery.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <h4 className="font-display font-bold text-navy mb-4">Direct Contact</h4>
              <ul className="space-y-3 text-sm">
                <li><span className="text-muted-foreground">Neeraj Maheshwari</span><br /><a href="tel:9314094242" className="font-semibold text-navy hover:text-orange">+91 93140 94242</a></li>
                <li><span className="text-muted-foreground">Vishal Maheshwari</span><br /><a href="tel:9414405215" className="font-semibold text-navy hover:text-orange">+91 94144 05215</a></li>
                <li><span className="text-muted-foreground">Madhav Soni</span><br /><a href="tel:7615094242" className="font-semibold text-navy hover:text-orange">+91 7615094242</a></li>
                <li><span className="text-muted-foreground">Email</span><br /><a href="mailto:books.jse@gmail.com" className="font-semibold text-navy hover:text-orange break-all">books.jse@gmail.com</a></li>
                <li><span className="text-muted-foreground">Email</span><br /><a href="jaishreetraders5@gmail.com" className="font-semibold text-navy hover:text-orange break-all">jaishreetraders5@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </Reveal>

        <h3 id="jse-products" className="font-display font-bold text-3xl sm:text-4xl text-navy mb-10 text-center">
          Our <span className="text-gradient-orange">Polymer Granules</span>
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <article className="group relative rounded-2xl overflow-hidden border border-border shadow-card card-hover h-full flex flex-col min-h-[340px]">
                <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/70 to-navy/20" />
                <div className="relative z-10 p-7 flex flex-col flex-1 text-white">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-auto shadow-lg" style={{ background: "var(--gradient-orange)" }}>
                    <p.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-display font-bold text-xl mt-6 mb-2">{p.name}</h4>
                  <p className="text-white/85 text-sm leading-relaxed">{p.desc}</p>
                  <a href="https://wa.me/917615094242" target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1 text-orange font-semibold text-sm hover:gap-2 transition-all">
                    Send Enquiry <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <h3 className="font-display font-bold text-2xl sm:text-3xl text-navy mb-10 text-center">Why Jai Shree Enterprises?</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {why.map((w, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="flex items-center gap-4 p-5 rounded-xl bg-muted/40 border border-border">
                <div className="w-11 h-11 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
                  <w.icon className="w-5 h-5 text-navy" />
                </div>
                <span className="font-medium text-sm">{w.text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
