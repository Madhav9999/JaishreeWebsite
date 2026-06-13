// import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
// import { Link } from "@tanstack/react-router";
// import groupLogo from "@/assets/group.jpg";

// export function Footer() {
//   return (
//     <footer className="bg-navy text-white pt-16 pb-6">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-10">
//         <div className="md:col-span-1">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="h-12 w-12 rounded-lg overflow-hidden bg-white">
//               <img src={groupLogo} alt="Jai Shree Group" className="h-full w-full object-cover" />
//             </div>
//             <div>
//               <div className="font-display font-bold">JAI SHREE GROUP</div>
//               <div className="text-xs text-white/60">Polymers • Masterbatches</div>
//             </div>
//           </div>
//           <p className="text-white/70 text-sm leading-relaxed mb-5">
//             Building Trust, Delivering Quality. India's trusted partner for polymer granules &amp; Poddar Pigments masterbatches since 2004.
//           </p>
//           <div className="flex gap-3">
//             {[Facebook, Instagram, Linkedin].map((I, i) => (
//               <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition">
//                 <I className="w-4 h-4" />
//               </a>
//             ))}
//             <a href="https://wa.me/917615094242" target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-whatsapp hover:scale-110 flex items-center justify-center transition">
//               <MessageCircle className="w-4 h-4" />
//             </a>
//           </div>
//         </div>

//         <div>
//           <h4 className="font-display font-bold mb-4">Explore</h4>
//           <ul className="space-y-2 text-sm text-white/70">
//             <li><Link to="/" className="hover:text-orange">Home</Link></li>
//             <li><Link to="/about" className="hover:text-orange">About Us</Link></li>
//             <li><Link to="/industries" className="hover:text-orange">Industries We Serve</Link></li>
//             <li><Link to="/products" className="hover:text-orange">All Products</Link></li>
//             <li><Link to="/contact" className="hover:text-orange">Contact</Link></li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-display font-bold mb-4">Our Companies</h4>
//           <ul className="space-y-2 text-sm text-white/70">
//             <li><Link to="/jse" className="hover:text-orange">Jai Shree Enterprises</Link></li>
//             <li><Link to="/jst" className="hover:text-orange">Jai Shree Traders</Link></li>
//             <li className="text-white/50 text-xs pt-2">GST (JSE): 08AADFJ8100D1ZT</li>
//             <li className="text-white/50 text-xs">GST (JST): 08DCQPS2695N1ZE</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-display font-bold mb-4">Contact</h4>
//           <ul className="space-y-2 text-sm text-white/70">
//             <li>Plot No. G-1-3, Badharna Industrial Area, V.K.I Area, Jaipur — 302013</li>
            
//             <li><a href="tel:919314094242" className="hover:text-orange">Neeraj Maheshwari: +91 93140 94242</a></li>
//             <li><a href="tel:919414405215" className="hover:text-orange">Vishal Maheshwari:+91 94144 05215</a></li>
//             <li><a href="tel:917615094242" className="hover:text-orange">Madhav Soni: +91 76150 94242</a></li>
//             <li><a href="mailto:books.jse@gmail.com" className="hover:text-orange">books.jse@gmail.com</a></li>
//             <li><a href="mailto:jaishreetraders5@gmail.com" className="hover:text-orange">jaishreetraders5@gmail.com</a></li>
//             <li className="text-xs text-white/50 pt-2">Open: 8 AM – 10 PM (All days) • WhatsApp 24×7</li>
//           </ul>
//         </div>
//       </div>

//       <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/50 px-4">
//         © 2026 Jai Shree Group · Jai Shree Enterprises · Jai Shree Traders · Jaipur, Rajasthan
//       </div>
//     </footer>
//   );
// }



//logo changes
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex items-center justify-center w-11 h-11 rounded-xl text-white font-black text-xl shadow-md flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              JS
            </div>
            <div>
              <div className="font-display font-extrabold text-white text-xl leading-none tracking-tight">
                JAI SHREE
              </div>
              <div className="text-[9px] font-semibold tracking-[0.2em] text-orange uppercase mt-0.5">
                Enterprises & Traders
              </div>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-5">
            Building Trust, Delivering Quality. India's trusted partner for polymer granules &amp; Poddar Pigments masterbatches since 2004.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin].map((I, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition">
                <I className="w-4 h-4" />
              </a>
            ))}
            <a href="https://wa.me/917615094242" target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-whatsapp hover:scale-110 flex items-center justify-center transition">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-orange">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange">About Us</Link></li>
            <li><Link to="/industries" className="hover:text-orange">Industries We Serve</Link></li>
            <li><Link to="/products" className="hover:text-orange">All Products</Link></li>
            <li><Link to="/contact" className="hover:text-orange">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Our Companies</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/jse" className="hover:text-orange">Jai Shree Enterprises</Link></li>
            <li><Link to="/jst" className="hover:text-orange">Jai Shree Traders</Link></li>
            <li className="text-white/50 text-xs pt-2">GST (JSE): 08AADFJ8100D1ZT</li>
            <li className="text-white/50 text-xs">GST (JST): 08DCQPS2695N1ZE</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Plot No. G-1-3, Badharna Industrial Area, V.K.I Area, Jaipur — 302013</li>
            <li><a href="tel:919314094242" className="hover:text-orange">Neeraj Maheshwari: +91 93140 94242</a></li>
            <li><a href="tel:919414405215" className="hover:text-orange">Vishal Maheshwari: +91 94144 05215</a></li>
            <li><a href="tel:917615094242" className="hover:text-orange">Madhav Soni: +91 76150 94242</a></li>
            <li><a href="mailto:books.jse@gmail.com" className="hover:text-orange">books.jse@gmail.com</a></li>
            <li><a href="mailto:jaishreetraders5@gmail.com" className="hover:text-orange">jaishreetraders5@gmail.com</a></li>
            <li className="text-xs text-white/50 pt-2">Open: 8 AM – 10 PM (All days) • WhatsApp 24×7</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/50 px-4">
        © 2026 Jai Shree Group · Jai Shree Enterprises · Jai Shree Traders · Jaipur, Rajasthan
      </div>
    </footer>
  );
}