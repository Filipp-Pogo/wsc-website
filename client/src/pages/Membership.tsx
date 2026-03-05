/*
 * 4B Design — Membership Page
 * Real content from WSC website crawl
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StructuredData, { getBreadcrumbSchema } from "@/components/StructuredData";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/about-campus_70f7e2b0.jpg";

const tiers = [
  {
    type: "Monthly",
    name: "Family All-Access Pass",
    price: "$100",
    period: "/mo + tax",
    who: "All household individuals (two adults max + kids 17 and under)",
    features: [
      "Includes Class Registration Pass privileges",
      "Includes Court & Range Access Pass privileges",
      "Access to Strength & Fitness Facilities, Sauna and Locker Rooms",
      "5% golf sims discount + 10-day booking window",
      "Initiation plus monthly membership fee required",
      "Membership renews automatically each month",
    ],
  },
  {
    type: "Monthly",
    name: "Couple All-Access Pass",
    price: "$70",
    period: "/mo + tax",
    who: "Two household individuals",
    features: [
      "Includes Class Registration Pass privileges",
      "Includes Court & Range Access Pass privileges",
      "Access to Strength & Fitness, Sauna and Locker Rooms",
      "5% golf sims discount + 10-day booking window",
      "Initiation plus monthly membership fee required",
      "Membership renews automatically each month",
    ],
  },
  {
    type: "Monthly",
    name: "Individual All-Access Pass",
    price: "$40",
    period: "/mo + tax",
    who: "One 18+ individual",
    features: [
      "Includes Class Registration Pass privileges",
      "Includes Court & Range Access Pass privileges",
      "Access to Strength & Fitness Facilities, Sauna and Locker Rooms",
      "5% golf sims discount + 10-day booking window",
      "Initiation plus monthly membership fee required",
      "Membership renews automatically each month",
    ],
  },
  {
    type: "Annual",
    name: "Court & Range Access Pass",
    price: "$120",
    period: "/yr + tax",
    who: "Two 18+ individuals + household",
    features: [
      "Enables court booking & class registration",
      "Class & court fees apply",
      "No access to fitness facilities",
      "7-day advance golf simulator booking window",
      "$4 off golf range buckets",
      "Discounts on mini-golf & all beverages",
      "Access to golf happy hour",
      "Membership auto-renews annually",
    ],
  },
  {
    type: "Annual",
    name: "Class Registration Pass",
    price: "$50",
    period: "/yr + tax",
    who: "Two 18+ individuals + household",
    features: [
      "Enables class registration (Tennis, Pickleball, Events, Camps, Fitness Training)",
      "Class fees apply",
      "Does not allow court booking",
      "No access to fitness facilities, sauna, locker rooms, golf sims, or range discounts",
      "Membership auto-renews annually",
    ],
  },
  {
    type: "Trial",
    name: "Trial Golf Simulators",
    price: "$20",
    period: "+ tax (one-time)",
    who: "One 16+ individual",
    features: [
      "For non-members or Class Access members",
      "Test out golf simulators before committing",
      "Book simulator sessions at regular rates with 7-day window",
      "Bring up to 3 guests for free through March 31",
      "Valid through March 31, 2026",
      "Trial members may upgrade at any time",
    ],
  },
];

export default function Membership() {
  return (
    <div className="min-h-screen">
      <StructuredData schemas={[getBreadcrumbSchema([
        { name: "Home", url: "https://woodinvillesportsclub.com/" },
        { name: "Membership", url: "https://woodinvillesportsclub.com/membership" },
      ])]} />
      <Navbar />
      <PageHero
        eyebrow="Membership"
        headline="Train Without Limits."
        subtitle="Strength training. Court sports. Golf. Recovery. All under one roof. Choose the membership that fits your goals."
        image={HERO_IMG}
      />

      {/* Tiers */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-14 pb-8 border-b border-wsc-border">
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Membership Options</p>
            <h2 className="text-[clamp(26px,2.8vw,40px)] font-light tracking-[-0.02em] leading-[1.15]">
              Six tiers. One campus.
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
                <div className="mb-2">
                  <span className="text-volt-bright text-[28px] font-light">{t.price}</span>
                  <span className="text-ink-light text-[13px] ml-1">{t.period}</span>
                </div>
                <p className="text-ink-mid text-[13px] mb-5">{t.who}</p>
                <ul className="space-y-2 mb-6">
                  {t.features.map((f, fi) => (
                    <li key={fi} className="text-ink-mid text-[13px] leading-[1.6] flex items-start gap-2">
                      <span className="text-volt text-[10px] mt-1">—</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://app.courtreserve.com/Online/Portal/Index/6689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
                >
                  Sign Up
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-parchment-mid border-l-2 border-volt">
            <p className="text-ink-mid text-[14px] leading-[1.7] mb-2">
              <span className="text-ink font-normal">Annual Passes:</span> Auto-renew each year.
            </p>
            <p className="text-ink-mid text-[14px] leading-[1.7] mb-2">
              <span className="text-ink font-normal">Monthly Memberships:</span> Require a one-time $50 + tax initiation fee.
            </p>
            <p className="text-ink-light text-[13px]">WSC TAX ID# is 82-3755991</p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[3px]">
          <div className="bg-parchment p-8">
            <h3 className="text-[18px] font-light tracking-[-0.01em] mb-3">Membership Agreement</h3>
            <p className="text-ink-mid text-[14px] leading-[1.72] mb-4">
              Review the full membership agreement including terms, conditions, and cancellation policies.
            </p>
            <a
              href="https://app.courtreserve.com/Online/Portal/Index/6689"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
            >
              View Agreement
            </a>
          </div>
          <div className="bg-parchment p-8">
            <h3 className="text-[18px] font-light tracking-[-0.01em] mb-3">Membership Policies</h3>
            <p className="text-ink-mid text-[14px] leading-[1.72] mb-4">
              Review our membership policies including guest policies, code of conduct, and facility rules.
            </p>
            <a
              href="https://app.courtreserve.com/Online/Portal/Index/6689"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
            >
              View Policies
            </a>
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
          <p className="text-parchment/65 text-[15px] leading-[1.75] max-w-[480px] mx-auto mb-8">
            Contact us to learn more about membership options or to schedule a tour of our facilities.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://app.courtreserve.com/Online/Portal/Index/6689"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline bg-volt-bright text-dark-bg px-8 py-3.5 hover:bg-parchment transition-colors duration-200"
            >
              Sign Up Now
            </a>
            <Link
              href="/about"
              className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline text-parchment border border-volt-bright px-8 py-3.5 hover:bg-volt hover:border-volt transition-colors duration-200"
            >
              About WSC
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
