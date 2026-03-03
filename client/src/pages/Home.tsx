/*
 * 4B Design — Home Page
 * Real content from WSC website crawl
 * Dark hero with metric panel, warm parchment body, field green accents on metrics only
 */
import { Link } from "wouter";
import { Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/hero-campus-YM3mcvUEufhyrArKQifwwG.webp";
const TENNIS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/tennis-courts-KR8dtRjg7iHBtDXSouNG5C.webp";
const GOLF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/golf-range-irxFFwrBT266jij6jYZhLJ.webp";
const PERF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/performance-lab-kApt2Hu4Tcuo3xJsc7JSJ7.webp";
const PICKLE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/pickleball-dome-2iY3YEb9KoQqxrdRdgDgza.webp";

const metrics = [
  { label: "Indoor Tennis Courts", val: "8", unit: "climate controlled" },
  { label: "Covered Driving Bays", val: "23", unit: "with free Toptracer" },
  { label: "Founded", val: "1979", unit: "" },
  { label: "Campus Acres", val: "67", unit: "" },
];

const disciplines = [
  {
    num: "01",
    tag: "Tennis",
    name: "Tier 1 Tennis",
    desc: "World-class tennis academy for junior players bound for the collegiate and professional ranks. Junior tennis classes for ages 3 and up, with pathways for recreational and elite development. Rigorous adult group classes with regular tournaments and UTR matchplay opportunities.",
    img: TENNIS_IMG,
    href: "/tennis",
  },
  {
    num: "02",
    tag: "Golf",
    name: "Driving Range & Swing Lab",
    desc: "Scenic driving range with 23 covered bays, free Toptracer technology, grass tees and a 2.5-acre short-game practice area. Four professional-grade Swing Lab golf simulators capturing 24 data points in real time. Expert private and group training for juniors and adults.",
    img: GOLF_IMG,
    href: "/golf",
  },
  {
    num: "03",
    tag: "Performance",
    name: "Athletic Performance Lab",
    desc: "Elite-level strength and conditioning training for youth and adult athletes. A dedicated APL Training Center plus a spacious main gym with full-service strength and cardio equipment. Small-group S&C classes in monthly packages of 4, 8, or unlimited sessions.",
    img: PERF_IMG,
    href: "/fitness",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-dark-bg flex flex-col justify-end overflow-hidden pt-[88px]">
        <img
          src={HERO_IMG}
          alt="Woodinville Sports Club campus aerial view"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] saturate-[0.4] brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,19,16,0.85)] via-[rgba(22,19,16,0.35)] to-[rgba(22,19,16,0.1)]" />

        <div className="relative z-10 px-6 lg:px-14 pb-0 max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          {/* Left: copy */}
          <div className="pb-16 lg:pb-20">
            <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-7">
              Woodinville, Washington — Pacific Northwest
            </p>
            <h1 className="text-parchment text-[clamp(40px,5.2vw,76px)] font-light leading-[1.06] tracking-[-0.025em] mb-7">
              Level Up Your<br className="hidden lg:block" />
              Game at WSC.
            </h1>
            <p className="text-parchment/[0.45] text-[16px] leading-[1.72] max-w-[440px] mb-12">
              The definitive destination in the Pacific Northwest for athletes and families seeking unparalleled sports training, holistic development, and a thriving community.
            </p>
            <div className="flex flex-wrap gap-5 items-center">
              <Link
                href="/membership"
                className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline bg-volt-bright text-dark-bg px-8 py-3.5 hover:bg-parchment transition-colors duration-200"
              >
                Become a Member
              </Link>
              <Link
                href="/contact"
                className="text-[12px] tracking-[0.12em] uppercase no-underline text-parchment/[0.4] border-b border-parchment/[0.2] pb-[3px]"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>

          {/* Right: metrics */}
          <div className="pb-16 lg:pb-20 border-l-0 lg:border-l border-parchment/[0.1] lg:pl-16">
            {metrics.map((m, i) => (
              <div
                key={i}
                className={`flex justify-between items-baseline py-6 ${
                  i < metrics.length - 1 ? "border-b border-parchment/[0.08]" : ""
                }`}
              >
                <span className="text-parchment/[0.35] text-[12px] tracking-[0.12em] uppercase">
                  {m.label}
                </span>
                <span>
                  <span className="text-volt-bright text-[32px] font-light tracking-[-0.02em] leading-none">
                    {m.val}
                  </span>
                  {m.unit && (
                    <span className="text-parchment/[0.3] text-[12px] tracking-[0.1em] uppercase ml-2">
                      {m.unit}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">The Club</p>
            <h2 className="text-[clamp(28px,3vw,44px)] font-light leading-[1.12] tracking-[-0.02em]">
              Elevate Your Game.<br />Enrich Your Life.
            </h2>
          </div>
          <div>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-9">
              Helping every athlete grow their game, their community, and their potential. For over four decades, Woodinville Sports Club has been the heart of athletic pursuit in the Pacific Northwest, fostering a legacy of excellence that continues to shape the future of sports and fitness in our region.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-wsc-border">
              <div>
                <p className="text-volt text-[10px] tracking-[0.2em] uppercase mb-2">Memberships</p>
                <p className="text-ink-mid text-[14px] leading-[1.72]">
                  Annual and monthly membership options for court booking, class registration, golf, and fitness.
                </p>
              </div>
              <div>
                <p className="text-volt text-[10px] tracking-[0.2em] uppercase mb-2">Training</p>
                <p className="text-ink-mid text-[14px] leading-[1.72]">
                  Private and group training in tennis, fitness, and golf from expert coaches for athletes of all ages and levels.
                </p>
              </div>
              <div>
                <p className="text-volt text-[10px] tracking-[0.2em] uppercase mb-2">Facilities</p>
                <p className="text-ink-mid text-[14px] leading-[1.72]">
                  Eight indoor tennis courts, pickleball courts, comprehensive fitness facilities, and golf driving range on a scenic historic property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCIPLINES ── */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-14 pb-8 border-b border-wsc-border">
            <div>
              <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Campus Programs</p>
              <h2 className="text-[clamp(26px,2.8vw,40px)] font-light tracking-[-0.02em] leading-[1.15]">
                World-class facilities.<br />Expert coaching.
              </h2>
            </div>
            <Link
              href="/about"
              className="text-ink-mid text-[12px] tracking-[0.12em] uppercase no-underline border-b border-wsc-border pb-[3px] mt-6 lg:mt-0"
            >
              About WSC
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
            {disciplines.map((d) => (
              <div key={d.num} className="bg-parchment group overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.tag}
                    className="w-full aspect-[4/3] object-cover saturate-[0.55] brightness-[0.85] transition-transform duration-[650ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-7 pb-9">
                  <p className="text-volt text-[10px] tracking-[0.2em] uppercase mb-2.5">
                    {d.num} — {d.tag}
                  </p>
                  <h3 className="text-[22px] font-light tracking-[-0.01em] mb-3">{d.name}</h3>
                  <p className="text-ink-mid text-[14px] leading-[1.72] mb-5">{d.desc}</p>
                  <Link
                    href={d.href}
                    className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
                  >
                    Explore {d.tag}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pickleball + Summer */}
          <div className="mt-[3px] grid grid-cols-1 md:grid-cols-2 gap-[3px]">
            <div className="bg-parchment group overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={PICKLE_IMG}
                  alt="Pickleball"
                  className="w-full aspect-[4/3] object-cover saturate-[0.55] brightness-[0.85] transition-transform duration-[650ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-7 pb-9">
                <p className="text-volt text-[10px] tracking-[0.2em] uppercase mb-2.5">04 — Pickleball</p>
                <h3 className="text-[22px] font-light tracking-[-0.01em] mb-3">The Dome</h3>
                <p className="text-ink-mid text-[14px] leading-[1.72] mb-5">
                  Play the nation's fastest-growing sport in our iconic dome. Open play 7 days a week, private court rentals, classes for all levels, and four major tournaments per year in partnership with Pickleball is Great (PIG).
                </p>
                <Link
                  href="/pickleball"
                  className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
                >
                  Explore Pickleball
                </Link>
              </div>
            </div>
            <div className="bg-parchment p-7 lg:p-12 flex flex-col justify-center">
              <p className="text-volt text-[10px] tracking-[0.2em] uppercase mb-2.5">05 — Summer Training</p>
              <h3 className="text-[22px] font-light tracking-[-0.01em] mb-3">Summer Training Camp</h3>
              <p className="text-ink-mid text-[14px] leading-[1.72] mb-5">
                Our year-round Tennis and Golf Academy programs continue throughout the summer with the same amazing coaches our kids know and love. Plus Adventure Club, a multi-sport offering where kids learn about athletes from around the world. Ages 3–18, June 29 – August 30.
              </p>
              <Link
                href="/summer"
                className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px] self-start"
              >
                Explore Summer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW: Swing Lab Callout ── */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Now Open</p>
            <h2 className="text-[clamp(26px,2.8vw,40px)] font-light tracking-[-0.02em] leading-[1.15]">
              Swing Lab<br />Golf Simulators.
            </h2>
          </div>
          <div>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-6">
              Our golf simulators provide feedback on every aspect of your swing and ball flight, capturing 24 data points in real time. Train with the same precision technology used by tour professionals, and watch your game transform through instant, actionable feedback. Now open for booking.
            </p>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-8">
              Four professional-grade Uneekor simulators with GSPRO software. Over 2,000 high-quality courses. Compete in stroke, scramble, stableford, match play, best ball, or alt shot.
            </p>
            <Link
              href="/golf"
              className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
            >
              Learn More About Swing Lab
            </Link>
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE DARK ── */}
      <section className="bg-dark-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
            <div>
              <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-6">
                Athletic Performance Lab
              </p>
              <h2 className="text-parchment text-[clamp(28px,3vw,46px)] font-light leading-[1.1] tracking-[-0.02em] mb-6">
                Where champions<br />are built.
              </h2>
              <p className="text-parchment/[0.45] text-[15px] leading-[1.8] max-w-[420px] mb-8">
                WSC's Athletic Performance Lab is a complete performance ecosystem that integrates elite coaching, cutting-edge facilities and individualized strength and conditioning training, enabling youth and adults to achieve their peak performance potential.
              </p>
              <Link
                href="/fitness"
                className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline text-parchment border border-volt-bright px-7 py-3 hover:bg-volt hover:border-volt transition-colors duration-200"
              >
                Learn About the Lab
              </Link>
            </div>
            <img
              src={PERF_IMG}
              alt="Athletic Performance Lab"
              className="w-full aspect-[4/3] object-cover saturate-[0.4] brightness-[0.65]"
            />
          </div>

          {/* Metric strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-parchment/[0.1] pt-12 gap-y-8">
            {[
              { val: "2", label: "Training Facilities" },
              { val: "S&C", label: "Small Group Classes" },
              { val: "Youth", label: "& Adult Programs" },
              { val: "4/8/∞", label: "Monthly Packages" },
            ].map((m, i) => (
              <div key={i} className={`pr-10 ${i < 3 ? "lg:border-r border-parchment/[0.08]" : ""}`}>
                <div className="text-volt-bright text-[40px] font-light tracking-[-0.03em] leading-none mb-2">
                  {m.val}
                </div>
                <div className="text-parchment/[0.3] text-[11px] tracking-[0.14em] uppercase leading-[1.5]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIER 1 GOLF ACADEMY ── */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">New Program</p>
            <h2 className="text-[clamp(26px,2.8vw,40px)] font-light tracking-[-0.02em] leading-[1.15]">
              Introducing<br />Tier 1 Golf Academy.
            </h2>
          </div>
          <div>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-6">
              Classes for youth and adults of all levels, from first swing to elite golfers. Junior Academy serves youth ages 7–18. Led by WGTF Master Certified Coach, Daniel Jarvie. Outdoor instruction on the range; indoor instruction in WSC's new Swing Lab indoor golf simulators.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "After-school academy for ages 7–18",
                "New Foundations class for ages 7–9",
                "Adult clinics for men and women",
                "Includes indoor training in Swing Lab simulators",
                "Full-time youth academy launching in 2026",
              ].map((item, i) => (
                <li key={i} className="text-ink-mid text-[14px] leading-[1.72] flex items-start gap-2.5">
                  <span className="text-volt text-[10px] mt-1.5">—</span> {item}
                </li>
              ))}
            </ul>
            <Link
              href="/golf"
              className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
            >
              Learn More About Golf
            </Link>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP ── */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-end mb-12 pb-10 border-b border-wsc-border">
            <div>
              <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Membership</p>
              <h2 className="text-[clamp(26px,2.6vw,38px)] font-light tracking-[-0.02em] leading-[1.15]">
                Train Without Limits.
              </h2>
            </div>
            <p className="text-ink-mid text-[15px] leading-[1.75]">
              Strength training. Court sports. Golf. Recovery. All under one roof. Choose the membership that fits your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
            {[
              {
                type: "Monthly",
                name: "Family All-Access",
                price: "$100/mo",
                desc: "All household individuals — two adults max plus kids 17 and under. Includes class registration, court and range access, strength and fitness facilities, sauna and locker rooms.",
              },
              {
                type: "Monthly",
                name: "Individual All-Access",
                price: "$40/mo",
                desc: "One 18+ individual. Full campus access including class registration, court and range access, strength and fitness facilities, sauna and locker rooms.",
              },
              {
                type: "Annual",
                name: "Court & Range Access",
                price: "$120/yr",
                desc: "Two 18+ individuals plus household. Enables court booking and class registration. Golf simulator booking with 7-day window, $4 off range buckets, and mini-golf discounts.",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-parchment-mid p-8 lg:p-10 border-t-2 border-transparent hover:border-volt transition-colors duration-300"
              >
                <p className="text-volt text-[10px] tracking-[0.2em] uppercase mb-3.5">{m.type}</p>
                <h3 className="text-[20px] font-light tracking-[-0.01em] mb-1">{m.name}</h3>
                <p className="text-volt-bright text-[18px] font-light mb-4">{m.price}</p>
                <p className="text-ink-mid text-[14px] leading-[1.7] mb-6">{m.desc}</p>
                <Link
                  href="/membership"
                  className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
                >
                  View All Options
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMAIL SIGNUP ── */}
      <section className="bg-dark-mid px-6 lg:px-14 py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-5">Stay Connected</p>
          <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light tracking-[-0.02em] leading-[1.15] mb-4">
            Subscribe to our newsletter.
          </h2>
          <p className="text-parchment/[0.45] text-[15px] leading-[1.75] max-w-[480px] mx-auto mb-8">
            Get updates from WSC, including new offerings, promotions and special events.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-[480px] mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-dark-bg border border-parchment/[0.15] px-5 py-3 text-[14px] text-parchment placeholder:text-parchment/[0.25] focus:border-volt focus:outline-none transition-colors"
            />
            <button className="text-[12px] tracking-[0.14em] uppercase bg-volt-bright text-dark-bg px-8 py-3 hover:bg-parchment transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM FEED ── */}
      <section className="bg-parchment px-6 lg:px-14 py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-3">Follow Us</p>
              <h2 className="text-[clamp(22px,2.4vw,32px)] font-light tracking-[-0.02em] leading-[1.15]">
                @woodinvillesportsclub
              </h2>
            </div>
            <a
              href="https://www.instagram.com/woodinvillesportsclub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.12em] uppercase no-underline text-ink border border-wsc-border px-6 py-2.5 hover:border-volt hover:text-volt transition-colors duration-200"
            >
              <Instagram size={14} />
              Follow on Instagram
            </a>
          </div>
          <InstagramFeed />
        </div>
      </section>

      <Footer />
    </div>
  );
}
