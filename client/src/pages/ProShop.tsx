/*
 * 4B Design — Stringing & Pro Shop Page
 * WSC on-site stringing services, racquet accessories, apparel, and golf gear
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StructuredData, { getBreadcrumbSchema } from "@/components/StructuredData";

const PROSHOP_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/wsc-proshop-interior-PvK9QmkgVpfuVtSvxLkuaa.webp";
const STRINGING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/wsc-proshop-stringing-HwQnsyjWTswCvaL9wXGVmf.webp";
const COURT_RESERVE_URL = "https://app.courtreserve.com/Online/Portal/Index/6689";

const STRING_OPTIONS = [
  {
    category: "Polyester",
    description: "Durable, spin-friendly strings for aggressive baseliners",
    brands: ["Luxilon ALU Power", "Babolat RPM Blast", "Solinco Hyper-G", "Tecnifibre Black Code"],
  },
  {
    category: "Multifilament",
    description: "Soft, arm-friendly strings for comfort and feel",
    brands: ["Wilson NXT", "Tecnifibre X-One Biphase", "Babolat Xcel", "Head Velocity MLT"],
  },
  {
    category: "Natural Gut",
    description: "Premium playability and tension maintenance",
    brands: ["Babolat VS Touch", "Wilson Natural Gut", "Luxilon Natural Gut"],
  },
  {
    category: "Hybrid Setups",
    description: "Custom combinations for the perfect blend of power and control",
    brands: ["Poly mains + gut crosses", "Poly mains + multi crosses", "Custom tension configurations"],
  },
];

const SHOP_CATEGORIES = [
  {
    title: "Tennis Racquets",
    description: "Demo and purchase the latest frames from Wilson, Babolat, Head, Yonex, and more. Our staff can help you find the right racquet for your game.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="10" cy="10" r="7" />
        <line x1="15" y1="15" x2="22" y2="22" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Pickleball Paddles",
    description: "Top paddles from Selkirk, JOOLA, Franklin, and Engage. Try before you buy with our demo program.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="6" y="2" width="12" height="16" rx="6" />
        <line x1="12" y1="18" x2="12" y2="23" strokeLinecap="round" strokeWidth={2} />
      </svg>
    ),
  },
  {
    title: "Golf Accessories",
    description: "Gloves, tees, balls, headcovers, and training aids. Everything you need for the range and the Swing Lab.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="18" r="4" />
        <line x1="12" y1="2" x2="12" y2="14" strokeLinecap="round" strokeWidth={2} />
        <path d="M12 2 L18 6 L12 10" />
      </svg>
    ),
  },
  {
    title: "Apparel & Footwear",
    description: "Performance athletic wear, court shoes, and WSC-branded merchandise. Brands include Nike, adidas, and New Balance.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 20h18M5 20V8l7-5 7 5v12" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Grips & Accessories",
    description: "Overgrips, replacement grips, dampeners, string savers, and bags from all major brands.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2v20M2 12h20" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Training Aids",
    description: "Ball machines, rebounders, resistance bands, agility equipment, and sport-specific training tools.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function ProShop() {
  return (
    <div className="min-h-screen">
      <StructuredData schemas={[getBreadcrumbSchema([
        { name: "Home", url: "https://woodinvillesportsclub.com/" },
        { name: "Pro Shop", url: "https://woodinvillesportsclub.com/pro-shop" },
      ])]} />
      <Navbar />
      <PageHero
        eyebrow="On-Site Pro Shop"
        headline="Stringing & Pro Shop"
        subtitle="Expert racquet stringing, premium equipment, and everything you need for tennis, pickleball, and golf — all under one roof."
        image={PROSHOP_HERO}
      />

      {/* Stringing Services — Hero Section */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Expert Stringing</p>
              <h2 className="text-[clamp(26px,2.8vw,40px)] font-light tracking-[-0.02em] leading-[1.15] mb-6">
                Professional racquet<br />stringing services.
              </h2>
              <p className="text-ink-mid text-[15px] leading-[1.75] mb-6">
                Our certified stringers provide same-day and next-day turnaround on all stringing jobs. Whether you're a competitive tournament player or a weekend warrior, we'll set up your racquet with the right string and tension for your game.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Same-day turnaround available (drop off by noon)",
                  "Electronic stringing machines for precision tension",
                  "Custom hybrid setups and tension recommendations",
                  "Stringing for tennis, pickleball, badminton, and squash",
                  "Competitive pricing with member discounts",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-volt mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-ink-mid text-[14px] leading-[1.6]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-dark-bg text-parchment px-7 py-3.5 text-[13px] tracking-[0.08em] uppercase no-underline hover:bg-dark-bg/90 transition-colors duration-200"
                >
                  Drop Off a Racquet
                </Link>
                <a
                  href="tel:+14254871090"
                  className="inline-flex items-center gap-2 border border-wsc-border text-dark-bg px-7 py-3.5 text-[13px] tracking-[0.08em] uppercase no-underline hover:bg-dark-bg/5 transition-colors duration-200"
                >
                  Call Front Desk
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src={STRINGING_IMG}
                  alt="Professional racquet stringing machine at WSC Pro Shop with string spools and tools"
                  className="w-full h-[420px] lg:h-[520px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-volt text-dark-bg px-6 py-3">
                <p className="text-[11px] tracking-[0.16em] uppercase font-medium">Same-Day Service</p>
                <p className="text-[13px] mt-0.5">Drop off by noon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* String Options */}
      <section className="bg-dark-bg px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-5">String Selection</p>
          <h2 className="text-parchment text-[clamp(26px,2.8vw,40px)] font-light tracking-[-0.02em] leading-[1.15] mb-6">
            Find the right string<br />for your game.
          </h2>
          <p className="text-parchment/65 text-[15px] leading-[1.75] max-w-[640px] mb-14">
            We carry a full selection of premium strings from the top manufacturers. Not sure what to choose? Our stringers will recommend the best setup based on your playing style, racquet, and preferences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STRING_OPTIONS.map((option, i) => (
              <div key={i} className="border border-white/[0.08] p-8 hover:border-volt-bright/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-volt-bright text-[11px] tracking-[0.18em] uppercase font-medium">0{i + 1}</span>
                  <div className="h-px flex-1 bg-white/[0.08]" />
                </div>
                <h3 className="text-parchment text-[20px] font-light tracking-[-0.01em] mb-2">{option.category}</h3>
                <p className="text-parchment/65 text-[14px] leading-[1.6] mb-5">{option.description}</p>
                <div className="flex flex-wrap gap-2">
                  {option.brands.map((brand, j) => (
                    <span
                      key={j}
                      className="text-parchment/55 text-[12px] border border-white/[0.08] px-3 py-1.5"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Shop Categories */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Shop the Pro Shop</p>
          <h2 className="text-[clamp(26px,2.8vw,40px)] font-light tracking-[-0.02em] leading-[1.15] mb-6">
            Everything for your game,<br />all in one place.
          </h2>
          <p className="text-ink-mid text-[15px] leading-[1.75] max-w-[640px] mb-14">
            The WSC Pro Shop carries equipment, apparel, and accessories for tennis, pickleball, and golf. Our knowledgeable staff can help you find exactly what you need.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SHOP_CATEGORIES.map((cat, i) => (
              <div
                key={i}
                className="group border border-wsc-border p-8 hover:border-volt/40 hover:bg-white/40 transition-all duration-300"
              >
                <div className="text-volt mb-5">{cat.icon}</div>
                <h3 className="text-[18px] font-light tracking-[-0.01em] mb-3">{cat.title}</h3>
                <p className="text-ink-mid text-[14px] leading-[1.7]">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Quick Reference */}
      <section className="bg-[#f0ece4] px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Stringing Pricing</p>
              <h2 className="text-[clamp(26px,2.8vw,40px)] font-light tracking-[-0.02em] leading-[1.15] mb-6">
                Transparent pricing,<br />no surprises.
              </h2>
              <p className="text-ink-mid text-[15px] leading-[1.75] mb-6">
                Stringing labor is a flat fee — just choose your string and we'll handle the rest. Members receive discounted rates on all stringing services and pro shop purchases.
              </p>
              <p className="text-ink-mid/70 text-[13px] leading-[1.6] italic">
                Prices shown are for labor only. String cost varies by brand and type. Ask our staff for a complete quote.
              </p>
            </div>

            <div className="border border-wsc-border bg-white/60">
              <div className="grid grid-cols-3 border-b border-wsc-border">
                <div className="p-5 text-[11px] tracking-[0.16em] uppercase text-ink-mid font-medium">Service</div>
                <div className="p-5 text-[11px] tracking-[0.16em] uppercase text-ink-mid font-medium text-center">Member</div>
                <div className="p-5 text-[11px] tracking-[0.16em] uppercase text-ink-mid font-medium text-center">Non-Member</div>
              </div>
              {[
                { service: "Tennis — Standard", member: "$20", nonMember: "$30" },
                { service: "Tennis — Hybrid", member: "$25", nonMember: "$35" },
                { service: "Tennis — Rush (Same Day)", member: "$30", nonMember: "$40" },
                { service: "Pickleball Restring", member: "$15", nonMember: "$25" },
                { service: "Badminton / Squash", member: "$18", nonMember: "$28" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 ${i < 4 ? "border-b border-wsc-border" : ""}`}>
                  <div className="p-5 text-[14px] text-dark-bg">{row.service}</div>
                  <div className="p-5 text-[14px] text-dark-bg font-medium text-center">{row.member}</div>
                  <div className="p-5 text-[14px] text-ink-mid text-center">{row.nonMember}</div>
                </div>
              ))}
              <div className="p-5 bg-volt/10 border-t border-wsc-border">
                <p className="text-[12px] text-ink-mid">
                  <span className="font-medium text-dark-bg">Member Perk:</span> 10% off all pro shop merchandise and priority stringing queue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Location CTA */}
      <section className="bg-dark-bg px-6 lg:px-14 py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-5">Visit Us</p>
          <h2 className="text-parchment text-[clamp(26px,2.8vw,40px)] font-light tracking-[-0.02em] leading-[1.15] mb-6">
            Pro Shop Hours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[720px] mx-auto mb-10">
            <div className="border border-white/[0.08] p-6">
              <p className="text-parchment/55 text-[11px] tracking-[0.16em] uppercase mb-2">Mon — Fri</p>
              <p className="text-parchment text-[18px] font-light">7 AM — 9 PM</p>
            </div>
            <div className="border border-white/[0.08] p-6">
              <p className="text-parchment/55 text-[11px] tracking-[0.16em] uppercase mb-2">Saturday</p>
              <p className="text-parchment text-[18px] font-light">8 AM — 6 PM</p>
            </div>
            <div className="border border-white/[0.08] p-6">
              <p className="text-parchment/55 text-[11px] tracking-[0.16em] uppercase mb-2">Sunday</p>
              <p className="text-parchment text-[18px] font-light">8 AM — 5 PM</p>
            </div>
          </div>
          <p className="text-parchment/60 text-[14px] leading-[1.7] max-w-[540px] mx-auto mb-10">
            Located inside the main clubhouse at Woodinville Sports Club. Drop off your racquet at the front desk and we'll have it ready for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-volt text-dark-bg px-8 py-3.5 text-[13px] tracking-[0.08em] uppercase no-underline font-medium hover:bg-volt-bright transition-colors duration-200"
            >
              Contact Pro Shop
            </Link>
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 border border-parchment/30 text-parchment px-8 py-3.5 text-[13px] tracking-[0.08em] uppercase no-underline hover:border-parchment/50 transition-colors duration-200"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
