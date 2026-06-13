import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWidgets } from "@/components/site/FloatingWidgets";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Jai Shree Group | Polymer Granules & Masterbatch Enquiries Jaipur" },
      { name: "description", content: "Get in touch with Jai Shree Group — Jaipur. Call +91 7615094242 / +91 9314094242 or email books.jse@gmail.com for HDPE, LDPE, PP and masterbatch enquiries." },
      { property: "og:title", content: "Contact Jai Shree Group" },
      { property: "og:description", content: "Call, email or WhatsApp us for polymer granules & Poddar Pigments masterbatch enquiries. Pan-India dispatch from Jaipur." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background overflow-x-hidden">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-orange font-semibold uppercase text-sm tracking-widest mb-3">Get in Touch</p>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-navy leading-tight">
            Let's Talk <span className="text-gradient-orange">Polymers</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Open 8 AM – 10 PM all days · WhatsApp 24×7. Pan-India dispatch from our Jaipur warehouse.
          </p>
        </section>
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
