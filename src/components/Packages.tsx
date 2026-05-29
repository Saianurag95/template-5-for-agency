import { Link } from "react-router-dom";
import { Check, Zap } from "lucide-react";
import { packages } from "../data/agency";

export default function Packages() {
  return (
    <section id="packages" className="bg-stone-950 py-32 border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="text-gold-500 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-gold-500" />
            Demo Pricing
          </div>
          <h2 className="font-display text-white text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight mb-5">
            Transparent packages.<br />
            <span className="italic text-stone-400 font-normal">No surprises.</span>
          </h2>
          <p className="text-stone-500 text-[15px] leading-[1.8]">
            Prices shown are demo pricing. Your final quote is confirmed during the intake process — no contracts, no lock-ins.
          </p>
        </div>

        {/* Package comparison */}
        <div className="grid md:grid-cols-3 gap-0 border border-stone-800/60 rounded-2xl overflow-hidden">
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col p-8 lg:p-10 ${
                pkg.highlighted
                  ? "bg-stone-900 border-x border-stone-700/80"
                  : "bg-stone-950"
              } ${i < packages.length - 1 ? "border-b md:border-b-0 border-stone-800/60" : ""}`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
              )}

              {pkg.highlighted && (
                <div className="flex items-center gap-1.5 text-gold-500 text-[11px] font-semibold tracking-widest uppercase mb-6">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  Most Popular
                </div>
              )}

              {/* Package name */}
              <div className={`text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${pkg.highlighted ? "text-gold-500" : "text-stone-600"}`}>
                {pkg.name}
              </div>

              {/* Price */}
              <div className="mb-2">
                <span className="text-[40px] font-bold text-white leading-none">{pkg.price}</span>
                {"hostingPrice" in pkg && <span className="block text-xs font-semibold text-cyan-200 mt-2">{pkg.hostingPrice}</span>}
              </div>
              <div className="text-stone-500 text-xs tracking-wide mb-3">
                Delivery: <span className="text-stone-400">{pkg.delivery}</span>
              </div>
              <p className="text-stone-500 text-[13px] leading-relaxed mb-8 pb-8 border-b border-stone-800/60">
                {pkg.tagline}
              </p>

              {/* Features */}
              <ul className="space-y-3.5 flex-1 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${pkg.highlighted ? "bg-gold-500/20 border border-gold-500/40" : "bg-stone-800 border border-stone-700"}`}>
                      <Check className={`w-2.5 h-2.5 ${pkg.highlighted ? "text-gold-400" : "text-stone-500"}`} strokeWidth={3} />
                    </div>
                    <span className="text-stone-400 text-[13px] leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/intake"
                className={`block text-center text-[13px] font-semibold py-3.5 rounded-sm transition-all ${
                  pkg.highlighted
                    ? "bg-gold-500 hover:bg-gold-400 text-stone-950 hover:shadow-[0_0_30px_rgba(201,168,76,0.25)]"
                    : "border border-stone-700 hover:border-stone-600 text-stone-300 hover:text-white"
                }`}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-700 text-[11px] mt-6">
          Demo pricing. Add Rs 500 to Rs 900 if we arrange domain and hosting. Payment is online-only through Razorpay.
        </p>
      </div>
    </section>
  );
}
