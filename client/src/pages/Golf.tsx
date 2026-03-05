/*
 * 4B Design — Golf Page
 * Real content from WSC website crawl
 * Tier 1 Sports by Caliber branding
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Tier1Banner from "@/components/Tier1Banner";
import FullWidthImage from "@/components/FullWidthImage";
import StructuredData, { getBreadcrumbSchema } from "@/components/StructuredData";

const GOLF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/golf-range_9238eade.jpg";
const GOLF_SUNSET = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/wsc-gallery-golf-sunset-4rf3PMHnvUxKJFv49qxgeS.webp";
const SIM_BAY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/wsc-simulator-bay-b27xhwZZfcgtCUYYzrMUzN.webp";
const SIM_SCREEN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/wsc-simulator-screen-a8ZgKeFQVWNrVWHTfStJQE.webp";
const SIM_LOUNGE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/wsc-simulator-lounge-9SbZwcbCL97SqWKqef278g.webp";

export default function Golf() {
  return (
    <div className="min-h-screen">
      <StructuredData schemas={[getBreadcrumbSchema([
        { name: "Home", url: "https://woodinvillesportsclub.com/" },
        { name: "Golf", url: "https://woodinvillesportsclub.com/golf" },
      ])]} />
      <Navbar />
      <PageHero
        eyebrow="Tier 1 Golf by Caliber"
        headline="Woodinville's Best Golf Driving Range and Practice Area."
        subtitle="Practice at our driving range and state-of-the-art facility featuring 23 covered driving bays, grass tees, an expansive 2.5-acre short game training area, new indoor golf simulators, and an 18-hole mini-golf course."
        image={GOLF_IMG}
      />

      {/* Driving Range */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Driving Range</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-8">
              23 covered bays.<br />Free Toptracer.
            </h2>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-8">
              Open to the public — no club membership is required to enjoy our range. Scenic driving range with covered bays, grass tees, and a comprehensive 2.5-acre short-game practice area. Free Toptracer technology at every bay. Expert private and group training for juniors and adults.
            </p>
            <p className="text-ink-mid text-[14px] leading-[1.72] mb-6">
              WSC is one of the few public ranges in the area that offer grass tees and 2.5 acres of dedicated short game training greens. Access is included with the purchase of a bucket. Seasonal availability due to weather conditions.
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
            <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-6">Now Open</p>
            <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light leading-[1.1] tracking-[-0.02em] mb-6">
              Swing Lab<br />Golf Simulators.
            </h2>
            <p className="text-parchment/65 text-[15px] leading-[1.8] max-w-[420px] mb-6">
              Four professional-grade Uneekor simulators with GSPRO software. 24 data points captured in real time, providing feedback on every aspect of your swing and ball flight. Over 2,000 high-quality, user-created courses.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Members can reserve simulators in CourtReserve",
                "Used for indoor private lessons and Tier 1 Golf Academy classes",
                "Compete in stroke, scramble, stableford, match play, best ball, or alt shot",
                "Tables, seating and TVs",
                "Coming soon: Tournaments through Simulator Golf Tour (SGT)",
              ].map((item, i) => (
                <li key={i} className="text-parchment/65 text-[13px] leading-[1.72] flex items-start gap-2">
                  <span className="text-volt-bright text-[10px] mt-1">—</span> {item}
                </li>
              ))}
            </ul>
            <a
              href="https://app.courtreserve.com/Online/Portal/Index/6689"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline text-parchment border border-volt-bright px-7 py-3 hover:bg-volt hover:border-volt transition-colors duration-200"
            >
              Book a Simulator
            </a>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { val: "4", label: "Simulators" },
                { val: "24", label: "Data Points" },
                { val: "2,000+", label: "Courses" },
                { val: "Uneekor", label: "Technology" },
              ].map((m, i) => (
                <div key={i} className="py-6 border-t border-parchment/[0.1]">
                  <div className="text-volt-bright text-[32px] font-light tracking-[-0.02em] leading-none mb-2">
                    {m.val}
                  </div>
                  <div className="text-parchment/55 text-[11px] tracking-[0.14em] uppercase leading-[1.5]">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-dark-bg p-6 border-l-2 border-volt-bright">
              <p className="text-volt-bright text-[11px] tracking-[0.18em] uppercase mb-2">Launch Promo</p>
              <p className="text-parchment/65 text-[14px] leading-[1.72]">
                Limited-time Golf Simulator Membership — bring guests for free through March 31, 2026. Trial membership available for $20 + tax.
              </p>
            </div>
          </div>
        </div>

        {/* Simulator photo gallery */}
        <div className="max-w-[1440px] mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { src: SIM_BAY_IMG, alt: "Golfer using Uneekor simulator with swing data overlay", caption: "Uneekor launch monitors capture 24 data points per swing" },
            { src: SIM_SCREEN_IMG, alt: "Simulator screen with virtual course and analytics", caption: "2,000+ photorealistic courses with real-time feedback" },
            { src: SIM_LOUNGE_IMG, alt: "Multiple simulator bays in the Swing Lab lounge", caption: "Four professional-grade bays with lounge seating" },
          ].map((img, i) => (
            <div key={i} className="group relative overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-[12px] tracking-[0.04em] px-5 pb-5">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tier 1 Golf Academy */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Tier 1 Golf Academy</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-6">
            Registration is open.
          </h2>
          <p className="text-ink-mid text-[16px] leading-[1.82] mb-14 max-w-[680px]">
            Classes for youth and adults of all levels, from first swing to elite golfers. Led by WGTF Master Certified Coach, Daniel Jarvie. Outdoor instruction on the range; indoor instruction in WSC's new Swing Lab indoor golf simulators.
          </p>

          <div className="space-y-0">
            {[
              {
                tag: "Youth",
                name: "Junior Academy",
                desc: "After-school academy for ages 7–18. New Foundations class for ages 7–9 beginning Winter 3. Includes indoor training in Swing Lab simulators.",
              },
              {
                tag: "Adults",
                name: "Adult Clinics",
                desc: "Golf clinics for men and women. Private lessons for adults. Range and simulator-based instruction.",
              },
              {
                tag: "Director",
                name: "Led by Daniel Jarvie",
                desc: "WGTF Master Certified Coach and Director of Golf. Expert instruction combining range work with simulator technology. Full-time youth academy launching later in 2026.",
              },
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
                <a
                  href="https://app.courtreserve.com/Online/Portal/Index/6689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
                >
                  Register
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Range Pricing */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Range Pricing</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-14">
            Open to the public.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px] mb-8">
            {[
              { name: "Small Bucket", detail: "~45 balls", price: "$10 + tax" },
              { name: "Medium Bucket", detail: "~75 balls", price: "$12 + tax" },
              { name: "Large Bucket", detail: "~100 balls", price: "$14 + tax" },
            ].map((p, i) => (
              <div key={i} className="bg-parchment-mid p-8 border-t-2 border-transparent hover:border-volt transition-colors duration-300">
                <h3 className="text-[20px] font-light tracking-[-0.01em] mb-1">{p.name}</h3>
                <p className="text-ink-light text-[13px] mb-3">{p.detail}</p>
                <p className="text-volt-bright text-[24px] font-light mb-4">{p.price}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
            <div className="bg-parchment-mid p-8">
              <h3 className="text-[18px] font-light tracking-[-0.01em] mb-3">Punch Card Discounts</h3>
              <p className="text-ink-mid text-[14px] leading-[1.72] mb-4">10% discount when you buy punch cards.</p>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-wsc-border">
                  <span className="text-ink-mid text-[14px]">10 Medium Buckets</span>
                  <span className="text-volt-bright text-[16px] font-light">$108 + tax</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-ink-mid text-[14px]">10 Large Buckets</span>
                  <span className="text-volt-bright text-[16px] font-light">$126 + tax</span>
                </div>
              </div>
            </div>
            <div className="bg-parchment-mid p-8">
              <h3 className="text-[18px] font-light tracking-[-0.01em] mb-3">Mini-Golf</h3>
              <p className="text-ink-mid text-[14px] leading-[1.72] mb-4">18-hole mini-golf course on the property.</p>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-wsc-border">
                  <span className="text-ink-mid text-[14px]">Kids (under 12)</span>
                  <span className="text-volt-bright text-[16px] font-light">$8 + tax</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-ink-mid text-[14px]">Adults</span>
                  <span className="text-volt-bright text-[16px] font-light">$10 + tax</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width visual break */}
      <FullWidthImage
        src={GOLF_SUNSET}
        alt="WSC driving range at golden hour"
        caption="23 covered bays with free Toptracer. Open to the public."
        subcaption="Driving Range"
        height="medium"
      />

      {/* Why WSC Golf */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Why WSC Golf</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15]">
              A unique golf<br />experience.
            </h2>
          </div>
          <div>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-6">
              Our property offers a unique golf experience in Woodinville, WA, unlike anything else in the Pacific Northwest. From our advanced driving range with grass tees to our spacious practice area, we provide an exceptional 2.5-acre environment for anyone wanting to improve their game.
            </p>
            <p className="text-ink-mid text-[16px] leading-[1.82]">
              Our newest offerings, Tier 1 Golf Academy and Swing Lab indoor golf simulators, round out our golf offerings, making premium instruction and cutting-edge technology accessible to golfers at every skill level. Explore our membership options — our facilities are ideal for golf outings, events, and leagues.
            </p>
          </div>
        </div>
      </section>

      {/* Coaching Staff */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-14">
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Our Coaches</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15]">
              Expert instruction<br />at every level.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
            {[
              {
                name: "Daniel Jarvie",
                title: "Director of Golf & Tier 1 Golf Academy",
                credential: "WGTF Master Certified Coach",
                philosophy: "Golf is a game of precision and patience. My approach combines cutting-edge simulator technology with fundamentals-first coaching to build swings that last a lifetime.",
              },
              {
                name: "Golf Academy Staff",
                title: "Junior & Adult Instruction",
                credential: "PGA & WGTF certified professionals",
                philosophy: "From first-time juniors to competitive adults, we build confidence through structured progression and real-time data feedback in the Swing Lab.",
              },
            ].map((coach, i) => (
              <div key={i} className="bg-parchment-mid p-8 lg:p-10">
                <div className="w-16 h-16 rounded-full bg-dark-bg/10 flex items-center justify-center mb-6">
                  <span className="text-volt text-[20px] font-light">{coach.name.charAt(0)}</span>
                </div>
                <h3 className="text-[18px] font-light tracking-[-0.01em] mb-1">{coach.name}</h3>
                <p className="text-volt text-[10px] tracking-[0.2em] uppercase mb-1.5">{coach.title}</p>
                <p className="text-ink-mid text-[11px] tracking-[0.08em] uppercase mb-5">{coach.credential}</p>
                <p className="text-ink-mid text-[14px] leading-[1.72] italic">"{coach.philosophy}"</p>
              </div>
            ))}
          </div>

          <p className="text-ink-light text-[13px] mt-6 italic">
            Coach headshots and full bios coming soon. Contact us to learn more about our coaching team.
          </p>
        </div>
      </section>

      {/* Tier 1 compact banner */}
      <Tier1Banner variant="compact" />

      {/* CTA */}
      <section className="bg-dark-mid px-6 lg:px-14 py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-5">Get Started</p>
          <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light tracking-[-0.02em] leading-[1.15] mb-4">
            Elevate your game.
          </h2>
          <p className="text-parchment/65 text-[15px] leading-[1.75] max-w-[480px] mx-auto mb-8">
            Visit today to experience our driving range, Swing Lab simulators, and Tier 1 Golf Academy.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/membership"
              className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline bg-volt-bright text-dark-bg px-8 py-3.5 hover:bg-parchment transition-colors duration-200"
            >
              View Membership
            </Link>
            <a
              href="https://app.courtreserve.com/Online/Portal/Index/6689"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline text-parchment border border-volt-bright px-8 py-3.5 hover:bg-volt hover:border-volt transition-colors duration-200"
            >
              Private Lesson Inquiry
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
