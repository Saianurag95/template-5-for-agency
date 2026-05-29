import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
  Building2,
  Globe,
  Layers,
  Palette,
  FileText,
  ImageIcon,
  KeyRound,
  Search,
  CreditCard,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { demoTemplates, packages } from "../data/agency";
import { submitIntakeWithRazorpay } from "../payments/razorpay";

// ─── Step metadata ────────────────────────────────────────────────
const STEPS = [
  { id: 1, label: "Business Info", icon: Building2, short: "Business" },
  { id: 2, label: "Website Requirements", icon: Globe, short: "Requirements" },
  { id: 3, label: "Template Selection", icon: Layers, short: "Template" },
  { id: 4, label: "Brand Information", icon: Palette, short: "Brand" },
  { id: 5, label: "Content Submission", icon: FileText, short: "Content" },
  { id: 6, label: "Media Uploads", icon: ImageIcon, short: "Media" },
  { id: 7, label: "Credentials", icon: KeyRound, short: "Credentials" },
  { id: 8, label: "SEO Information", icon: Search, short: "SEO" },
  { id: 9, label: "Package Selection", icon: CreditCard, short: "Package" },
  { id: 10, label: "Payment Section", icon: CreditCard, short: "Payment" },
  { id: 11, label: "Final Review", icon: ClipboardCheck, short: "Review" },
];

const initialForm = {
  clientName: "", businessName: "", industry: "", location: "", phone: "", email: "",
  websiteGoal: "", targetAudience: "", competitors: "", mustHaveFeatures: "",
  selectedTemplate: "", templateId: "", templateNotes: "",
  brandColors: "", fontPreferences: "", brandPersonality: "", existingLogo: "",
  heroHeadline: "", aboutText: "", servicesText: "", ctaText: "",
  hasLogo: "", hasBrandImages: "", additionalMediaNotes: "",
  domainProvider: "", hostingProvider: "", credentialsNotes: "",
  targetKeywords: "", googleAnalytics: "", seoNotes: "",
  selectedPackage: "",
  paymentConfirmed: "",
};
type FormState = typeof initialForm;

function getMissingFields(step: number, form: FormState): string[] {
  switch (step) {
    case 1: return [!form.clientName && "Your Name", !form.businessName && "Business Name", !form.industry && "Industry", !form.email && "Email Address"].filter(Boolean) as string[];
    case 2: return [!form.websiteGoal && "Website Goal", !form.targetAudience && "Target Audience"].filter(Boolean) as string[];
    case 3: return [!form.selectedTemplate && "Selected Template", !form.templateId && "Template ID"].filter(Boolean) as string[];
    case 4: return [!form.brandColors && "Brand Colours"].filter(Boolean) as string[];
    case 5: return [!form.heroHeadline && "Hero Headline"].filter(Boolean) as string[];
    case 6: return [!form.hasLogo && "Logo Upload Confirmation", !form.hasBrandImages && "Brand Images Confirmation"].filter(Boolean) as string[];
    case 7: return [];
    case 8: return [!form.targetKeywords && "Target Keywords"].filter(Boolean) as string[];
    case 9: return [!form.selectedPackage && "Package Selection"].filter(Boolean) as string[];
    case 10: return [!form.paymentConfirmed && "Payment Confirmation"].filter(Boolean) as string[];
    default: return [];
  }
}

// ─── Primitive field components ──────────────────────────────────
function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="text-stone-500 text-[11px] font-medium tracking-[0.12em] uppercase block mb-2">
      {children}{required && <span className="text-gold-500 ml-1">*</span>}
    </label>
  );
}
function Input({ value, onChange, placeholder, type = "text" }: { value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
      className="w-full bg-stone-900 border border-stone-800 focus:border-gold-500/50 text-white rounded-sm px-4 py-3 text-[13px] outline-none transition-colors placeholder-stone-700" />
  );
}
function Textarea({ value, onChange, placeholder, rows = 4 }: { value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
  return (
    <textarea rows={rows} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
      className="w-full bg-stone-900 border border-stone-800 focus:border-gold-500/50 text-white rounded-sm px-4 py-3 text-[13px] outline-none transition-colors placeholder-stone-700 resize-none" />
  );
}
function FieldGroup({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return <div className="flex flex-col gap-1"><Label required={required}>{label}</Label>{children}</div>;
}
function OptionButtons({ options, value, onChange, cols = 2 }: { options: string[]; value: string; onChange: (v: string) => void; cols?: number }) {
  return (
    <div className={`grid gap-2 grid-cols-1 sm:grid-cols-${cols}`}>
      {options.map((o) => (
        <button key={o} type="button" onClick={() => onChange(o)}
          className={`text-[13px] px-4 py-3 rounded-sm border text-left transition-all ${value === o ? "border-gold-500 bg-gold-500/10 text-gold-300" : "border-stone-800 bg-stone-900 text-stone-500 hover:border-stone-700 hover:text-stone-300"}`}>
          {o}
        </button>
      ))}
    </div>
  );
}

// ─── Step content ─────────────────────────────────────────────────
function Step1({ form, setForm }: { form: FormState; setForm: React.Dispatch<React.SetStateAction<FormState>> }) {
  const f = (k: keyof FormState) => (v: string) => setForm(p => ({ ...p, [k]: v }));
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <FieldGroup label="Your Name" required><Input value={form.clientName} onChange={f("clientName")} placeholder="Priya Sharma" /></FieldGroup>
      <FieldGroup label="Business Name" required><Input value={form.businessName} onChange={f("businessName")} placeholder="Bloom Interior Design" /></FieldGroup>
      <FieldGroup label="Industry / Niche" required><Input value={form.industry} onChange={f("industry")} placeholder="Interior Design, Restaurant, Clinic..." /></FieldGroup>
      <FieldGroup label="Business Location"><Input value={form.location} onChange={f("location")} placeholder="Hyderabad, Telangana" /></FieldGroup>
      <FieldGroup label="Phone Number"><Input value={form.phone} onChange={f("phone")} placeholder="+91 98490 00000" type="tel" /></FieldGroup>
      <FieldGroup label="Email Address" required><Input value={form.email} onChange={f("email")} placeholder="you@business.com" type="email" /></FieldGroup>
    </div>
  );
}

function Step2({ form, setForm }: { form: FormState; setForm: React.Dispatch<React.SetStateAction<FormState>> }) {
  const f = (k: keyof FormState) => (v: string) => setForm(p => ({ ...p, [k]: v }));
  const goals = ["Get more leads", "Sell products online", "Showcase portfolio", "Establish online presence", "Book consultations", "Build brand credibility"];
  return (
    <div className="flex flex-col gap-7">
      <FieldGroup label="Primary Website Goal" required>
        <OptionButtons options={goals} value={form.websiteGoal} onChange={f("websiteGoal")} cols={3} />
      </FieldGroup>
      <FieldGroup label="Target Audience" required><Input value={form.targetAudience} onChange={f("targetAudience")} placeholder="e.g. Women aged 25–40 interested in home décor in Hyderabad" /></FieldGroup>
      <FieldGroup label="Competitor Websites (optional)"><Input value={form.competitors} onChange={f("competitors")} placeholder="List URLs you admire or want to compete with" /></FieldGroup>
      <FieldGroup label="Must-Have Features"><Textarea value={form.mustHaveFeatures} onChange={f("mustHaveFeatures")} placeholder="Contact form, booking system, gallery, WhatsApp button, blog..." rows={3} /></FieldGroup>
    </div>
  );
}

function Step3({ form, setForm }: { form: FormState; setForm: React.Dispatch<React.SetStateAction<FormState>> }) {
  const f = (k: keyof FormState) => (v: string) => setForm(p => ({ ...p, [k]: v }));
  const select = (name: string, id: string) => setForm(p => ({ ...p, selectedTemplate: name, templateId: id }));
  return (
    <div className="flex flex-col gap-8">
      <p className="text-stone-500 text-[13px] leading-relaxed">Select the template style that best fits your business. You can request customisations in the notes field below.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {demoTemplates.map((t) => (
          <button key={t.id} type="button" onClick={() => select(t.name, t.id)}
            className={`relative rounded-xl border overflow-hidden text-left transition-all group ${form.templateId === t.id ? "border-gold-500 ring-1 ring-gold-500/20" : "border-stone-800 hover:border-stone-700"}`}>
            <div className="h-36 bg-stone-800 overflow-hidden">
              <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
            </div>
            <div className="p-4 bg-stone-925">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] text-gold-500/80 font-mono tracking-widest">{t.id}</span>
                {form.templateId === t.id && (
                  <span className="w-5 h-5 bg-gold-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-stone-950" strokeWidth={3} />
                  </span>
                )}
              </div>
              <h4 className="text-white font-semibold text-sm">{t.name}</h4>
              <p className="text-stone-600 text-[11px] mt-0.5">{t.category}</p>
              <span className="mt-2 inline-block text-[11px] bg-stone-800 text-stone-500 px-2 py-0.5 rounded-sm">{t.fit}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <FieldGroup label="Selected Template" required><Input value={form.selectedTemplate} onChange={f("selectedTemplate")} placeholder="Auto-filled when you select above" /></FieldGroup>
        <FieldGroup label="Template ID" required><Input value={form.templateId} onChange={f("templateId")} placeholder="e.g. AG-MOD-01" /></FieldGroup>
      </div>
      <FieldGroup label="Customisation Notes"><Textarea value={form.templateNotes} onChange={f("templateNotes")} placeholder="Any changes you'd like to the selected template..." rows={3} /></FieldGroup>
    </div>
  );
}

function Step4({ form, setForm }: { form: FormState; setForm: React.Dispatch<React.SetStateAction<FormState>> }) {
  const f = (k: keyof FormState) => (v: string) => setForm(p => ({ ...p, [k]: v }));
  const personalities = ["Professional & Corporate", "Warm & Friendly", "Bold & Creative", "Minimal & Clean", "Playful & Fun", "Luxurious & Premium"];
  const logoOpts = ["Yes, I have a logo file", "No, I need a logo", "I have a rough idea"];
  return (
    <div className="flex flex-col gap-7">
      <FieldGroup label="Brand Colours" required><Input value={form.brandColors} onChange={f("brandColors")} placeholder="e.g. Deep navy #1B2A4A, Gold #C9A84C, White" /></FieldGroup>
      <FieldGroup label="Font Preferences"><Input value={form.fontPreferences} onChange={f("fontPreferences")} placeholder="e.g. Modern sans-serif, Classic serif, Google Fonts preferred" /></FieldGroup>
      <FieldGroup label="Brand Personality">
        <OptionButtons options={personalities} value={form.brandPersonality} onChange={f("brandPersonality")} cols={3} />
      </FieldGroup>
      <FieldGroup label="Existing Logo?">
        <OptionButtons options={logoOpts} value={form.existingLogo} onChange={f("existingLogo")} cols={1} />
      </FieldGroup>
    </div>
  );
}

function Step5({ form, setForm }: { form: FormState; setForm: React.Dispatch<React.SetStateAction<FormState>> }) {
  const f = (k: keyof FormState) => (v: string) => setForm(p => ({ ...p, [k]: v }));
  return (
    <div className="flex flex-col gap-7">
      <FieldGroup label="Hero Section Headline" required><Input value={form.heroHeadline} onChange={f("heroHeadline")} placeholder="e.g. Transform Your Space with Expert Interior Design" /></FieldGroup>
      <FieldGroup label="About / Business Description"><Textarea value={form.aboutText} onChange={f("aboutText")} placeholder="Your story, what you do, what makes you different..." rows={4} /></FieldGroup>
      <FieldGroup label="Services / Offerings"><Textarea value={form.servicesText} onChange={f("servicesText")} placeholder="List your main services or products with short descriptions..." rows={4} /></FieldGroup>
      <FieldGroup label="Primary Call-to-Action Text"><Input value={form.ctaText} onChange={f("ctaText")} placeholder='"Book a Free Consultation", "Order Now", "Get a Quote"' /></FieldGroup>
    </div>
  );
}

function Step6({ form, setForm }: { form: FormState; setForm: React.Dispatch<React.SetStateAction<FormState>> }) {
  const f = (k: keyof FormState) => (v: string) => setForm(p => ({ ...p, [k]: v }));
  const opts = ["Yes, I will send this file", "No, I don't have one", "I'll send later via WhatsApp/email"];
  return (
    <div className="flex flex-col gap-7">
      <div className="bg-stone-925 border border-stone-800/60 rounded-xl p-5">
        <p className="text-stone-400 text-sm font-medium mb-1">File Upload Note</p>
        <p className="text-stone-600 text-[13px] leading-relaxed">Send files via WhatsApp or email after submission. Confirm your upload status below so we know what to expect.</p>
      </div>
      <FieldGroup label="Logo File" required>
        <OptionButtons options={opts} value={form.hasLogo} onChange={f("hasLogo")} cols={1} />
      </FieldGroup>
      <FieldGroup label="Brand / Product / Team Photos" required>
        <OptionButtons options={opts} value={form.hasBrandImages} onChange={f("hasBrandImages")} cols={1} />
      </FieldGroup>
      <FieldGroup label="Additional Media Notes"><Textarea value={form.additionalMediaNotes} onChange={f("additionalMediaNotes")} placeholder="Any notes about files you'll be sending..." rows={3} /></FieldGroup>
    </div>
  );
}

function Step7({ form, setForm }: { form: FormState; setForm: React.Dispatch<React.SetStateAction<FormState>> }) {
  const f = (k: keyof FormState) => (v: string) => setForm(p => ({ ...p, [k]: v }));
  return (
    <div className="flex flex-col gap-7">
      <div className="bg-gold-500/5 border border-gold-500/20 rounded-xl p-5">
        <p className="text-gold-400 text-sm font-medium mb-1">Credentials are optional at this stage</p>
        <p className="text-stone-500 text-[13px]">You can provide domain and hosting access later. We only need this to deploy your finished site.</p>
      </div>
      <FieldGroup label="Domain Provider / Registrar"><Input value={form.domainProvider} onChange={f("domainProvider")} placeholder="e.g. GoDaddy, Namecheap, Google Domains" /></FieldGroup>
      <FieldGroup label="Hosting Provider"><Input value={form.hostingProvider} onChange={f("hostingProvider")} placeholder="e.g. Vercel, cPanel, SiteGround, Hostinger" /></FieldGroup>
      <FieldGroup label="Notes on Access"><Textarea value={form.credentialsNotes} onChange={f("credentialsNotes")} placeholder="Any relevant notes about your hosting or domain access..." rows={4} /></FieldGroup>
    </div>
  );
}

function Step8({ form, setForm }: { form: FormState; setForm: React.Dispatch<React.SetStateAction<FormState>> }) {
  const f = (k: keyof FormState) => (v: string) => setForm(p => ({ ...p, [k]: v }));
  const analyticsOpts = ["Already have it", "Set it up for me", "Not needed right now"];
  return (
    <div className="flex flex-col gap-7">
      <FieldGroup label="Target Keywords" required>
        <Textarea value={form.targetKeywords} onChange={f("targetKeywords")} placeholder="e.g. interior designer Hyderabad, home renovation Telangana, affordable home decor" rows={3} />
      </FieldGroup>
      <FieldGroup label="Google Analytics / Search Console">
        <OptionButtons options={analyticsOpts} value={form.googleAnalytics} onChange={f("googleAnalytics")} cols={3} />
      </FieldGroup>
      <FieldGroup label="SEO Notes"><Textarea value={form.seoNotes} onChange={f("seoNotes")} placeholder="Local targeting, competitor notes, specific SEO goals..." rows={3} /></FieldGroup>
    </div>
  );
}

function Step9({ form, setForm }: { form: FormState; setForm: React.Dispatch<React.SetStateAction<FormState>> }) {
  const f = (k: keyof FormState) => (v: string) => setForm(p => ({ ...p, [k]: v }));
  return (
    <div className="flex flex-col gap-6">
      <p className="text-stone-500 text-[13px]">Select the package that fits your project. Prices are demo pricing in Indian Rupees.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <button key={pkg.id} type="button" onClick={() => f("selectedPackage")(pkg.id)}
            className={`relative rounded-xl border p-6 text-left transition-all ${form.selectedPackage === pkg.id ? "border-gold-500 bg-gold-500/[0.07] ring-1 ring-gold-500/20" : "border-stone-800 bg-stone-925 hover:border-stone-700"}`}>
            {form.selectedPackage === pkg.id && (
              <div className="absolute top-4 right-4 w-5 h-5 bg-gold-500 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-stone-950" strokeWidth={3} />
              </div>
            )}
            <div className={`text-[10px] font-semibold tracking-[0.2em] uppercase mb-2 ${form.selectedPackage === pkg.id ? "text-gold-500" : "text-stone-600"}`}>{pkg.name}</div>
            <div className="text-white text-2xl font-bold mb-1">{pkg.price}</div>
            {"hostingPrice" in pkg && <div className="text-cyan-200 text-xs font-semibold mb-2">{pkg.hostingPrice}</div>}
            <div className="text-stone-600 text-[11px] mb-4">{pkg.delivery}</div>
            <ul className="space-y-1.5">
              {pkg.features.slice(0, 4).map((feat) => (
                <li key={feat} className="flex items-center gap-2 text-stone-500 text-[11px]">
                  <Check className="w-3 h-3 text-gold-500/60 flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>
    </div>
  );
}

function Step10({ form, setForm }: { form: FormState; setForm: React.Dispatch<React.SetStateAction<FormState>> }) {
  const f = (k: keyof FormState) => (v: string) => setForm(p => ({ ...p, [k]: v }));
  const pkg = packages.find(p => p.id === form.selectedPackage);
  const confirmOpts = [
    "I understand payment is online-only through Razorpay",
    "I understand only Razorpay online payment is accepted",
    "I am ready to complete online payment after submitting this intake",
  ];
  return (
    <div className="flex flex-col gap-7">
      <div className="border border-stone-800/60 rounded-xl p-6 bg-stone-925">
        <h3 className="text-white font-semibold text-sm mb-5">Payment Summary</h3>
        {pkg ? (
          <>
            <div className="flex items-center justify-between py-3 border-b border-stone-800/60">
              <div>
                <div className="text-stone-300 text-sm font-medium">{pkg.name} Package</div>
                <div className="text-stone-600 text-xs mt-0.5">Delivery: {pkg.delivery}</div>
                {"hostingPrice" in pkg && <div className="text-stone-400 text-xs mt-1">{pkg.hostingPrice}</div>}
              </div>
              <div className="text-2xl font-bold text-white">{pkg.price}</div>
            </div>
            <p className="text-stone-700 text-[11px] mt-4">Payment is online-only through Razorpay. Add Rs 500 to Rs 900 if we arrange domain and hosting.</p>
          </>
        ) : (
          <p className="text-stone-600 text-[13px]">No package selected — go back to Step 9 to choose a package.</p>
        )}
      </div>
      <FieldGroup label="Payment Confirmation" required>
        <OptionButtons options={confirmOpts} value={form.paymentConfirmed} onChange={f("paymentConfirmed")} cols={1} />
      </FieldGroup>
    </div>
  );
}

function Step11({ form }: { form: FormState }) {
  const pkg = packages.find(p => p.id === form.selectedPackage);
  const tmpl = demoTemplates.find(t => t.id === form.templateId);
  const rows = [
    { label: "Client Name", value: form.clientName },
    { label: "Business Name", value: form.businessName },
    { label: "Industry", value: form.industry },
    { label: "Email", value: form.email },
    { label: "Website Goal", value: form.websiteGoal },
    { label: "Target Audience", value: form.targetAudience },
    { label: "Selected Template", value: form.selectedTemplate },
    { label: "Template ID", value: form.templateId },
    { label: "Brand Colours", value: form.brandColors },
    { label: "Hero Headline", value: form.heroHeadline },
    { label: "Logo Status", value: form.hasLogo },
    { label: "Photos Status", value: form.hasBrandImages },
    { label: "Target Keywords", value: form.targetKeywords },
    { label: "Selected Package", value: pkg ? `${pkg.name} — ${pkg.price}` : "—" },
    { label: "Payment", value: form.paymentConfirmed },
  ];
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-gold-500/5 border border-gold-500/20 rounded-xl p-5">
        <p className="text-gold-400 text-sm font-semibold mb-1">Review your submission</p>
        <p className="text-stone-500 text-[13px]">Please review all details below before submitting. Once submitted, our team will be in touch within one business day.</p>
      </div>
      {tmpl && (
        <div className="flex gap-4 bg-stone-925 border border-stone-800/60 rounded-xl p-4 items-center">
          <img src={tmpl.image} alt={tmpl.name} className="w-20 h-16 object-cover rounded-lg flex-shrink-0" />
          <div>
            <div className="text-[10px] text-gold-500/80 font-mono tracking-widest mb-1">{tmpl.id}</div>
            <div className="text-white font-semibold text-sm">{tmpl.name}</div>
            <div className="text-stone-600 text-xs mt-0.5">{tmpl.category}</div>
          </div>
        </div>
      )}
      <div className="border border-stone-800/60 rounded-xl overflow-hidden">
        {rows.map((r, i) => (
          <div key={r.label} className={`flex gap-4 px-5 py-3 text-[13px] border-b border-stone-800/40 last:border-0 ${i % 2 === 0 ? "bg-stone-950" : "bg-stone-925"}`}>
            <span className="text-stone-600 w-40 flex-shrink-0">{r.label}</span>
            <span className="text-stone-300 flex-1">{r.value || "—"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main IntakePage ──────────────────────────────────────────────
export default function IntakePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const missing = getMissingFields(currentStep, form);
  const canProceed = missing.length === 0;
  const progress = ((currentStep - 1) / (STEPS.length - 1)) * 100;

  const stepComponents: Record<number, React.ReactNode> = {
    1: <Step1 form={form} setForm={setForm} />,
    2: <Step2 form={form} setForm={setForm} />,
    3: <Step3 form={form} setForm={setForm} />,
    4: <Step4 form={form} setForm={setForm} />,
    5: <Step5 form={form} setForm={setForm} />,
    6: <Step6 form={form} setForm={setForm} />,
    7: <Step7 form={form} setForm={setForm} />,
    8: <Step8 form={form} setForm={setForm} />,
    9: <Step9 form={form} setForm={setForm} />,
    10: <Step10 form={form} setForm={setForm} />,
    11: <Step11 form={form} />,
  };

  const meta = STEPS[currentStep - 1];
  const StepIcon = meta.icon;
  const handlePaymentSubmit = () => {
    const selectedPkg = packages.find((pkg) => pkg.id === form.selectedPackage);
    submitIntakeWithRazorpay({
      templateId: form.templateId || "AG-CREATIVE-05",
      formData: form as unknown as Record<string, unknown>,
      packageName: selectedPkg?.name || form.selectedPackage || "Starter",
      packagePrice: selectedPkg?.price,
      customerName: form.clientName,
      customerEmail: form.email,
      customerPhone: form.phone,
      businessName: form.businessName,
    }).catch(() => setSubmitted(true));
  };

  if (submitted) {
    const pkg = packages.find(p => p.id === form.selectedPackage);
    return (
      <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gold-500/10 border border-gold-500/30 rounded-full flex items-center justify-center">
            <Check className="w-9 h-9 text-gold-400" strokeWidth={2.5} />
          </div>
          <div className="absolute -inset-2 bg-gold-500/5 rounded-full blur-xl" />
        </div>
        <h1 className="font-display text-white text-4xl font-medium mb-3">Brief Submitted</h1>
        <p className="text-stone-500 max-w-md mb-10 text-[15px] leading-relaxed">
          Thank you, {form.clientName || "there"}! We've received your project details and will reach out within one business day.
        </p>
        <div className="bg-stone-925 border border-stone-800/60 rounded-xl p-6 text-left max-w-sm w-full mb-8 space-y-3">
          {[
            { l: "Business", v: form.businessName },
            { l: "Template", v: form.selectedTemplate || "—" },
            { l: "Package", v: pkg ? `${pkg.name} — ${pkg.price}` : "—" },
          ].map(({ l, v }) => (
            <div key={l} className="flex justify-between text-[13px]">
              <span className="text-stone-600">{l}</span>
              <span className="text-stone-300 font-medium">{v}</span>
            </div>
          ))}
        </div>
        <Link to="/" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-stone-950 font-semibold px-8 py-3.5 rounded-sm transition-all">
          Back to Website <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-950 flex flex-col">

      {/* Progress bar — sticky top */}
      <div className="fixed top-[68px] left-0 right-0 z-40 bg-stone-950/90 backdrop-blur-xl border-b border-stone-800/60">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-stone-900 border border-stone-800 rounded flex items-center justify-center flex-shrink-0">
                <StepIcon className="w-3.5 h-3.5 text-gold-400" />
              </div>
              <div>
                <span className="text-[10px] text-stone-600 uppercase tracking-widest block">Step {currentStep} of {STEPS.length}</span>
                <span className="text-white text-sm font-semibold">{meta.label}</span>
              </div>
            </div>
            <span className="text-stone-700 text-[11px] font-mono">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-stone-900 rounded-full h-0.5">
            <div className="bg-gold-500 h-0.5 rounded-full transition-all duration-500" style={{ width: `${Math.max(4, progress)}%` }} />
          </div>
        </div>

        {/* Step dots — scrollable on mobile */}
        <div className="border-t border-stone-800/40 overflow-x-auto">
          <div className="max-w-4xl mx-auto px-6 py-2 flex items-center gap-0 min-w-max">
            {STEPS.map((s, i) => {
              const done = s.id < currentStep;
              const active = s.id === currentStep;
              return (
                <div key={s.id} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => done && setCurrentStep(s.id)}
                    className={`flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-medium transition-colors ${active ? "text-gold-400" : done ? "text-stone-500 hover:text-stone-300 cursor-pointer" : "text-stone-800 cursor-default"}`}
                  >
                    {done ? <Check className="w-2.5 h-2.5 text-gold-500" strokeWidth={3} /> : <span className={`w-1.5 h-1.5 rounded-full ${active ? "bg-gold-500" : "bg-stone-800"}`} />}
                    <span className="hidden sm:inline">{s.short}</span>
                  </button>
                  {i < STEPS.length - 1 && <span className="w-3 h-px bg-stone-800 mx-0.5" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form body */}
      <div className="flex-1 max-w-4xl w-full mx-auto px-6 pt-52 pb-20">
        <div className="mb-10">
          <h2 className="font-display text-white text-3xl font-medium tracking-tight">{meta.label}</h2>
        </div>

        {stepComponents[currentStep]}

        {/* Validation warning */}
        {missing.length > 0 && (
          <div className="mt-8 bg-red-500/[0.07] border border-red-500/20 rounded-xl p-5 flex gap-3">
            <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-400 text-sm font-medium mb-2">Complete these fields to continue:</p>
              <ul className="space-y-1">
                {missing.map(m => <li key={m} className="text-red-500/80 text-[13px] flex items-center gap-2"><span className="w-1 h-1 bg-red-500/60 rounded-full" />{m}</li>)}
              </ul>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-stone-800/60">
          <button
            type="button"
            onClick={() => setCurrentStep(s => Math.max(1, s - 1))}
            disabled={currentStep === 1}
            className="flex items-center gap-2 text-stone-500 hover:text-stone-300 text-[13px] font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          {currentStep < STEPS.length ? (
            <button
              type="button"
              onClick={() => canProceed && setCurrentStep(s => s + 1)}
              disabled={!canProceed}
              className={`flex items-center gap-2 font-semibold text-[13px] px-7 py-3 rounded-sm transition-all ${canProceed ? "bg-gold-500 hover:bg-gold-400 text-stone-950 hover:shadow-[0_0_25px_rgba(201,168,76,0.2)]" : "bg-stone-900 text-stone-700 cursor-not-allowed border border-stone-800"}`}
            >
              Save & Continue <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePaymentSubmit}
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-stone-950 font-semibold text-[13px] px-7 py-3 rounded-sm transition-all hover:shadow-[0_0_25px_rgba(201,168,76,0.2)]"
            >
              Pay with Razorpay <Check className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
