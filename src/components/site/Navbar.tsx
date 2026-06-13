// import { useEffect, useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { Link } from "@tanstack/react-router";
// import groupLogo from "@/assets/group.jpg";
// import jaishreeLogo from "@/assets/jaishreelogo.png";

// type NavLink = { to: string; label: string };

// const productLinks: NavLink[] = [
//   { to: "/jse", label: "Jai Shree Enterprises" },
//   { to: "/jst", label: "Jai Shree Traders" },
//   { to: "/products", label: "All Products" },
// ];

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-white/85 backdrop-blur-sm border-b border-border/40"
//       }`}
//     >
//       <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
//         <Link to="/" className="flex items-center group">
//           <img
//             src={jaishreeLogo}
//             alt="Jai Shree Group logo"
//             className="h-12 lg:h-14 w-auto object-contain"
//           />
//         </Link>

//         <ul className="hidden lg:flex items-center gap-1 text-sm font-medium">
//           <NavLinkItem to="/">Home</NavLinkItem>
//           <NavLinkItem to="/about">About</NavLinkItem>
//           <Dropdown label="Our Companies" items={productLinks} />
//           <NavLinkItem to="/industries">Industries</NavLinkItem>
//           <NavLinkItem to="/contact">Contact</NavLinkItem>
//         </ul>

//         <div className="flex items-center gap-3">
//           <Link
//             to="/contact"
//             className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-white font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition"
//             style={{ background: "var(--gradient-orange)" }}
//           >
//             Get a Quote
//           </Link>
//           <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
//             {open ? <X /> : <Menu />}
//           </button>
//         </div>
//       </nav>

//       {open && (
//         <div className="lg:hidden bg-background border-t border-border">
//           <div className="px-4 py-4 flex flex-col gap-1">
//             {[
//               { to: "/", label: "Home" },
//               { to: "/about", label: "About" },
//               { to: "/jse", label: "Jai Shree Enterprises" },
//               { to: "/jst", label: "Jai Shree Traders" },
//               { to: "/products", label: "Products" },
//               { to: "/industries", label: "Industries" },
//               { to: "/contact", label: "Contact" },
//             ].map((l) => (
//               <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 text-foreground/80 hover:text-orange">
//                 {l.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// function NavLinkItem({ to, children }: { to: string; children: React.ReactNode }) {
//   return (
//     <li>
//       <Link to={to} className="px-3 py-2 rounded-md hover:text-orange transition-colors" activeProps={{ className: "px-3 py-2 rounded-md text-orange font-semibold" }}>
//         {children}
//       </Link>
//     </li>
//   );
// }

// function Dropdown({ label, items }: { label: string; items: NavLink[] }) {
//   return (
//     <li className="relative group">
//       <button className="px-3 py-2 rounded-md flex items-center gap-1 hover:text-orange transition-colors">
//         {label}
//         <ChevronDown className="w-4 h-4" />
//       </button>
//       <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
//         <div className="bg-card rounded-xl shadow-xl border border-border min-w-[240px] py-2">
//           {items.map((item) => (
//             <Link key={item.to} to={item.to} className="block px-4 py-2 text-sm hover:bg-muted hover:text-orange transition-colors">
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </li>
//   );
// }






//logo changes code 
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";

type NavLink = { to: string; label: string };

const productLinks: NavLink[] = [
  { to: "/jse", label: "Jai Shree Enterprises" },
  { to: "/jst", label: "Jai Shree Traders" },
  { to: "/products", label: "All Products" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-white/85 backdrop-blur-sm border-b border-border/40"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="flex items-center justify-center w-11 h-11 rounded-xl text-white font-black text-xl shadow-md flex-shrink-0"
            style={{ background: "var(--gradient-navy)" }}
          >
            JS
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-navy text-xl leading-none tracking-tight">
              JAI SHREE
            </div>
            <div className="text-[9px] font-semibold tracking-[0.2em] text-orange uppercase mt-0.5">
              Enterprises & Traders
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1 text-sm font-medium">
          <NavLinkItem to="/">Home</NavLinkItem>
          <NavLinkItem to="/about">About</NavLinkItem>
          <Dropdown label="Our Companies" items={productLinks} />
          <NavLinkItem to="/industries">Industries</NavLinkItem>
          <NavLinkItem to="/contact">Contact</NavLinkItem>
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-white font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition"
            style={{ background: "var(--gradient-orange)" }}
          >
            Get a Quote
          </Link>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 py-4 flex flex-col gap-1">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/jse", label: "Jai Shree Enterprises" },
              { to: "/jst", label: "Jai Shree Traders" },
              { to: "/products", label: "Products" },
              { to: "/industries", label: "Industries" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/80 hover:text-orange"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function NavLinkItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="px-3 py-2 rounded-md hover:text-orange transition-colors"
        activeProps={{ className: "px-3 py-2 rounded-md text-orange font-semibold" }}
      >
        {children}
      </Link>
    </li>
  );
}

function Dropdown({ label, items }: { label: string; items: NavLink[] }) {
  return (
    <li className="relative group">
      <button className="px-3 py-2 rounded-md flex items-center gap-1 hover:text-orange transition-colors">
        {label}
        <ChevronDown className="w-4 h-4" />
      </button>
      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <div className="bg-card rounded-xl shadow-xl border border-border min-w-[240px] py-2">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-4 py-2 text-sm hover:bg-muted hover:text-orange transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}