import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const items = [
  { q: "We've been sourcing HDPE granules from Jai Shree Enterprises for over 8 years. Consistent quality, competitive price, and they always deliver on time. Highly recommended.", n: "Rakesh Sharma", c: "Sharma Plastics, Jaipur" },
  { q: "Best rates on Poddar Pigments masterbatches in Rajasthan. The team at Jai Shree Traders is very responsive and knowledgeable about the products.", n: "Mohan Gupta", c: "Gujarat Polymers Pvt. Ltd." },
  { q: "Excellent service and product quality. The masterbatches we source from JST have significantly improved our film output quality.", n: "Suresh Patel", c: "Sun Pack Industries, Ahmedabad" },
  { q: "Our go-to supplier for PP and LDPE. Neeraj bhai and Vishal bhai are always available and never let us down.", n: "Ajay Verma", c: "Verma Moulding Works, Delhi" },
  { q: "We tried multiple suppliers but came back to Jai Shree. The quality of their compound granules is simply unmatched at this price point.", n: "Dinesh Agarwal", c: "Agarwal Packaging, Jodhpur" },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="section-pad bg-muted/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-orange font-semibold uppercase text-sm tracking-widest mb-3">Testimonials</p>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-navy mb-12">
          What Our <span className="text-gradient-orange">Clients</span> Say
        </h2>

        <div className="relative bg-card rounded-3xl p-8 sm:p-12 shadow-card border border-border min-h-[280px]">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-orange/20" />
          {items.map((t, i) => (
            <div key={i} className={`transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0 absolute inset-0 p-8 sm:p-12"}`}>
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-5 h-5 fill-orange text-orange" />
                ))}
              </div>
              <p className="text-lg sm:text-xl text-foreground/85 italic leading-relaxed mb-6 max-w-3xl mx-auto">"{t.q}"</p>
              <div>
                <div className="font-display font-bold text-navy">{t.n}</div>
                <div className="text-sm text-muted-foreground">{t.c}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-orange" : "w-2 bg-navy/20"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
