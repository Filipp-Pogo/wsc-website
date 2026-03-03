/*
 * 4B Design — Home Page
 * Dark hero with metric panel, warm parchment body, field green accents on metrics only
 * Section flow: Hero → About → Disciplines → Performance → Membership → Footer
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/hero-campus-YM3mcvUEufhyrArKQifwwG.webp";
const TENNIS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/tennis-courts-KR8dtRjg7iHBtDXSouNG5C.webp";
const GOLF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/golf-range-irxFFwrBT266jij6jYZhLJ.webp";
const PERF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/performance-lab-kApt2Hu4Tcuo3xJsc7JSJ7.webp";
const PICKLE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/pickleball-dome-2iY3YEb9KoQqxrdRdgDgza.webp";

const metrics = [
  { label: "Indoor Tennis Courts", val: "8", unit: "" },
  { label: "Driving Range Bays", val: "23", unit: "covered" },
  { label: "Founded", val: "1979", unit: "" },
  { label: "Campus Disciplines", val: "5", unit: "" },
];

const disciplines = [
  {
    num: "01",
    tag: "Tennis",
    name: "The Courts",
    desc: "Eight climate-controlled indoor courts. Professional coaching, competitive programs, and junior development pathways from age 3 through collegiate prep.",
    img: TENNIS_IMG,
    href: "/tennis",
  },
  {
    num: "02",
    tag: "Golf",
    name: "The Range",
    desc: "23 covered driving bays with free Toptracer technology, grass tees, 2.5-acre short game area, and four state-of-the-art Swing Lab golf simulators.",
    img: GOLF_IMG,
    href: "/golf",
  },
  {
    num: "03",
    tag: "Performance",
    name: "The Lab",
    desc: "Elite-level strength and conditioning for youth and adult athletes. A dedicated Athletic Performance Lab training center plus a full-service main gym.",
    img: PERF_IMG,
    href: "/fitness",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-dark-bg flex flex-col justify-end overflow-hidden pt-[61px]">
        <img
          src={HERO_IMG}
          alt="Woodinville Sports Club campus"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] saturate-[0.3] brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,19,16,0.95)] via-[rgba(22,19,16,0.6)] to-[rgba(22,19,16,0.2)]" />

        <div className="relative z-10 px-6 lg:px-14 pb-0 max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          {/* Left: copy */}
          <div className="pb-16 lg:pb-20">
            <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-7">
              Woodinville, Washington — Pacific Northwest
            </p>
            <h1 className="text-parchment text-[clamp(40px,5.2vw,76px)] font-light leading-[1.06] tracking-[-0.025em] mb-7">
              The campus<br className="hidden lg:block" />
              where serious<br className="hidden lg:block" />
              athletes train.
            </h1>
            <p className="text-parchment/[0.45] text-[16px] leading-[1.72] max-w-[440px] mb-12">
              Tennis. Golf. Athletic Performance. A hybrid campus built for athletes who train with intention — and a club with the depth to back it up.
            </p>
            <div className="flex flex-wrap gap-5 items-center">
              <Link
                href="/membership"
                className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline bg-volt-bright text-dark-bg px-8 py-3.5 hover:bg-parchment transition-colors duration-200"
              >
                Explore the Campus
              </Link>
              <Link
                href="/contact"
                className="text-[12px] tracking-[0.12em] uppercase no-underline text-parchment/[0.4] border-b border-parchment/[0.2] pb-[3px]"
              >
                Membership Enquiry
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
              Elevating athletic<br />excellence since 1979.
            </h2>
          </div>
          <div>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-9">
              Woodinville Sports Club is not a new build. It is a campus that has been shaped by over four decades of use, competition, and community — and that history is part of what makes it work. Five disciplines, one campus, and a culture of serious, sustained athletic development that has been built over time.
            </p>
            <div className="border-l-2 border-volt pl-6 py-4">
              <p className="text-ink-mid text-[15px] leading-[1.7] italic">
                "Where passion meets performance, and community thrives through sport."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCIPLINES ── */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-14 pb-8 border-b border-wsc-border">
            <div>
              <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Campus Disciplines</p>
              <h2 className="text-[clamp(26px,2.8vw,40px)] font-light tracking-[-0.02em] leading-[1.15]">
                Three disciplines.<br />One campus.
              </h2>
            </div>
            <Link
              href="/about"
              className="text-ink-mid text-[12px] tracking-[0.12em] uppercase no-underline border-b border-wsc-border pb-[3px] mt-6 lg:mt-0"
            >
              All Programs
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

          {/* Additional: Pickleball callout */}
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
                  Indoor courts in our historic dome. Open play sessions 7 days a week, lessons, and individual court bookings.
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
              <p className="text-volt text-[10px] tracking-[0.2em] uppercase mb-2.5">05 — Summer</p>
              <h3 className="text-[22px] font-light tracking-[-0.01em] mb-3">Summer Training Camp</h3>
              <p className="text-ink-mid text-[14px] leading-[1.72] mb-5">
                Ages 3–18. Tennis, Golf, and Adventure Club tracks. Full-day and half-day options with APL athletic development integrated daily. June 29 – August 30.
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

      {/* ── PERFORMANCE DARK ── */}
      <section className="bg-dark-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
            <div>
              <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-6">
                Athletic Performance Lab
              </p>
              <h2 className="text-parchment text-[clamp(28px,3vw,46px)] font-light leading-[1.1] tracking-[-0.02em] mb-6">
                Built around<br />the athlete.
              </h2>
              <p className="text-parchment/[0.45] text-[15px] leading-[1.8] max-w-[420px] mb-8">
                The Performance Lab is a structured, coach-led environment for youth and adult athletes — designed to produce measurable development through assessment, progressive programming, and sport-specific training.
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
              { val: "S&C", label: "Group Classes Available" },
              { val: "Youth", label: "& Adult Programs" },
              { val: "1979", label: "Serving Athletes Since" },
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

      {/* ── MEMBERSHIP ── */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-end mb-12 pb-10 border-b border-wsc-border">
            <div>
              <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Membership</p>
              <h2 className="text-[clamp(26px,2.6vw,38px)] font-light tracking-[-0.02em] leading-[1.15]">
                Find your place<br />on the campus.
              </h2>
            </div>
            <p className="text-ink-mid text-[15px] leading-[1.75]">
              Membership options are structured to support your goals — whether a single discipline or the full campus experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
            {[
              {
                type: "All-Access",
                name: "Family Membership",
                price: "$100/mo",
                desc: "Unlimited access for the whole family. Court booking, class registration, golf, and fitness.",
              },
              {
                type: "All-Access",
                name: "Individual Membership",
                price: "$40/mo",
                desc: "Full campus access for a single member. All courts, range, gym, and class registration.",
              },
              {
                type: "Annual",
                name: "Court & Range Access",
                price: "$120/yr",
                desc: "Annual access for court booking and driving range use. The essentials for regular players.",
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
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
