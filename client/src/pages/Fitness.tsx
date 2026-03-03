/*
 * 4B Design — APL Fitness Page
 * Hero → Main Gym → APL Training Center → Group Classes → CTA
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const PERF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/performance-lab-kApt2Hu4Tcuo3xJsc7JSJ7.webp";

export default function Fitness() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Athletic Performance Lab"
        headline="Where champions are built."
        subtitle="Elite-level strength and conditioning training for youth and adult athletes. A dedicated training center plus a spacious main gym."
        image={PERF_IMG}
      />

      {/* Facilities */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Main Gym</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-8">
              Full-service strength<br />and cardio.
            </h2>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-8">
              A spacious main gym with comprehensive free weights, cardio equipment, power lifting platforms, and functional training areas. Open to all members during club hours.
            </p>
          </div>
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">APL Training Center</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-8">
              Dedicated S&C<br />for athletes.
            </h2>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-8">
              A purpose-built Athletic Performance Lab training center for structured, coach-led strength and conditioning. Designed for youth and adult athletes pursuing measurable athletic development.
            </p>
          </div>
        </div>
      </section>

      {/* Dark: Performance metrics */}
      <section className="bg-dark-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
            <div>
              <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-6">Training</p>
              <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light leading-[1.1] tracking-[-0.02em] mb-6">
                Structured for<br />real development.
              </h2>
              <p className="text-parchment/[0.45] text-[15px] leading-[1.8] max-w-[420px]">
                Assessment-driven programming. Progressive overload. Sport-specific conditioning. The APL is built around the athlete — not the equipment.
              </p>
            </div>
            <img
              src={PERF_IMG}
              alt="APL Training"
              className="w-full aspect-[4/3] object-cover saturate-[0.4] brightness-[0.65]"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-parchment/[0.1] pt-12 gap-y-8">
            {[
              { val: "2", label: "Training Facilities" },
              { val: "S&C", label: "Group Classes" },
              { val: "Youth", label: "& Adult Programs" },
              { val: "4/8/∞", label: "Monthly Packages" },
            ].map((m, i) => (
              <div key={i} className={`pr-10 ${i < 3 ? "lg:border-r border-parchment/[0.08]" : ""}`}>
                <div className="text-volt-bright text-[36px] font-light tracking-[-0.03em] leading-none mb-2">
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

      {/* Group Classes */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Group S&C Classes</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-14">
            Monthly packages.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
            {[
              { name: "4 Classes/Month", desc: "One session per week. Ideal for supplementing sport-specific training." },
              { name: "8 Classes/Month", desc: "Two sessions per week. The standard for consistent athletic development." },
              { name: "Unlimited", desc: "Full access to all group S&C classes. For the dedicated athlete." },
            ].map((c, i) => (
              <div key={i} className="bg-parchment p-8 border-t-2 border-transparent hover:border-volt transition-colors duration-300">
                <h3 className="text-[20px] font-light tracking-[-0.01em] mb-3">{c.name}</h3>
                <p className="text-ink-mid text-[14px] leading-[1.72] mb-5">{c.desc}</p>
                <Link
                  href="/contact"
                  className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
                >
                  Enquire
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
