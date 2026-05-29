import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { agency } from "../data/agency";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-stone-950 flex flex-col justify-center overflow-hidden">

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow from centre-left */}
      <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-gold-500/[0.04] rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold-600/[0.03] rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

      {/* Vertical rule — decorative */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden xl:block ml-[72px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT — editorial copy */}
          <div className="lg:col-span-6 xl:col-span-5">

            {/* Location badge */}
            <div className="inline-flex items-center gap-2 border border-stone-800 bg-stone-900/60 text-stone-400 text-[11px] font-medium px-4 py-2 rounded-full mb-10 tracking-widest uppercase">
              <MapPin className="w-3 h-3 text-gold-500" />
              {agency.city}, {agency.country} · Creative Studio
            </div>

            {/* Headline — mixed serif / sans */}
            <h1 className="mb-8">
              <span className="block font-display text-white text-5xl lg:text-[64px] xl:text-[72px] leading-[1.05] font-medium tracking-tight">
                Design-led
              </span>
              <span className="block font-display italic text-gold-500 text-5xl lg:text-[64px] xl:text-[72px] leading-[1.05] font-medium tracking-tight">
                websites
              </span>
              <span className="block font-sans text-stone-300 text-3xl lg:text-4xl font-light leading-snug mt-3 tracking-tight">
                for brands ready to<br className="hidden lg:block" /> look premium.
              </span>
            </h1>

            <p className="text-stone-500 text-base leading-[1.8] max-w-[400px] mb-10">
              {agency.subtagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <Link
                to="/intake"
                className="inline-flex items-center gap-2.5 bg-gold-500 hover:bg-gold-400 text-stone-950 font-semibold text-[13px] px-7 py-3.5 rounded-sm transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:gap-4"
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#showcase"
                className="inline-flex items-center gap-2 border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white text-[13px] font-medium px-7 py-3.5 rounded-sm transition-all"
              >
                View Our Work
              </a>
            </div>

            {/* Social proof row */}
            <div className="flex items-center gap-6 pt-8 border-t border-stone-900">
              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                ))}
                <span className="text-stone-500 text-xs ml-2">5.0 rating</span>
              </div>
              <div className="w-px h-4 bg-stone-800" />
              <span className="text-stone-500 text-xs">120+ businesses in Hyderabad & across India</span>
            </div>
          </div>

          {/* RIGHT — layered preview panels */}
          <div className="lg:col-span-6 xl:col-span-7 hidden lg:block">
            <div className="relative h-[560px]">

              {/* Shadow base */}
              <div className="absolute inset-8 bg-gold-500/5 rounded-2xl blur-3xl" />

              {/* Back panel — rotated */}
              <div className="absolute top-12 left-0 w-[340px] h-[400px] rounded-xl overflow-hidden border border-stone-800 shadow-2xl rotate-[-4deg] origin-bottom-left">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Website preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <div className="text-[10px] text-gold-500/70 font-mono tracking-widest mb-1">AG-LOCAL-02</div>
                  <div className="text-white text-sm font-medium">Local Authority</div>
                  <div className="text-stone-500 text-xs">Local Business</div>
                </div>
              </div>

              {/* Front main panel */}
              <div className="absolute top-0 right-0 w-[360px] h-[440px] rounded-xl overflow-hidden border border-stone-700/80 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                <img
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Website preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/10 to-transparent" />
                {/* Browser chrome */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-stone-950/80 backdrop-blur-sm border-b border-stone-800/60 flex items-center gap-1.5 px-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="flex-1 mx-3 h-4 bg-stone-800 rounded-sm text-[9px] text-stone-600 flex items-center px-2">vertexstudio.in/modern-brand</span>
                </div>
                <div className="absolute bottom-5 left-5">
                  <div className="text-[10px] text-gold-400 font-mono tracking-widest mb-1">AG-MOD-01</div>
                  <div className="text-white font-semibold">Modern Brand</div>
                  <div className="text-stone-400 text-xs">Brand / Corporate</div>
                </div>
              </div>

              {/* Floating card — bottom left */}
              <div className="absolute bottom-4 left-4 bg-stone-900/90 backdrop-blur-xl border border-stone-700/60 rounded-xl px-5 py-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-500/15 border border-green-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Delivered in 2 days</div>
                    <div className="text-stone-500 text-xs mt-0.5">PeakFit Gym · Hyderabad</div>
                  </div>
                </div>
              </div>

              {/* Price badge */}
              <div className="absolute top-4 left-10 bg-gold-500 text-stone-950 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                From Rs 6,000 / Rs 6,500 with domain + hosting
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-stone-700" />
        <span className="text-stone-700 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
