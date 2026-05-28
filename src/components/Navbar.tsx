import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { agency } from "../data/agency";

const navLinks = [
  { label: "Work", href: "#showcase" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isIntake = location.pathname === "/intake";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isIntake
          ? "bg-stone-950/95 backdrop-blur-xl border-b border-stone-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-8 h-8 bg-gold-500 rounded-sm flex items-center justify-center">
              <span className="text-stone-950 font-display font-bold text-sm leading-none">V</span>
            </div>
            <div className="absolute -inset-0.5 bg-gold-500/20 rounded-sm blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-white font-semibold tracking-wide text-[15px]">
            {agency.name}
          </span>
        </Link>

        {/* Desktop nav */}
        {!isIntake && (
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-stone-400 hover:text-white text-[13px] font-medium tracking-wide transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
        )}

        {/* CTA */}
        {!isIntake ? (
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${agency.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-stone-400 hover:text-white text-[13px] font-medium transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              WhatsApp
            </a>
            <Link
              to="/intake"
              className="hidden md:inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-stone-950 text-[13px] font-semibold px-5 py-2.5 rounded-sm transition-all hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
            >
              Start Project
            </Link>
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        ) : (
          <Link
            to="/"
            className="text-stone-400 hover:text-white text-[13px] font-medium transition-colors flex items-center gap-1.5"
          >
            ← Back to Site
          </Link>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && !isIntake && (
        <div className="md:hidden bg-stone-950/98 backdrop-blur-xl border-t border-stone-800/60 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-stone-300 hover:text-white text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/intake"
            className="mt-2 bg-gold-500 hover:bg-gold-400 text-stone-950 text-sm font-semibold px-5 py-3.5 rounded-sm text-center transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Start Project
          </Link>
        </div>
      )}
    </header>
  );
}
