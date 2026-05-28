import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { processSteps } from "../data/agency";

export default function Process() {
  return (
    <section id="process" className="bg-stone-925 py-32 border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div>
            <div className="text-gold-500 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-gold-500" />
              How It Works
            </div>
            <h2 className="font-display text-white text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight">
              From brief to live.<br />
              <span className="italic text-stone-400 font-normal">In days, not months.</span>
            </h2>
          </div>
          <Link
            to="/intake"
            className="inline-flex items-center gap-2.5 bg-gold-500 hover:bg-gold-400 text-stone-950 font-semibold text-[13px] px-7 py-3.5 rounded-sm transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.2)] w-fit hover:gap-4"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector — desktop */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%)] right-[calc(12.5%)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-stone-700/60 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative group">
                {/* Step bubble */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-stone-950 border border-stone-800 group-hover:border-gold-500/40 flex items-center justify-center mb-7 transition-colors">
                  <span className="font-mono text-gold-500 font-bold text-lg leading-none">{step.step}</span>
                  <div className="absolute -inset-0.5 rounded-full border border-gold-500/0 group-hover:border-gold-500/20 transition-colors" />
                </div>

                <h3 className="text-white font-semibold text-[15px] mb-3 tracking-tight">{step.title}</h3>
                <p className="text-stone-500 text-[13px] leading-[1.8]">{step.description}</p>

                {/* Mobile divider */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden mt-10 border-b border-stone-800/60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
