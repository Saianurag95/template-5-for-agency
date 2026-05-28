import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { demoTemplates } from "../data/agency";

export default function DemoShowcase() {
  const [hero1, hero2] = demoTemplates.filter((t) => t.size === "large");
  const smalls = demoTemplates.filter((t) => t.size === "small");

  return (
    <section id="showcase" className="bg-stone-925 py-32 border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <div className="text-gold-500 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-gold-500" />
              Template Library
            </div>
            <h2 className="font-display text-white text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight">
              Choose a style.<br />
              <span className="italic text-stone-400 font-normal">We build the rest.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 lg:text-right">
            <p className="text-stone-500 text-[13px] leading-relaxed max-w-xs">
              6 niche-specific templates ready to deploy for businesses in Hyderabad and across India.
            </p>
            <Link
              to="/intake"
              className="inline-flex items-center gap-1.5 text-gold-500 hover:text-gold-400 text-sm font-medium group"
            >
              Browse all & select <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="grid lg:grid-cols-12 gap-3">

          {/* Hero 1 — tall left */}
          <div className="lg:col-span-5 relative group rounded-2xl overflow-hidden bg-stone-900 cursor-pointer h-[480px] lg:h-auto lg:min-h-[580px]">
            <img
              src={hero1?.image}
              alt={hero1?.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-stone-950/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <span className="text-[10px] text-gold-400/80 font-mono tracking-[0.2em] mb-3">{hero1?.id}</span>
              <h3 className="font-display text-white text-2xl font-medium mb-2">{hero1?.name}</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-2">{hero1?.description}</p>
              <span className="text-[11px] bg-stone-800/80 backdrop-blur-sm border border-stone-700/50 text-stone-400 px-3 py-1 rounded-full inline-flex w-fit mb-5">
                {hero1?.fit}
              </span>
              <Link
                to="/intake"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-stone-950 text-[13px] font-semibold px-5 py-3 rounded-sm w-fit transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
              >
                Choose This Style <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            {/* Always visible CTA on mobile */}
            <div className="lg:hidden absolute inset-0 flex flex-col justify-end p-6">
              <Link to="/intake" className="inline-flex items-center gap-2 bg-gold-500 text-stone-950 text-xs font-semibold px-4 py-2.5 rounded-sm w-fit">
                Choose <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Right column — 2x2 grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3">
            {smalls.slice(0, 4).map((t) => (
              <div
                key={t.id}
                className="relative group rounded-2xl overflow-hidden bg-stone-900 cursor-pointer h-[220px] lg:h-[280px]"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="text-[9px] text-gold-400/70 font-mono tracking-widest mb-1.5">{t.id}</span>
                  <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                  <p className="text-stone-500 text-[11px] mt-0.5">{t.category}</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-stone-950/40">
                  <Link
                    to="/intake"
                    className="bg-stone-950/90 backdrop-blur-sm border border-gold-500/40 text-gold-400 text-xs font-semibold px-4 py-2.5 rounded-sm flex items-center gap-1.5 shadow-xl"
                  >
                    Select Template <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Hero 2 — full width bottom */}
          <div className="lg:col-span-12 relative group rounded-2xl overflow-hidden bg-stone-900 cursor-pointer h-[260px] lg:h-[280px]">
            <img
              src={hero2?.image}
              alt={hero2?.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/60 to-stone-950/10" />
            <div className="absolute inset-0 flex flex-col justify-center px-10">
              <span className="text-[10px] text-gold-400/80 font-mono tracking-[0.2em] mb-3">{hero2?.id}</span>
              <h3 className="font-display text-white text-3xl font-medium mb-2">{hero2?.name}</h3>
              <p className="text-stone-400 text-sm max-w-sm mb-5">{hero2?.description}</p>
              <Link
                to="/intake"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-stone-950 text-[13px] font-semibold px-6 py-3 rounded-sm w-fit transition-all"
              >
                Choose This Style <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
