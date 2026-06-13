import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const industries = [
  {
    name: "Injection Moulding",
    desc: "HDPE & PP grades engineered for crates, caps, closures, household & automotive parts.",
    img: "https://www.ace-mold.com/wp-content/uploads/2023/01/Injection-Moulding-Products-2023.jpeg",
  },
  {
    name: "Blow Moulding",
    desc: "HMEL B6401, Reliance B5202 and GAIL B6401 for bottles, jerry cans & containers.",
    img: "https://cmppin.com/wp-content/uploads/2021/09/HOUSEHOLD.jpg",
  },
  {
    name: "Film & Packaging",
    desc: "LDPE, LLDPE & HDPE film grades for flexible packaging, pouches, liners and laminates.",
    img: "https://www.ecoplastindia.com/wp-ecoplast-india/wp-content/themes/ecoplast-india/assets/img/products/product-category/ecogen/ecogen-img1.png",
  },
  {
    name: "Pipe Industry",
    desc: "PE80 & PE100 pipe grades — Reliance R50 for water, gas, irrigation & sewerage pipes.",
    img: "https://www.home-of-welding.com/storage/media/images/16985/conversions/Plastic-Pipes-full.jpg",
  },
  {
    name: "Tanks",
    desc: "Rotomoulding & blow-moulding compounds for water storage and chemical tanks.",
    img: "https://image.made-in-china.com/2f0j00uBNlrOkGYapD/Customized-Roto-Polyethylene-Plastic-Water-Tank-for-Cold-Industrial-and-Truck.webp",
  },
  {
    name: "Building & Infrastructure",
    desc: "Tough polymer compounds for construction films, conduits, fittings & geomembranes.",
    img: "https://image.made-in-china.com/380f0j00qYUGahRENQif/What-Makes-Low-Temperature-Steel-Pipe-the-Secret-Backbone-of-Modern-Industry-.jpg",
  },
  {
    name: "Non-Woven Fabric",
    desc: "PP granules & fibre masterbatches for spunbond, meltblown and SMS non-wovens.",
    img: "https://cpimg.tistatic.com/06267516/b/4/PP-Non-Woven-Fabric.jpg",
  },
  {
    name: "Woven Bags",
    desc: "Raffia-grade PP for FIBC, cement bags, fertilizer & food-grain woven sacks.",
    img: "https://ppwovenbagvietnam.com/wp-content/uploads/2022/05/MG_9827-1024x683.jpg",
  },
  {
    name: "Shade Net",
    desc: "UV-stabilised HDPE granules and additive masterbatches for agro shade nets.",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/8/532749766/QM/XI/EZ/104304307/polyhouse-shade-net.jpg",
  },
];

export function Industries() {
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => { embla.off("select", onSelect); };
  }, [embla]);

  return (
    <section id="industries" className="section-pad bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-orange font-semibold uppercase text-sm tracking-widest mb-3">Industries We Serve</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-navy leading-tight">
              Powering <span className="text-gradient-orange">Every Polymer</span> Application
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From injection moulding to woven sacks — our polymer granules and masterbatches keep India's plastic industry running.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {industries.map((ind) => (
                <div key={ind.name} className="relative flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] pl-0 md:pl-4">
                  <article className="relative h-[420px] rounded-3xl overflow-hidden group">
                    <img
                      src={ind.img}
                      alt={`${ind.name} polymer application`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                      <h3 className="font-display font-extrabold text-2xl mb-2">{ind.name}</h3>
                      <p className="text-white/85 text-sm leading-relaxed">{ind.desc}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => embla?.scrollPrev()}
            aria-label="Previous"
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl border border-border flex items-center justify-center hover:bg-orange hover:text-white transition z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => embla?.scrollNext()}
            aria-label="Next"
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl border border-border flex items-center justify-center hover:bg-orange hover:text-white transition z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {industries.map((_, i) => (
              <button
                key={i}
                onClick={() => embla?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === selected ? "w-8 bg-orange" : "w-2 bg-navy/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
