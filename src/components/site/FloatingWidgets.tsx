import { useEffect, useState } from "react";
import { MessageCircle, Bot, X, ArrowUp, Send } from "lucide-react";

const faqs: { q: string; a: string }[] = [
  { q: "What products do you supply?", a: "We supply HDPE, LDPE, LLDPE, PP, PPCP granules under Jai Shree Enterprises, and the full range of Poddar Pigments Masterbatches (Colour, White, Black, UV, FR, Optical Brighteners) under Jai Shree Traders." },
  { q: "How do I place an order?", a: "You can WhatsApp us at +91 76150 94242 or email books.jse@gmail.com to place an order or get a quote." },
  { q: "Do you supply outside Rajasthan?", a: "Yes! We supply pan-India. Our logistics network covers all major cities and industrial zones." },
  { q: "What is the minimum order quantity?", a: "Minimum order quantities vary by product. WhatsApp us for specific MOQ details on the material you need." },
  { q: "Are you an authorised Poddar Pigments dealer?", a: "Yes, Jai Shree Traders is an authorised dealer of Poddar Pigments Limited for Rajasthan." },
  { q: "How can I contact your team?", a: "Call/WhatsApp: +91 76150 94242 | Email: books.jse@gmail.com | Address: G-4, Badharna Industrial Area, VKI Area Extn., Jaipur — 302013." },
];

export function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);
  const [topVisible, setTopVisible] = useState(false);
  const [msgs, setMsgs] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Hi! I'm JSG Assistant 🤖. How can I help you today?" },
  ]);

  useEffect(() => {
    const onScroll = () => setTopVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ask = (f: { q: string; a: string }) => {
    setMsgs((m) => [...m, { role: "user", text: f.q }, { role: "bot", text: f.a }]);
  };

  return (
    <>
      {/* WhatsApp floating - bottom right */}
      <a
        href="https://wa.me/917615094242"
        target="_blank"
        rel="noopener"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
        style={{ boxShadow: "0 10px 40px -10px oklch(0.65 0.18 145 / 0.6)" }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
      </a>

      {/* Back to top */}
      {topVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center shadow-lg hover:bg-orange transition"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Chatbot - bottom left */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full text-white flex items-center justify-center shadow-2xl hover:scale-110 transition"
        style={{ background: "var(--gradient-purple)" }}
        aria-label="Chat"
      >
        {chatOpen ? <X className="w-6 h-6" /> : <Bot className="w-7 h-7" />}
      </button>

      {chatOpen && (
        <div className="fixed bottom-24 left-6 z-40 w-[calc(100vw-3rem)] sm:w-96 max-h-[70vh] bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden">
          <div className="p-4 text-white flex items-center gap-3" style={{ background: "var(--gradient-purple)" }}>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold">JSG Assistant 🤖</div>
              <div className="text-xs text-white/80">Typically replies instantly</div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                    m.role === "user"
                      ? "bg-navy text-white rounded-br-sm"
                      : "bg-card border border-border text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-border bg-card">
            <div className="flex flex-wrap gap-1.5 mb-3 max-h-32 overflow-y-auto">
              {faqs.map((f, i) => (
                <button
                  key={i}
                  onClick={() => ask(f)}
                  className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-purple hover:text-white border border-border transition"
                >
                  {f.q}
                </button>
              ))}
            </div>
            <a
              href="https://wa.me/917615094242"
              target="_blank"
              rel="noopener"
              className="w-full py-2.5 rounded-lg bg-whatsapp text-white text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90"
            >
              Chat on WhatsApp <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
