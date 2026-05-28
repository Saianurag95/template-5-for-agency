import { stats, clients } from "../data/agency";

export default function TrustBand() {
  return (
    <section className="border-y border-stone-800/60 bg-stone-925">
      {/* Stats row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-stone-800/60">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col md:items-center md:text-center md:px-10">
              <span className="text-[28px] font-bold text-white leading-none mb-1">{s.value}</span>
              <span className="text-stone-500 text-xs tracking-wide uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Niche ticker */}
      <div className="border-t border-stone-800/40 py-4 overflow-hidden bg-stone-950/40">
        <div className="flex items-center gap-0 whitespace-nowrap">
          {[...clients, ...clients, ...clients].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6">
              <span className="w-1 h-1 bg-gold-500/60 rounded-full" />
              <span className="text-stone-600 text-xs tracking-widest uppercase font-medium">{c}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
