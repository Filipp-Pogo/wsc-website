/*
 * 4B Design — Pickleball Page
 * Real content from WSC website crawl
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const PICKLE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/pickleball-courts_30a446d6.jpg";

export default function Pickleball() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Pickleball"
        headline="Pickleball at Woodinville Sports Club."
        subtitle="Play the nation's fastest-growing sport in our iconic dome. Open play 7 days a week, private court rentals, classes for all levels, and four major tournaments per year."
        image={PICKLE_IMG}
      />

      {/* Courts & Open Play */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Open Play</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-8">
              Eight indoor courts.<br />Seven days a week.
            </h2>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-8">
              Join our daily open play sessions and play and socialize with other pickleball enthusiasts. Our open play sessions are designed to provide a fun and engaging environment for players of all skill levels. We've got 8 indoor courts in the dome and 4 outdoor courts in summer.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "8", label: "Indoor Courts" },
                { val: "4", label: "Outdoor (Summer)" },
                { val: "7", label: "Days/Week" },
                { val: "PIG", label: "Tournament Partner" },
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
            src={PICKLE_IMG}
            alt="Pickleball dome"
            className="w-full aspect-[4/3] object-cover saturate-[0.55] brightness-[0.85]"
          />
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Open Play Schedule</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-14">
            Fall / Winter / Spring hours.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px] mb-8">
            <div className="bg-parchment p-8 lg:p-10">
              <h3 className="text-[18px] font-light tracking-[-0.01em] mb-5">Weekday Schedule</h3>
              <div className="space-y-3">
                {[
                  { day: "Mon, Wed, Fri", time: "8:00 PM – 11:00 PM", note: "4 courts on Tennis Court 7" },
                  { day: "Wednesdays", time: "Advanced players only", note: "DUPR 3.5+" },
                  { day: "Tue, Thu", time: "10:00 AM – 1:00 PM", note: "4 courts on Tennis Court 7" },
                  { day: "Tue, Thu", time: "8:00 PM – 11:00 PM", note: "4 courts on Tennis Court 7" },
                ].map((s, i) => (
                  <div key={i} className="py-3 border-b border-wsc-border">
                    <div className="flex justify-between mb-1">
                      <span className="text-ink text-[14px]">{s.day}</span>
                      <span className="text-ink-mid text-[14px]">{s.time}</span>
                    </div>
                    <span className="text-ink-light text-[12px]">{s.note}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-parchment p-8 lg:p-10">
              <h3 className="text-[18px] font-light tracking-[-0.01em] mb-5">Weekend Schedule</h3>
              <div className="space-y-3">
                {[
                  { day: "Saturday", time: "7:00 AM – 9:30 AM", note: "DUPR Ladders" },
                  { day: "Saturday", time: "2:30 PM – 5:00 PM", note: "8 courts" },
                  { day: "Saturday", time: "7:30 PM – 10:00 PM", note: "8 courts" },
                  { day: "Sunday", time: "5:00 PM – 7:30 PM", note: "8 courts on Tennis Courts 7 & 8" },
                ].map((s, i) => (
                  <div key={i} className="py-3 border-b border-wsc-border">
                    <div className="flex justify-between mb-1">
                      <span className="text-ink text-[14px]">{s.day}</span>
                      <span className="text-ink-mid text-[14px]">{s.time}</span>
                    </div>
                    <span className="text-ink-light text-[12px]">{s.note}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-wsc-border">
                <h4 className="text-[16px] font-light tracking-[-0.01em] mb-3">Summer Hours</h4>
                <p className="text-ink-mid text-[14px] leading-[1.72]">
                  June 15 – September 4: Mon/Wed/Fri 6:00 PM – 9:00 PM on outdoor courts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Pricing</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-14">
            Open session pricing.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
            <div className="bg-parchment-mid p-8 lg:p-10">
              <h3 className="text-[20px] font-light tracking-[-0.01em] mb-4">Member Pricing</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-wsc-border">
                  <span className="text-ink-mid text-[14px]">Mon–Fri (3 hr session)</span>
                  <span className="text-volt-bright text-[16px] font-light">$18 + tax</span>
                </div>
                <div className="flex justify-between py-3 border-b border-wsc-border">
                  <span className="text-ink-mid text-[14px]">Sat–Sun (2.5 hr session)</span>
                  <span className="text-volt-bright text-[16px] font-light">$15 + tax</span>
                </div>
                <div className="flex justify-between py-3 border-b border-wsc-border">
                  <span className="text-ink-mid text-[14px]">Private Court Rental</span>
                  <span className="text-ink-mid text-[14px]">Available</span>
                </div>
              </div>
              <p className="text-ink-light text-[12px] mt-4 italic">Members can pre-register for sessions.</p>
            </div>
            <div className="bg-parchment-mid p-8 lg:p-10">
              <h3 className="text-[20px] font-light tracking-[-0.01em] mb-4">Non-Member Pricing</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-wsc-border">
                  <span className="text-ink-mid text-[14px]">Mon–Fri (3 hr session)</span>
                  <span className="text-volt-bright text-[16px] font-light">$23 + tax</span>
                </div>
                <div className="flex justify-between py-3 border-b border-wsc-border">
                  <span className="text-ink-mid text-[14px]">Sat–Sun (2.5 hr session)</span>
                  <span className="text-volt-bright text-[16px] font-light">$20 + tax</span>
                </div>
                <div className="flex justify-between py-3 border-b border-wsc-border">
                  <span className="text-ink-mid text-[14px]">Private Court Rental</span>
                  <span className="text-ink-mid text-[14px]">Available</span>
                </div>
              </div>
              <p className="text-ink-light text-[12px] mt-4 italic">Non-members are walk-in only.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Instructional Classes</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-6">
            Learn and improve.
          </h2>
          <p className="text-ink-mid text-[16px] leading-[1.82] mb-14 max-w-[680px]">
            WSC offers two levels of instructional classes. A Class Registration Pass is required to sign up. No outside coaching is permitted.
          </p>

          <div className="space-y-0">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_auto] gap-4 lg:gap-12 items-baseline py-8 border-b border-wsc-border">
              <p className="text-volt text-[10px] tracking-[0.2em] uppercase">Level 2.0</p>
              <div>
                <h3 className="text-[20px] font-light tracking-[-0.01em] mb-2">Intro to Pickleball</h3>
                <p className="text-ink-mid text-[14px] leading-[1.72] mb-3">
                  Beginner-friendly class. Master the fundamentals in a supportive, engaging environment.
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Essential grips, stances, and swing techniques",
                    "Scoring systems, serving rules, and gameplay etiquette",
                    "Strategic court positioning",
                    "Real game experience through fun modified matches",
                  ].map((item, i) => (
                    <li key={i} className="text-ink-mid text-[13px] leading-[1.72] flex items-start gap-2">
                      <span className="text-volt text-[10px] mt-1">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://app.courtreserve.com/Online/Portal/Index/6689"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
              >
                Sign Up
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_auto] gap-4 lg:gap-12 items-baseline py-8 border-b border-wsc-border">
              <p className="text-volt text-[10px] tracking-[0.2em] uppercase">Level 2.5</p>
              <div>
                <h3 className="text-[20px] font-light tracking-[-0.01em] mb-2">Advanced Beginner: Developing Skills & Strategy</h3>
                <p className="text-ink-mid text-[14px] leading-[1.72] mb-3">
                  Bridges beginner and intermediate play.
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Improving serves, returns, and shot selection",
                    "Effective doubles strategies",
                    "Building consistency and accuracy",
                    "Applying new techniques in structured gameplay",
                  ].map((item, i) => (
                    <li key={i} className="text-ink-mid text-[13px] leading-[1.72] flex items-start gap-2">
                      <span className="text-volt text-[10px] mt-1">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://app.courtreserve.com/Online/Portal/Index/6689"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section className="bg-dark-mid px-6 lg:px-14 py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-5">Tournaments</p>
          <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light tracking-[-0.02em] leading-[1.15] mb-4">
            Four major tournaments per year.
          </h2>
          <p className="text-parchment/[0.45] text-[15px] leading-[1.75] max-w-[480px] mx-auto mb-8">
            We partner with Pickleball is Great (PIG) to host tournaments. Round Robin format, skills 3.0–5.0 in age events (under 50 and 50+).
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
              Book a Court
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
