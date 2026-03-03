/*
 * 4B Design — Membership Page
 * Hero → Tiers → What's Included → CTA
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/hero-campus-YM3mcvUEufhyrArKQifwwG.webp";

const tiers = [
  {
    type: "Monthly",
    name: "Family All-Access",
    price: "$100",
    period: "/mo",
    desc: "Unlimited access for the whole family. Court booking, class registration, golf, and fitness.",
    features: ["All courts & range", "Class registration", "Gym access", "Family programming"],
  },
  {
    type: "Monthly",
    name: "Couple All-Access",
    price: "$70",
    period: "/mo",
    desc: "Full campus access for two members. All courts, range, gym, and class registration.",
    features: ["All courts & range", "Class registration", "Gym access", "Two members"],
  },
  {
    type: "Monthly",
    name: "Individual All-Access",
    price: "$40",
    period: "/mo",
    desc: "Full campus access for a single member. All courts, range, gym, and class registration.",
    features: ["All courts & range", "Class registration", "Gym access", "Single member"],
  },
  {
    type: "Annual",
    name: "Court & Range Access",
    price: "$120",
    period: "/yr",
    desc: "Annual access for court booking and driving range use.",
    features: ["Court booking", "Range access", "Toptracer included"],
  },
  {
    type: "Annual",
    name: "Class Registration",
    price: "$50",
    period: "/yr",
    desc: "Annual registration fee for class enrollment across all disciplines.",
    features: ["Class enrollment", "All disciplines", "Session scheduling"],
  },
  {
    type: "Trial",
    name: "Golf Simulator Trial",
    price: "$20",
    period: "one-time",
    desc: "Try the Swing Lab golf simulators. Limited-time offer through 3/31/26.",
    features: ["Swing Lab access", "24 data points", "2,000+ courses"],
  },
];

export default function Membership() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Membership"
        headline="Find your place on the campus."
        subtitle="Annual and monthly membership options for court booking, class registration, golf, and fitness."
        image={HERO_IMG}
      />

      {/* Tiers */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-14 pb-8 border-b border-wsc-border">
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Options</p>
            <h2 className="text-[clamp(26px,2.8vw,40px)] font-light tracking-[-0.02em] leading-[1.15]">
              Membership tiers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3px]">
            {tiers.map((t, i) => (
              <div
                key={i}
                className="bg-parchment-mid p-8 lg:p-10 border-t-2 border-transparent hover:border-volt transition-colors duration-300"
              >
                <p className="text-volt text-[10px] tracking-[0.2em] uppercase mb-3">{t.type}</p>
                <h3 className="text-[20px] font-light tracking-[-0.01em] mb-1">{t.name}</h3>
                <div className="mb-4">
                  <span className="text-volt-bright text-[28px] font-light">{t.price}</span>
                  <span className="text-ink-light text-[13px] ml-1">{t.period}</span>
                </div>
                <p className="text-ink-mid text-[14px] leading-[1.7] mb-5">{t.desc}</p>
                <ul className="space-y-2 mb-6">
                  {t.features.map((f, fi) => (
                    <li key={fi} className="text-ink-mid text-[13px] flex items-center gap-2">
                      <span className="text-volt text-[10px]">—</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
                >
                  Enquire
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-parchment-mid border-l-2 border-volt">
            <p className="text-ink-mid text-[14px] leading-[1.7]">
              <span className="text-ink font-normal">Note:</span> $50 initiation fee applies to all monthly memberships. All memberships include access to Court Reserve for online booking.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-mid px-6 lg:px-14 py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-5">Get Started</p>
          <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light tracking-[-0.02em] leading-[1.15] mb-4">
            Ready to join the campus?
          </h2>
          <p className="text-parchment/[0.45] text-[15px] leading-[1.75] max-w-[480px] mx-auto mb-8">
            Contact us to learn more about membership options or to schedule a tour of our facilities.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline bg-volt-bright text-dark-bg px-8 py-3.5 hover:bg-parchment transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
