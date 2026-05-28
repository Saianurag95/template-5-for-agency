import { useState } from "react";
import { Send, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { agency } from "../data/agency";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-stone-950 py-32 border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-20">

        {/* Left */}
        <div>
          <div className="text-gold-500 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-gold-500" />
            Get In Touch
          </div>
          <h2 className="font-display text-white text-4xl font-medium leading-[1.1] tracking-tight mb-6">
            Quick question?<br />
            <span className="italic text-stone-400 font-normal">We're listening.</span>
          </h2>
          <p className="text-stone-500 text-[13px] leading-[1.8] mb-10 max-w-sm">
            For general inquiries use this form. For project submissions, use our{" "}
            <Link to="/intake" className="text-gold-400 hover:text-gold-300 underline underline-offset-2">
              project intake form
            </Link>{" "}
            for a faster response.
          </p>

          <div className="space-y-5 mb-12">
            {[
              { Icon: Mail, value: agency.email },
              { Icon: Phone, value: agency.phone },
              { Icon: MapPin, value: `${agency.location}` },
            ].map(({ Icon, value }) => (
              <div key={value} className="flex items-center gap-4">
                <div className="w-9 h-9 border border-stone-800 rounded flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-gold-500/70" />
                </div>
                <span className="text-stone-400 text-sm">{value}</span>
              </div>
            ))}
          </div>

          {/* Intake nudge */}
          <div className="border border-stone-800/60 rounded-xl p-6 bg-stone-925">
            <div className="text-white text-sm font-semibold mb-2">Ready to start a project?</div>
            <p className="text-stone-600 text-[13px] mb-4">Skip the back-and-forth. Fill out our intake form and we'll get to work.</p>
            <Link
              to="/intake"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm font-medium group"
            >
              Start Project Intake <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right — form */}
        <div>
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center border border-stone-800/60 rounded-2xl p-12 bg-stone-925">
              <div className="w-14 h-14 border border-gold-500/30 bg-gold-500/10 rounded-full flex items-center justify-center mb-5">
                <Send className="w-5 h-5 text-gold-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">Message received</h3>
              <p className="text-stone-500 text-sm">We'll get back to you within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: "Your Name", key: "name", type: "text", placeholder: "Priya Sharma" },
                { label: "Email Address", key: "email", type: "email", placeholder: "priya@business.com" },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key} className="flex flex-col gap-1.5">
                  <label className="text-stone-500 text-[11px] font-medium tracking-wide uppercase">{label}</label>
                  <input
                    type={type}
                    required
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="bg-stone-925 border border-stone-800 focus:border-gold-500/50 text-white rounded-sm px-4 py-3 text-sm outline-none transition-colors placeholder-stone-700"
                    placeholder={placeholder}
                  />
                </div>
              ))}
              <div className="flex flex-col gap-1.5">
                <label className="text-stone-500 text-[11px] font-medium tracking-wide uppercase">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-stone-925 border border-stone-800 focus:border-gold-500/50 text-white rounded-sm px-4 py-3 text-sm outline-none transition-colors placeholder-stone-700 resize-none"
                  placeholder="Tell us about your project or question..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-stone-600 text-white font-semibold py-3.5 rounded-sm transition-all flex items-center justify-center gap-2 text-sm"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
