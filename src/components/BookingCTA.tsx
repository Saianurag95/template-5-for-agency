import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { agency } from "../data/agency";

export default function BookingCTA() {
  return (
    <section id="booking" className="relative bg-stone-925 py-32 border-t border-stone-800/60 overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-gold-500/[0.06] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border border-stone-800/60 rounded-2xl p-10 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 bg-stone-950/60 backdrop-blur-sm">

          <div className="max-w-xl">
            <div className="text-gold-500 text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gold-500" />
              Get Started Today
            </div>
            <h2 className="font-display text-white text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight mb-5">
              Ready for a premium<br />
              <span className="italic text-gold-400">website that works?</span>
            </h2>
            <p className="text-stone-500 text-[15px] leading-[1.8]">
              Start with our intake form — tell us about your business and we'll have a preview ready faster than you think. Based in {agency.city}, serving businesses across India.
            </p>
          </div>

          <div className="flex flex-col gap-4 min-w-[240px]">
            <Link
              to="/intake"
              className="flex items-center justify-center gap-2.5 bg-gold-500 hover:bg-gold-400 text-stone-950 font-semibold text-[13px] px-8 py-4 rounded-sm transition-all hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] hover:gap-4"
            >
              Start Project Intake <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${agency.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 border border-stone-700 hover:border-stone-600 text-stone-300 hover:text-white text-[13px] font-medium px-8 py-4 rounded-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              WhatsApp Us
            </a>
            <p className="text-stone-700 text-[11px] text-center">No commitment · Reply within hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
