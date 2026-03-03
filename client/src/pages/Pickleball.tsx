/*
 * 4B Design — Pickleball Page
 * Hero → Courts → Open Play → Pricing → CTA
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const PICKLE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/pickleball-dome-2iY3YEb9KoQqxrdRdgDgza.webp";

export default function Pickleball() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Pickleball"
        headline="Indoor courts in our historic dome."
        subtitle="Open play sessions 7 days a week, lessons, individual court bookings, and tournaments."
        image={PICKLE_IMG}
      />

      {/* Courts */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">The Dome</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-8">
              Eight indoor courts.<br />Historic character.
            </h2>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-8">
              Our pickleball courts are housed in the historic dome — a distinctive structure with character and history. Eight indoor courts with consistent playing conditions year-round, plus four outdoor courts available in summer.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "8", label: "Indoor Courts" },
                { val: "4", label: "Outdoor (Summer)" },
                { val: "7", label: "Days/Week Open Play" },
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

      {/* Schedule & Pricing */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Open Play & Pricing</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-14">
            Drop in any day.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
            <div className="bg-parchment p-8 lg:p-10">
              <h3 className="text-[20px] font-light tracking-[-0.01em] mb-4">Member Pricing</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-wsc-border">
                  <span className="text-ink-mid text-[14px]">Open Play</span>
                  <span className="text-volt-bright text-[16px] font-light">$15–18</span>
                </div>
                <div className="flex justify-between py-3 border-b border-wsc-border">
                  <span className="text-ink-mid text-[14px]">Private Court Rental</span>
                  <span className="text-ink-mid text-[14px]">Available</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-ink-mid text-[14px]">Lessons</span>
                  <span className="text-ink-mid text-[14px]">Available</span>
                </div>
              </div>
            </div>
            <div className="bg-parchment p-8 lg:p-10">
              <h3 className="text-[20px] font-light tracking-[-0.01em] mb-4">Non-Member Pricing</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-wsc-border">
                  <span className="text-ink-mid text-[14px]">Open Play</span>
                  <span className="text-volt-bright text-[16px] font-light">$20–23</span>
                </div>
                <div className="flex justify-between py-3 border-b border-wsc-border">
                  <span className="text-ink-mid text-[14px]">Private Court Rental</span>
                  <span className="text-ink-mid text-[14px]">Available</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-ink-mid text-[14px]">Lessons</span>
                  <span className="text-ink-mid text-[14px]">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Classes</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-14">
            Learn and improve.
          </h2>

          <div className="space-y-0">
            {[
              { tag: "2.0", name: "Intro to Pickleball", desc: "For complete beginners. Learn the fundamentals of the game in a supportive group setting." },
              { tag: "2.5", name: "Advanced Beginner", desc: "For players with basic skills looking to develop consistency, strategy, and court awareness." },
            ].map((c, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-[200px_1fr_auto] gap-4 lg:gap-12 items-baseline py-8 border-b border-wsc-border"
              >
                <p className="text-volt text-[10px] tracking-[0.2em] uppercase">Level {c.tag}</p>
                <div>
                  <h3 className="text-[20px] font-light tracking-[-0.01em] mb-2">{c.name}</h3>
                  <p className="text-ink-mid text-[14px] leading-[1.72]">{c.desc}</p>
                </div>
                <Link
                  href="/contact"
                  className="text-ink text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt pb-[3px]"
                >
                  Sign Up
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
