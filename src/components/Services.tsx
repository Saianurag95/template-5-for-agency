import { Globe, Layout, Palette, FileText, Search, Wrench } from "lucide-react";
import { services } from "../data/agency";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Globe, Layout, Palette, FileText, Search, Wrench,
};

export default function Services() {
  return (
    <section id="services" className="bg-stone-950 py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header — editorial split */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <div className="text-gold-500 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-gold-500" />
              What We Build
            </div>
            <h2 className="font-display text-white text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight">
              Every service your<br />
              <span className="italic text-stone-400 font-normal">brand needs</span> to lead.
            </h2>
          </div>
          <div className="flex flex-col gap-6 lg:items-end">
            <p className="text-stone-500 text-[15px] leading-[1.8] max-w-sm lg:text-right">
              From a single landing page to a complete brand web presence — we handle design, build and delivery in days, not weeks.
            </p>
            <Link
              to="/intake"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm font-medium group"
            >
              Start your project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Service grid — flush borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-stone-800/60 divide-y divide-stone-800/60 md:divide-x md:divide-y-0 lg:divide-y-0">
          {services.map((s, idx) => {
            const Icon = iconMap[s.icon] || Globe;
            const isSecondRow = idx >= 3;
            return (
              <div
                key={s.id}
                className={`p-8 lg:p-10 hover:bg-stone-900/50 transition-colors group cursor-default ${isSecondRow && idx < 6 ? "lg:border-t lg:border-stone-800/60" : ""} ${idx === 3 || idx === 4 || idx === 5 ? "md:border-t md:border-stone-800/60 md:border-x-0" : ""}`}
              >
                <div className="w-11 h-11 border border-stone-800 group-hover:border-gold-500/30 rounded flex items-center justify-center mb-7 transition-colors">
                  <Icon className="w-5 h-5 text-stone-500 group-hover:text-gold-400 transition-colors" />
                </div>
                <div className="text-[10px] text-stone-700 font-mono tracking-widest mb-3">0{s.id}</div>
                <h3 className="text-white font-semibold text-base mb-3 tracking-tight">{s.title}</h3>
                <p className="text-stone-500 text-[13px] leading-[1.8]">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
