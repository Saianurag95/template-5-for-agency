import { Link } from "react-router-dom";
import { MessageCircle, Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import { agency } from "../data/agency";

const footerLinks = [
  { label: "Work", href: "#showcase" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-925 border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* Brand col */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-8 h-8 bg-gold-500 rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="text-stone-950 font-display font-bold text-sm">V</span>
              </div>
              <span className="text-white font-semibold tracking-wide text-[15px]">{agency.name}</span>
            </Link>
            <p className="text-stone-600 text-[13px] leading-[1.8] max-w-xs mb-7">
              Premium design-led websites for businesses across Hyderabad and India. Fast delivery. Transparent pricing.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: MessageCircle, href: `https://wa.me/${agency.whatsapp}`, label: "WhatsApp" },
                { Icon: Mail, href: `mailto:${agency.email}`, label: "Email" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 border border-stone-800 hover:border-gold-500/40 rounded flex items-center justify-center transition-colors group"
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5 text-stone-600 group-hover:text-gold-500 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav col */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-stone-500 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">Navigation</h4>
            <ul className="space-y-3.5">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-stone-600 hover:text-stone-300 text-[13px] transition-colors capitalize">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/intake" className="text-gold-500/70 hover:text-gold-400 text-[13px] transition-colors">
                  Start a Project →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact col */}
          <div className="md:col-span-3">
            <h4 className="text-stone-500 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">Contact</h4>
            <ul className="space-y-3.5">
              <li className="text-stone-600 text-[13px]">{agency.email}</li>
              <li className="text-stone-600 text-[13px]">{agency.phone}</li>
              <li className="text-stone-600 text-[13px]">{agency.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800/40 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-stone-800 text-[11px]">
            © {new Date().getFullYear()} {agency.name}, {agency.location}. All rights reserved.
          </p>
          <p className="text-stone-800 text-[11px] font-mono">
            Template ID: agency-creative-studio-01
          </p>
        </div>
      </div>
    </footer>
  );
}
