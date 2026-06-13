import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formEl = e.target as HTMLFormElement;
    const data = new FormData(formEl);

    // Your Formspree endpoint (provided)
    const endpoint = "https://formspree.io/f/xojzyalj";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setSent(true);
        formEl.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setError((json && (json.error || json.message)) || "Failed to send enquiry. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-orange font-semibold uppercase text-sm tracking-widest mb-3">
            Contact Us
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-navy">
            Let's Build Something <span className="text-gradient-orange">Together</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <InfoCard
              icon={MapPin}
              title="Jai Shree Enterprises"
              body="G-1-3, Badharna Industrial Area, VKI Area Extn., Jaipur - 302013"
            />
            <InfoCard
              icon={MapPin}
              title="Jai Shree Traders"
              body="Godown No. 02, G-1-3, Badharna Industrial Area, VKI Area Extn., Jaipur - 302013"
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <InfoCard
                icon={Phone}
                title="Neeraj Maheshwari"
                body={
                  <a href="tel:919314094242" className="hover:text-orange">
                    +91 93140 94242
                  </a>
                }
              />
              <InfoCard
                icon={Phone}
                title="Vishal Maheshwari"
                body={
                  <a href="tel:919414405215" className="hover:text-orange">
                    +91 94144 05215
                  </a>
                }
              />
              <InfoCard
                icon={Phone}
                title="Madhav Soni"
                body={
                  <a href="tel:917615094242" className="hover:text-orange">
                    +91 76150 94242
                  </a>
                }
              />
            </div>
            <InfoCard
              icon={Mail}
              title="Email"
              body={
                <>
                  <a
                    href="mailto:books.jse@gmail.com"
                    className="hover:text-orange block break-all"
                  >
                    books.jse@gmail.com
                  </a>
                  <a
                    href="mailto:jaishreetraders5@gmail.com"
                    className="hover:text-orange block break-all"
                  >
                    jaishreetraders5@gmail.com
                  </a>
                </>
              }
            />
            <a
              href="https://wa.me/917615094242"
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-whatsapp text-white font-bold text-lg shadow-lg hover:scale-[1.02] transition"
            >
              <MessageCircle className="w-6 h-6" /> WhatsApp Us Now
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl p-8 shadow-card border border-border space-y-4"
          >
            <h3 className="font-display font-bold text-2xl text-navy mb-2">Send an Enquiry</h3>
            {sent && (
              <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
                Enquiry sent — we'll email you back shortly.
              </div>
            )}
            {error && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                {error}
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" />
              <Field label="Company" name="company" />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Email" name="email" type="email" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Product Interest</label>
              <select
                name="product"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-orange"
              >
                <option>HDPE Granules</option>
                <option>LDPE Granules</option>
                <option>PP / PPCP Granules</option>
                <option>Masterbatches</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-orange resize-none"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading || sent}
                className="w-full py-4 rounded-xl text-white font-semibold inline-flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "var(--gradient-orange)" }}
              >
                {loading ? (
                  <span>Sending...</span>
                ) : sent ? (
                  <span>Thank you! We'll contact you soon.</span>
                ) : (
                  <>
                    Send Enquiry <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ElementType;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl bg-card border border-border shadow-card">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: "var(--gradient-navy)" }}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="font-display font-bold text-navy mb-1">{title}</div>
        <div className="text-sm text-muted-foreground">{body}</div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        required
        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-orange"
      />
    </div>
  );
}
