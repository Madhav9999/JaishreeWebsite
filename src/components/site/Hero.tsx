import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-granules.jpg";
import { CountUp } from "./Reveal";

const fullText = "India's Trusted Partner for Polymers & Masterbatches";

export function Hero() {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-[78vh] flex items-start pt-16 lg:pt-20 overflow-hidden bg-background">
      <img
        src={heroImg}
        alt="Premium HDPE LDPE PP polymer granules supplier in Jaipur"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Light bluish gradient wash on the left so the copy reads cleanly */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, hsl(215 70% 92% / 0.96) 0%, hsl(215 60% 94% / 0.9) 30%, hsl(215 45% 92% / 0.55) 60%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/55" />
      <div className="absolute -left-20 top-1/3 h-96 w-96 rounded-full blur-3xl opacity-30" style={{ background: "hsl(215 80% 70%)" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 lg:pt-6 pb-24 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur border border-border shadow-sm text-navy text-xs sm:text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
             Reliance • GAIL • HMEL • Haldia • Opalene • Borouge
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl text-navy leading-[1.05] tracking-tight">
            {typed}
            <span className="animate-blink text-orange">|</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-foreground/75 max-w-2xl leading-relaxed">
            Jai Shree Group — Supplying Premium HDPE, LDPE, PP Granules & Poddar Pigments Masterbatches across India since 2004.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#jse-products" className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition" style={{ background: "var(--gradient-orange)", boxShadow: "var(--shadow-orange)" }}>
              Explore Products <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://wa.me/917615094242" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-whatsapp text-white font-semibold shadow-lg hover:scale-105 transition">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us Now
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/85 backdrop-blur border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-navy">
          <Stat label="Since" value={<>2004</>} />
          <Stat label="Happy Clients" value={<><CountUp end={300} />+</>} />
          <Stat label="Deliveries" value={<><CountUp end={10000} />+</>} />
          <Stat label="Coverage" value={<>Pan-India</>} />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="text-center">
      <div className="font-display font-bold text-xl sm:text-3xl text-orange">{value}</div>
      <div className="text-xs sm:text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}