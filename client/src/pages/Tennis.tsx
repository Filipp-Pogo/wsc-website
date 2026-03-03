/*
 * 4B Design — Tennis Page
 * Hero → Programs → Facilities → Pricing → CTA
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const TENNIS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/tennis-courts-KR8dtRjg7iHBtDXSouNG5C.webp";

const programs = [
  {
    name: "Tier 1 Performance NW",
    desc: "World-class tennis academy for junior players bound for the collegiate and professional ranks.",
    tag: "Elite",
  },
  {
    name: "Tier 1 Core Tennis",
    desc: "Junior tennis classes for ages 3 and up, with pathways for recreational and elite development.",
    tag: "Juniors",
  },
  {
    name: "Adult Tennis",
    desc: "Rigorous group classes for players of all levels. Regular tournaments and UTR matchplay opportunities.",
    tag: "Adults",
  },
];

export default function Tennis() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Tennis Program"
        headline="Woodinville's premier indoor tennis facility."
        subtitle="Eight climate-controlled indoor courts. Professional coaching for juniors and adults. Competitive programs and development pathways."
        image={TENNIS_IMG}
      />

      {/* Programs */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Programs</p>
          <h2 className="text-[clamp(26px,2.8vw,40px)] font-light tracking-[-0.02em] leading-[1.15] mb-14">
            Training pathways<br />for every level.
          </h2>

          <div className="space-y-0">
            {programs.map((p, i) => (
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

      {/* Facilities */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Facilities</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-8">
              Eight indoor courts.<br />Climate controlled.
            </h2>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-8">
              Our indoor tennis facility provides year-round play regardless of Pacific Northwest weather. Professional-grade surfaces, consistent lighting, and a controlled environment for optimal training conditions.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "8", label: "Indoor Courts" },
                { val: "3+", label: "Age Groups" },
                { val: "UTR", label: "Matchplay" },
                { val: "Year", label: "Round Play" },
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
            src={TENNIS_IMG}
            alt="Indoor tennis courts"
            className="w-full aspect-[4/3] object-cover saturate-[0.55] brightness-[0.85]"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-mid px-6 lg:px-14 py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-5">Get Started</p>
          <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light tracking-[-0.02em] leading-[1.15] mb-8">
            Ready to step on court?
          </h2>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/membership"
              className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline bg-volt-bright text-dark-bg px-8 py-3.5 hover:bg-parchment transition-colors duration-200"
            >
              View Membership
            </Link>
            <Link
              href="/contact"
              className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline text-parchment border border-volt-bright px-8 py-3.5 hover:bg-volt hover:border-volt transition-colors duration-200"
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
