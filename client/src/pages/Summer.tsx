/*
 * 4B Design — Summer Training Camp Page
 * Hero → Overview → Tracks → Schedule → CTA
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
        eyebrow="Summer 2025"
        headline="Summer training camp."
        subtitle="Ages 3–18. Tennis, Golf, and Adventure Club tracks. Full-day and half-day options. June 29 – August 30."
        image={HERO_IMG}
      />

      {/* Overview */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Overview</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15]">
              A summer built<br />around the athlete.
            </h2>
          </div>
          <div>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-8">
              Our year-round Tennis and Golf Academy programs continue throughout the summer with the same amazing coaches our kids know and love. In addition, we're offering Golf Club for beginning golfers and Adventure Club, a multi-sport offering where kids will learn about athletes from around the world.
            </p>
            <p className="text-ink-mid text-[16px] leading-[1.82]">
              APL athletic development is integrated into every track daily. Full-day and half-day options available, with bundling for multi-week enrollment.
            </p>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Camp Tracks</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-14">
            Three tracks. One campus.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
            {[
              {
                name: "Tennis Camp",
                desc: "Continuation of the Tier 1 Core Tennis and Performance NW programs. Skill development, match play, and competitive training.",
                ages: "Ages 3–18",
              },
              {
                name: "Golf Camp",
                desc: "Golf Club for beginners plus Tier 1 Golf Academy for developing players. Range, short game, and simulator sessions.",
                ages: "Ages 7–18",
              },
              {
                name: "Adventure Club",
                desc: "Multi-sport offering where kids learn about athletes from around the world. A broad introduction to athletic movement and competition.",
                ages: "Ages 5–12",
              },
            ].map((t, i) => (
              <div key={i} className="bg-parchment p-8 lg:p-10 border-t-2 border-transparent hover:border-volt transition-colors duration-300">
                <p className="text-volt text-[10px] tracking-[0.2em] uppercase mb-3">{t.ages}</p>
                <h3 className="text-[20px] font-light tracking-[-0.01em] mb-3">{t.name}</h3>
                <p className="text-ink-mid text-[14px] leading-[1.72] mb-5">{t.desc}</p>
                <Link
                  href="/contact"
                  className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
                >
                  Register
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Schedule</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-8">
              June 29 – August 30.
            </h2>
            <div className="space-y-4">
              {[
                { label: "Full Day", detail: "9:00 AM – 3:00 PM" },
                { label: "Half Day AM", detail: "9:00 AM – 12:00 PM" },
                { label: "Half Day PM", detail: "12:00 PM – 3:00 PM" },
                { label: "Extended Care", detail: "Available" },
              ].map((s, i) => (
                <div key={i} className="flex justify-between py-3 border-b border-wsc-border">
                  <span className="text-ink text-[14px]">{s.label}</span>
                  <span className="text-ink-mid text-[14px]">{s.detail}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Pricing</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-8">
              Early bird savings.
            </h2>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-6">
              Multi-week bundling available. Early bird pricing offers 10% off full-week enrollment. Contact us for detailed pricing and registration.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline bg-volt-bright text-dark-bg px-8 py-3.5 hover:bg-parchment transition-colors duration-200"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
