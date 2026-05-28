# Template 5 Complete Code Snapshot

Template ID: `AG-CREATIVE-05`

Source repo: `C:\Users\reddy\Documents\New project\template-5-for-agency`

GitHub repo: `Saianurag95/template-5-for-agency`

This snapshot exists so an AI agent or team member can understand and customize Template 5 quickly without rediscovering the codebase.

For fast client customization, edit `src/data/agency.ts` first. Only edit components or intake behavior when layout, behavior, or field changes are required.

## Fast Edit Map

1. `src/data/agency.ts` - brand, services, packages, demos, process, testimonials, stats, client labels.
2. `src/pages/IntakePage.tsx` - intake fields, template IDs, validation rules.
3. `tailwind.config.js` - color and typography system.
4. `src/components/*` - section-level visual structure.

## Included Files

- `package.json`
- `vercel.json`
- `tailwind.config.js`
- `src/App.tsx`
- `src/data/agency.ts`
- `src/pages/HomePage.tsx`
- `src/pages/IntakePage.tsx`
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/TrustBand.tsx`
- `src/components/DemoShowcase.tsx`
- `src/components/Services.tsx`
- `src/components/Packages.tsx`
- `src/components/Process.tsx`
- `src/components/Testimonials.tsx`
- `src/components/BookingCTA.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/index.css`
- `src/main.tsx`

## package.json

`$ext
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit -p tsconfig.app.json"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.57.4",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```

## vercel.json

`$ext
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## tailwind.config.js

`$ext
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        stone: {
          950: '#0A0A09',
          925: '#111110',
          900: '#161614',
          800: '#1e1e1b',
          700: '#2a2a27',
          600: '#3a3a36',
          500: '#5a5a55',
          400: '#8a8a83',
          300: '#b4b4ab',
          200: '#d4d4c8',
          100: '#eeeeea',
        },
        gold: {
          50:  '#fdf8ed',
          100: '#faefd0',
          200: '#f3db99',
          300: '#ecc35d',
          400: '#e6ad33',
          500: '#C9A84C',
          600: '#b08a3a',
          700: '#8d6d2e',
          800: '#6b5224',
          900: '#50401e',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
```

## src/App.tsx

`$ext
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import IntakePage from "./pages/IntakePage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intake" element={<IntakePage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## src/data/agency.ts

`$ext
// Replace all {{placeholder}} values before going live

export const agency = {
  name: "Vertex Studio",
  tagline: "Design-led websites for brands ready to look premium",
  subtagline:
    "A creative studio crafting brand-forward websites, landing pages and digital identity systems that actually convert.",
  location: "Hyderabad, India",
  city: "Hyderabad",
  country: "India",
  email: "hello@vertexstudio.in",
  phone: "+91 98490 00000",
  whatsapp: "919849000000",
  bookingUrl: "#booking",
  primaryColor: "#0A0A09",
  accentColor: "#C9A84C",
};

export const services = [
  {
    id: 1,
    title: "Brand Websites",
    description:
      "Fully designed, custom-structured brand sites built to establish authority and drive qualified leads in the Indian market.",
    icon: "Globe",
  },
  {
    id: 2,
    title: "Landing Pages",
    description:
      "High-conversion single pages for campaigns, product launches, and lead generation â€” built to perform.",
    icon: "Layout",
  },
  {
    id: 3,
    title: "Visual Branding",
    description:
      "Logo systems, colour palettes and typography direction that make your brand impossible to ignore.",
    icon: "Palette",
  },
  {
    id: 4,
    title: "Content Direction",
    description:
      "Strategic copy, headlines and messaging architecture that communicates value in seconds.",
    icon: "FileText",
  },
  {
    id: 5,
    title: "SEO Foundation",
    description:
      "On-page optimisation, meta structure and schema markup built into every project from day one.",
    icon: "Search",
  },
  {
    id: 6,
    title: "Ongoing Maintenance",
    description:
      "Post-launch updates, performance monitoring and content management support â€” so your site stays sharp.",
    icon: "Wrench",
  },
];

export const packages = [
  {
    id: "starter",
    name: "Starter",
    price: "Rs 6,000",
    delivery: "1 business day",
    tagline: "For new businesses that need a clean, credible online presence fast.",
    pages: 3,
    revisions: 1,
    features: [
      "3-page website",
      "Mobile responsive design",
      "Contact form integration",
      "Basic on-page SEO",
      "WhatsApp button",
      "1 revision round",
      "Delivered in 1 business day",
    ],
    cta: "Start with Starter",
    highlighted: false,
  },
  {
    id: "business",
    name: "Business",
    price: "Rs 8,000",
    delivery: "2 business days",
    tagline: "For growing businesses that want a premium presence and real results.",
    pages: 6,
    revisions: 2,
    features: [
      "6-page website",
      "Custom design direction",
      "Mobile responsive design",
      "WhatsApp & booking integration",
      "Full on-page SEO",
      "Google Maps integration",
      "2 revision rounds",
      "Delivered in 2 business days",
    ],
    cta: "Start with Business",
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium Growth",
    price: "Rs 12,000",
    delivery: "3 business days",
    tagline: "For established brands ready to dominate their category online.",
    pages: 10,
    revisions: 3,
    features: [
      "Up to 10 pages",
      "Premium editorial design",
      "Advanced micro-interactions",
      "Full SEO foundation",
      "Google Analytics setup",
      "Speed & performance optimised",
      "3 revision rounds",
      "Priority support",
      "Delivered in 3 business days",
    ],
    cta: "Start with Premium",
    highlighted: false,
  },
];

export const demoTemplates = [
  {
    id: "AG-MOD-01",
    name: "Modern Brand",
    category: "Brand / Corporate",
    description:
      "Clean, minimal layout built for professional service firms and modern brands.",
    fit: "Business Package",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "large",
  },
  {
    id: "AG-LOCAL-02",
    name: "Local Authority",
    category: "Local Business",
    description:
      "Warm, trustworthy layout built to convert local service leads in Hyderabad.",
    fit: "Starter Package",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "small",
  },
  {
    id: "AG-LEAD-03",
    name: "Lead Machine",
    category: "Lead Generation",
    description:
      "Conversion-focused single page with strong CTA hierarchy and trust signals.",
    fit: "Starter / Business",
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "small",
  },
  {
    id: "AG-SEO-04",
    name: "SEO Authority",
    category: "Content / SEO",
    description:
      "Structured for organic discovery, blog-ready and built for long-term search dominance.",
    fit: "Business / Premium",
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "small",
  },
  {
    id: "AG-CREATIVE-05",
    name: "Creative Portfolio",
    category: "Creative / Studio",
    description:
      "Editorial, gallery-driven layout for designers, photographers and creative studios.",
    fit: "Premium Package",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "large",
  },
  {
    id: "AG-SOCIAL-06",
    name: "Social Brand",
    category: "Social / Lifestyle",
    description:
      "Bold, expressive layout built for social-first brands and influencer businesses.",
    fit: "Business Package",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "small",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Submit Your Brief",
    description:
      "Fill out our intake form with your business details, goals, brand assets and chosen template. Takes under 10 minutes.",
  },
  {
    step: "02",
    title: "We Confirm & Begin",
    description:
      "Our team reviews your brief, confirms your scope and begins design within one working day.",
  },
  {
    step: "03",
    title: "Preview & Revise",
    description:
      "You receive a live preview link, review the build and submit revision notes through the portal.",
  },
  {
    step: "04",
    title: "Go Live",
    description:
      "Revisions applied, final files handed over or deployed to your domain. Your site is live.",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "We went from zero online presence to a premium site in two days. The process was seamless and the result was far beyond what we expected.",
    author: "Sara K.",
    company: "Bloom Interior Design, Hyderabad",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 2,
    quote:
      "The intake process is brilliant. By the time we submitted, the team already understood exactly what we needed. No back and forth, no wasted time.",
    author: "Ahmed R.",
    company: "PeakFit Gym, Hyderabad",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 3,
    quote:
      "Three pages, one day, Rs 6,000. The result looked like a Rs 60,000 website. I recommended them to every business owner I know in Hyderabad.",
    author: "Priya M.",
    company: "Priya's Patisserie, Hyderabad",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
];

export const stats = [
  { value: "120+", label: "Websites Delivered" },
  { value: "1â€“3 Days", label: "Turnaround Time" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "Hyderabad", label: "Based In India" },
];

export const clients = [
  "Interior Studios",
  "Fitness Centres",
  "Restaurants",
  "Law Firms",
  "Real Estate",
  "Clinics & Spas",
];
```

## src/pages/HomePage.tsx

`$ext
import Hero from "../components/Hero";
import TrustBand from "../components/TrustBand";
import Services from "../components/Services";
import DemoShowcase from "../components/DemoShowcase";
import Packages from "../components/Packages";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import BookingCTA from "../components/BookingCTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <DemoShowcase />
      <Services />
      <Packages />
      <Process />
      <Testimonials />
      <BookingCTA />
      <Contact />
      <Footer />
    </>
  );
}
```

## src/pages/IntakePage.tsx

`$ext
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

// â”€â”€â”€ Step metadata â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

// â”€â”€â”€ Primitive field components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

// â”€â”€â”€ Step content â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
      <FieldGroup label="Target Audience" required><Input value={form.targetAudience} onChange={f("targetAudience")} placeholder="e.g. Women aged 25â€“40 interested in home dÃ©cor in Hyderabad" /></FieldGroup>
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
    "I understand the demo pricing and will confirm final terms with the team",
    "I have already paid / made the advance payment",
    "I am ready to proceed and will pay on invoice",
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
              </div>
              <div className="text-2xl font-bold text-white">{pkg.price}</div>
            </div>
            <p className="text-stone-700 text-[11px] mt-4">Payment details and milestones will be confirmed by the team after reviewing your intake brief. This is a demo confirmation step.</p>
          </>
        ) : (
          <p className="text-stone-600 text-[13px]">No package selected â€” go back to Step 9 to choose a package.</p>
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
    { label: "Selected Package", value: pkg ? `${pkg.name} â€” ${pkg.price}` : "â€”" },
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
            <span className="text-stone-300 flex-1">{r.value || "â€”"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// â”€â”€â”€ Main IntakePage â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
            { l: "Template", v: form.selectedTemplate || "â€”" },
            { l: "Package", v: pkg ? `${pkg.name} â€” ${pkg.price}` : "â€”" },
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

      {/* Progress bar â€” sticky top */}
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

        {/* Step dots â€” scrollable on mobile */}
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
              onClick={() => setSubmitted(true)}
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-stone-950 font-semibold text-[13px] px-7 py-3 rounded-sm transition-all hover:shadow-[0_0_25px_rgba(201,168,76,0.2)]"
            >
              Submit Project Brief <Check className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
```

## src/components/Navbar.tsx

`$ext
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { agency } from "../data/agency";

const navLinks = [
  { label: "Work", href: "#showcase" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isIntake = location.pathname === "/intake";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isIntake
          ? "bg-stone-950/95 backdrop-blur-xl border-b border-stone-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-8 h-8 bg-gold-500 rounded-sm flex items-center justify-center">
              <span className="text-stone-950 font-display font-bold text-sm leading-none">V</span>
            </div>
            <div className="absolute -inset-0.5 bg-gold-500/20 rounded-sm blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-white font-semibold tracking-wide text-[15px]">
            {agency.name}
          </span>
        </Link>

        {/* Desktop nav */}
        {!isIntake && (
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-stone-400 hover:text-white text-[13px] font-medium tracking-wide transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
        )}

        {/* CTA */}
        {!isIntake ? (
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${agency.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-stone-400 hover:text-white text-[13px] font-medium transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              WhatsApp
            </a>
            <Link
              to="/intake"
              className="hidden md:inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-stone-950 text-[13px] font-semibold px-5 py-2.5 rounded-sm transition-all hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
            >
              Start Project
            </Link>
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        ) : (
          <Link
            to="/"
            className="text-stone-400 hover:text-white text-[13px] font-medium transition-colors flex items-center gap-1.5"
          >
            â† Back to Site
          </Link>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && !isIntake && (
        <div className="md:hidden bg-stone-950/98 backdrop-blur-xl border-t border-stone-800/60 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-stone-300 hover:text-white text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/intake"
            className="mt-2 bg-gold-500 hover:bg-gold-400 text-stone-950 text-sm font-semibold px-5 py-3.5 rounded-sm text-center transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Start Project
          </Link>
        </div>
      )}
    </header>
  );
}
```

## src/components/Hero.tsx

`$ext
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

      {/* Vertical rule â€” decorative */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden xl:block ml-[72px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT â€” editorial copy */}
          <div className="lg:col-span-6 xl:col-span-5">

            {/* Location badge */}
            <div className="inline-flex items-center gap-2 border border-stone-800 bg-stone-900/60 text-stone-400 text-[11px] font-medium px-4 py-2 rounded-full mb-10 tracking-widest uppercase">
              <MapPin className="w-3 h-3 text-gold-500" />
              {agency.city}, {agency.country} Â· Creative Studio
            </div>

            {/* Headline â€” mixed serif / sans */}
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

          {/* RIGHT â€” layered preview panels */}
          <div className="lg:col-span-6 xl:col-span-7 hidden lg:block">
            <div className="relative h-[560px]">

              {/* Shadow base */}
              <div className="absolute inset-8 bg-gold-500/5 rounded-2xl blur-3xl" />

              {/* Back panel â€” rotated */}
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

              {/* Floating card â€” bottom left */}
              <div className="absolute bottom-4 left-4 bg-stone-900/90 backdrop-blur-xl border border-stone-700/60 rounded-xl px-5 py-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-500/15 border border-green-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-sm font-bold">âœ“</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Delivered in 2 days</div>
                    <div className="text-stone-500 text-xs mt-0.5">PeakFit Gym Â· Hyderabad</div>
                  </div>
                </div>
              </div>

              {/* Price badge */}
              <div className="absolute top-4 left-10 bg-gold-500 text-stone-950 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                From Rs 6,000
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
```

## src/components/TrustBand.tsx

`$ext
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
```

## src/components/DemoShowcase.tsx

`$ext
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

          {/* Hero 1 â€” tall left */}
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

          {/* Right column â€” 2x2 grid */}
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

          {/* Hero 2 â€” full width bottom */}
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
```

## src/components/Services.tsx

`$ext
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

        {/* Header â€” editorial split */}
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
              From a single landing page to a complete brand web presence â€” we handle design, build and delivery in days, not weeks.
            </p>
            <Link
              to="/intake"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm font-medium group"
            >
              Start your project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Service grid â€” flush borders */}
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
```

## src/components/Packages.tsx

`$ext
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
            Prices shown are demo pricing. Your final quote is confirmed during the intake process â€” no contracts, no lock-ins.
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
          Demo pricing. Final quote confirmed during project intake. Prices in Indian Rupees (INR).
        </p>
      </div>
    </section>
  );
}
```

## src/components/Process.tsx

`$ext
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
          {/* Connector â€” desktop */}
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
```

## src/components/Testimonials.tsx

`$ext
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

        {/* Testimonial cards â€” editorial layout */}
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
```

## src/components/BookingCTA.tsx

`$ext
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
              Start with our intake form â€” tell us about your business and we'll have a preview ready faster than you think. Based in {agency.city}, serving businesses across India.
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
            <p className="text-stone-700 text-[11px] text-center">No commitment Â· Reply within hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## src/components/Contact.tsx

`$ext
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

        {/* Right â€” form */}
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
```

## src/components/Footer.tsx

`$ext
import { Link } from "react-router-dom";
import { MessageCircle, Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import { agency } from "../data/agency";

const footerLinks = [
  { label: "Work", href: "#showcase" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-925 border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* Brand col */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-8 h-8 bg-gold-500 rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="text-stone-950 font-display font-bold text-sm">V</span>
              </div>
              <span className="text-white font-semibold tracking-wide text-[15px]">{agency.name}</span>
            </Link>
            <p className="text-stone-600 text-[13px] leading-[1.8] max-w-xs mb-7">
              Premium design-led websites for businesses across Hyderabad and India. Fast delivery. Transparent pricing.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: MessageCircle, href: `https://wa.me/${agency.whatsapp}`, label: "WhatsApp" },
                { Icon: Mail, href: `mailto:${agency.email}`, label: "Email" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 border border-stone-800 hover:border-gold-500/40 rounded flex items-center justify-center transition-colors group"
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5 text-stone-600 group-hover:text-gold-500 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav col */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-stone-500 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">Navigation</h4>
            <ul className="space-y-3.5">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-stone-600 hover:text-stone-300 text-[13px] transition-colors capitalize">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/intake" className="text-gold-500/70 hover:text-gold-400 text-[13px] transition-colors">
                  Start a Project â†’
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact col */}
          <div className="md:col-span-3">
            <h4 className="text-stone-500 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">Contact</h4>
            <ul className="space-y-3.5">
              <li className="text-stone-600 text-[13px]">{agency.email}</li>
              <li className="text-stone-600 text-[13px]">{agency.phone}</li>
              <li className="text-stone-600 text-[13px]">{agency.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800/40 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-stone-800 text-[11px]">
            Â© {new Date().getFullYear()} {agency.name}, {agency.location}. All rights reserved.
          </p>
          <p className="text-stone-800 text-[11px] font-mono">
            Template ID: agency-creative-studio-01
          </p>
        </div>
      </div>
    </footer>
  );
}
```

## src/index.css

`$ext
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #0A0A09;
    color: #ffffff;
  }

  * {
    box-sizing: border-box;
  }
}

@layer utilities {
  .font-display {
    font-family: 'Playfair Display', Georgia, serif;
  }

  .text-balance {
    text-wrap: balance;
  }

  .line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .noise-overlay {
    position: relative;
  }

  .noise-overlay::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
  }

  .gold-border {
    border: 1px solid rgba(201, 168, 76, 0.2);
  }

  .gold-glow {
    box-shadow: 0 0 60px rgba(201, 168, 76, 0.08);
  }
}

/* Premium scrollbar */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #0A0A09;
}
::-webkit-scrollbar-thumb {
  background: #2a2a28;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background: #C9A84C;
}

/* Selection color */
::selection {
  background-color: rgba(201, 168, 76, 0.25);
  color: #fff;
}

/* Smooth transitions */
a, button {
  transition-property: color, background-color, border-color, opacity, transform, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
```

## src/main.tsx

`$ext
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```
