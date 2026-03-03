/*
 * 4B Design — Summer Training Page
 * Real content from WSC website crawl
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/hero-campus-YM3mcvUEufhyrArKQifwwG.webp";

export default function Summer() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Summer Training @ WSC"
        headline="Join Us for an Epic Summer."
        subtitle="Train where high-performance athletes train. WSC Summer Training serves ages 3–18 on our expansive 67-acre campus, June 29 – August 30."
        image={HERO_IMG}
      />

      {/* Registration Banner */}
      <section className="bg-dark-mid px-6 lg:px-14 py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-volt-bright text-[13px] tracking-[0.18em] uppercase mb-4">Registration is Open</p>
          <h2 className="text-parchment text-[clamp(24px,2.6vw,36px)] font-light tracking-[-0.02em] leading-[1.15] mb-6">
            Tennis. Golf. Adventure Club.
          </h2>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-parchment/[0.45] text-[14px] leading-[1.72] mb-8">
            <span>Ages 3–18</span>
            <span>Full and half-day options</span>
            <span>Bundle two half-day camps</span>
          </div>
          <p className="text-parchment/[0.35] text-[13px] max-w-[520px] mx-auto mb-8">
            The same programs and coaches you already know and love. Tennis and golf for all abilities — from first-time players to academy athletes. Daily athletic development training for well-rounded athletes. Full-week registration is open now; single-day registration opens 1 month prior to each camp date.
          </p>
          <Link
            href="/contact"
            className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline bg-volt-bright text-dark-bg px-8 py-3.5 hover:bg-parchment transition-colors duration-200"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Elite Coaching */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Elite Coaching & Facilities</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15]">
              The same coaches.<br />Year-round excellence.
            </h2>
          </div>
          <div>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-6">
              The same elite coaching staff that trains our athletes year-round. Plus, state-of-the-art facilities, including professional-grade courts, new indoor golf simulators, and Athletic Performance Lab.
            </p>
            <ul className="space-y-3">
              {[
                "Former world-ranked, D1, and professional tennis coaches",
                "NEW Tier 1 Golf Academy, led by WGTF Master-certified Director of Golf",
                "Athletic Performance Lab training led by NASM-Certified Director of Performance who has trained pro, Olympic, and D1 athletes",
              ].map((item, i) => (
                <li key={i} className="text-ink-mid text-[14px] leading-[1.72] flex items-start gap-2.5">
                  <span className="text-volt text-[10px] mt-1.5">—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Three Programs */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Programs</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-14">
            Three tracks. One campus.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
            {[
              {
                num: "01",
                name: "Tennis",
                tag: "Ages 3–18",
                desc: "Tier 1 Academy and Core (formerly RPM) tracks for ages 3–18. Tier 1 Academy requires coach approval (Core does not). Includes daily APL athletic development training.",
              },
              {
                num: "02",
                name: "Golf",
                tag: "Ages 7–18",
                desc: "Tier 1 Golf Academy training for beginners to advanced golfers ages 7–18. Access to driving range, practice greens, new indoor golf simulators, and putt-putt course. Includes daily APL athletic development training.",
              },
              {
                num: "03",
                name: "Adventure Club",
                tag: "Ages 5–12",
                desc: "Summer camp for active and creative kids, ages 5–12. Access to golf range, courts, and grass fields. Introduction to multiple sports and activities and professional athletes from around the world.",
              },
            ].map((p) => (
              <div key={p.num} className="bg-parchment p-8 border-t-2 border-transparent hover:border-volt transition-colors duration-300">
                <p className="text-volt text-[10px] tracking-[0.2em] uppercase mb-3">{p.num} — {p.tag}</p>
                <h3 className="text-[22px] font-light tracking-[-0.01em] mb-3">{p.name}</h3>
                <p className="text-ink-mid text-[14px] leading-[1.72] mb-5">{p.desc}</p>
                <Link
                  href="/contact"
                  className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Options */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Flexible Options</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15]">
              Half-day or full-day.<br />Bundle for multi-sport.
            </h2>
          </div>
          <div>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-6">
              Pair a half-day of Tennis or Golf with Adventure Club, or split your day between Tennis and Golf for a full-day of training and fun. Pricing discounts on published prices for half-day sessions when bundled.
            </p>
            <p className="text-ink-mid text-[16px] leading-[1.82]">
              Single-day drop-ins available — registration opens 4 weeks prior to camp date.
            </p>
          </div>
        </div>
      </section>

      {/* APL Athletic Development */}
      <section className="bg-dark-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-6">APL Athletic Development</p>
            <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light leading-[1.1] tracking-[-0.02em] mb-6">
              Building complete<br />athletes.
            </h2>
          </div>
          <div>
            <p className="text-parchment/[0.45] text-[15px] leading-[1.8] mb-6">
              Athletic development focuses on helping athletes move better, get stronger, faster, and more coordinated so they can perform with confidence and stay healthy. Our goal is to build well-rounded athletes who can train, compete, and succeed across any sport.
            </p>
            <p className="text-parchment/[0.45] text-[15px] leading-[1.8]">
              Athletes work on key areas such as basic movement skills, strength, speed, balance, and coordination through age-appropriate training. Sessions emphasize proper technique and body control to reduce injury risk while supporting long-term physical development.
            </p>
          </div>
        </div>
      </section>

      {/* Early Bird CTA */}
      <section className="bg-parchment px-6 lg:px-14 py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Early Bird Special</p>
          <h2 className="text-[clamp(26px,3vw,42px)] font-light tracking-[-0.02em] leading-[1.15] mb-4">
            Save 10% on full-week registration.
          </h2>
          <p className="text-ink-mid text-[15px] leading-[1.75] max-w-[480px] mx-auto mb-8">
            Plus a free Summer Training t-shirt. Tier 1 Tennis Academy excluded from Early Bird pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline bg-volt-bright text-dark-bg px-8 py-3.5 hover:bg-parchment-dark transition-colors duration-200"
            >
              Register Now
            </Link>
            <Link
              href="/contact"
              className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline text-ink border border-wsc-border px-8 py-3.5 hover:border-volt transition-colors duration-200"
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
