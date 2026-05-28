import { testimonials } from "../data/agency";

export default function Testimonials() {
  return (
    <section className="bg-stone-950 py-32 border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="text-gold-500 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-gold-500" />
              Client Proof
            </div>
            <h2 className="font-display text-white text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight">
              Words from brands<br />
              <span className="italic text-stone-400 font-normal">we've built for.</span>
            </h2>
          </div>
          <p className="text-stone-500 text-[15px] leading-[1.8] max-w-sm">
            Real businesses in Hyderabad and across India trust us to represent them online.
          </p>
        </div>

        {/* Testimonial cards — editorial layout */}
        <div className="grid md:grid-cols-3 gap-px bg-stone-800/30">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`p-8 lg:p-10 flex flex-col ${i === 1 ? "bg-stone-900" : "bg-stone-950"}`}
            >
              {/* Opening quote mark */}
              <div className="font-display text-gold-500/30 text-7xl leading-none mb-6 -mt-2">"</div>

              <p className="text-stone-300 text-[15px] leading-[1.85] flex-1 italic font-light">
                {t.quote}
              </p>

              <div className="flex items-center gap-4 mt-10 pt-6 border-t border-stone-800/60">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover ring-1 ring-stone-700"
                />
                <div>
                  <div className="text-white font-semibold text-sm">{t.author}</div>
                  <div className="text-stone-600 text-xs mt-0.5">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
