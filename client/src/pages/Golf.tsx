/*
 * 4B Design — Golf Page
 * Hero → Range → Swing Lab → Academy → Pricing → CTA
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const GOLF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/golf-range-irxFFwrBT266jij6jYZhLJ.webp";

export default function Golf() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Golf Program"
        headline="Woodinville's best golf driving range and practice area."
        subtitle="23 covered driving bays with Toptracer, grass tees, a 2.5-acre short game area, and four state-of-the-art Swing Lab golf simulators."
        image={GOLF_IMG}
      />

      {/* Range */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Driving Range</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-8">
              23 covered bays.<br />Free Toptracer.
            </h2>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-8">
              Scenic driving range with covered bays, grass tees, and a comprehensive 2.5-acre short-game practice area. Free Toptracer technology at every bay. Expert private and group training for juniors and adults.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { val: "23", label: "Covered Bays" },
                { val: "2.5", label: "Acre Short Game" },
                { val: "Free", label: "Toptracer" },
              ].map((m, i) => (
                <div key={i} className="py-4 border-t border-wsc-border">
                  <div className="text-volt-bright text-[28px] font-light tracking-[-0.02em] leading-none mb-1">
                    {m.val}
                  </div>
                  <div className="text-ink-light text-[11px] tracking-[0.14em] uppercase">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <img
            src={GOLF_IMG}
            alt="Golf driving range"
            className="w-full aspect-[4/3] object-cover saturate-[0.55] brightness-[0.85]"
          />
        </div>
      </section>

      {/* Swing Lab */}
      <section className="bg-dark-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-6">Swing Lab</p>
            <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light leading-[1.1] tracking-[-0.02em] mb-6">
              Four state-of-the-art<br />golf simulators.
            </h2>
            <p className="text-parchment/[0.45] text-[15px] leading-[1.8] max-w-[420px] mb-8">
              Our golf simulators provide feedback on every aspect of your swing and ball flight, capturing 24 data points in real time. Train with the same precision technology used by tour professionals.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline text-parchment border border-volt-bright px-7 py-3 hover:bg-volt hover:border-volt transition-colors duration-200"
            >
              Book a Simulator
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { val: "4", label: "Simulators" },
              { val: "24", label: "Data Points" },
              { val: "2,000+", label: "Courses" },
              { val: "Tour", label: "Level Tech" },
            ].map((m, i) => (
              <div key={i} className="py-6 border-t border-parchment/[0.1]">
                <div className="text-volt-bright text-[32px] font-light tracking-[-0.02em] leading-none mb-2">
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

      {/* Academy */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Tier 1 Golf Academy</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-14">
            Classes for every level.
          </h2>

          <div className="space-y-0">
            {[
              { tag: "Youth", name: "Junior Academy", desc: "Ages 7-18. From first swing to elite golfers. Outdoor instruction on the range; indoor instruction in the Swing Lab." },
              { tag: "Adults", name: "Adult Clinics", desc: "Group and private instruction for adults of all levels. Range and simulator-based training." },
              { tag: "Coach", name: "Led by Daniel Jarvie", desc: "WGTF Master Certified Coach. Expert instruction combining range work with simulator technology." },
            ].map((p, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-[200px_1fr_auto] gap-4 lg:gap-12 items-baseline py-8 border-b border-wsc-border"
              >
                <p className="text-volt text-[10px] tracking-[0.2em] uppercase">{p.tag}</p>
                <div>
                  <h3 className="text-[20px] font-light tracking-[-0.01em] mb-2">{p.name}</h3>
                  <p className="text-ink-mid text-[14px] leading-[1.72]">{p.desc}</p>
                </div>
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

      {/* Pricing */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Range Pricing</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-14">
            Simple, straightforward.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
            {[
              { name: "Small Bucket", price: "$10" },
              { name: "Medium Bucket", price: "$12" },
              { name: "Large Bucket", price: "$14" },
            ].map((p, i) => (
              <div key={i} className="bg-parchment-mid p-8 border-t-2 border-transparent hover:border-volt transition-colors duration-300">
                <h3 className="text-[20px] font-light tracking-[-0.01em] mb-1">{p.name}</h3>
                <p className="text-volt-bright text-[24px] font-light mb-4">{p.price}</p>
                <p className="text-ink-mid text-[13px] leading-[1.7]">Punch card discounts available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
