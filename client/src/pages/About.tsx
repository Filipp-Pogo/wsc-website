/*
 * 4B Design — About WSC Page
 * Hero → Story → Elevate Philosophy → Facilities → Community → CTA
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/hero-campus-YM3mcvUEufhyrArKQifwwG.webp";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="About WSC"
        headline="Elevating athletic excellence since 1979."
        subtitle="Where passion meets performance, and community thrives through sport."
        image={HERO_IMG}
      />

      {/* Story */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Our Story</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15]">
              From a modest<br />tennis facility<br />to a premier campus.
            </h2>
          </div>
          <div>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-8">
              Founded in 1979, Woodinville Sports Club began as a modest tennis facility with a big dream: to create a space where athletes of all levels could come together, challenge themselves, and grow. As our community evolved, so did we.
            </p>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-8">
              Today, we stand as a premier multi-sport destination, offering world-class facilities for tennis, golf, pickleball, and comprehensive fitness programs. For over four decades, we've been the heart of athletic pursuit in the Pacific Northwest.
            </p>
            <div className="border-l-2 border-volt pl-6 py-4">
              <p className="text-ink-mid text-[15px] leading-[1.7] italic">
                "Woodinville Sports Club: Where every swing, serve, and step is an opportunity to rise higher."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elevate Philosophy */}
      <section className="bg-dark-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-6">The Elevate Experience</p>
          <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light leading-[1.1] tracking-[-0.02em] mb-14">
            Elevation in every discipline.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
            {[
              {
                name: "Elevate Performance",
                desc: "For the ambitious athletes pushing their limits. Structured training, competitive programs, and measurable development.",
              },
              {
                name: "Elevate Development",
                desc: "Nurturing the next generation of sports enthusiasts. Junior programs that shape future champions through progressive skill building.",
              },
              {
                name: "Elevate Fitness",
                desc: "Empowering every member to reach their peak health. Comprehensive gym facilities and group classes for all levels.",
              },
            ].map((e, i) => (
              <div key={i} className="bg-dark-bg p-8 lg:p-10 border-t-2 border-transparent hover:border-volt-bright transition-colors duration-300">
                <h3 className="text-parchment text-[20px] font-light tracking-[-0.01em] mb-3">{e.name}</h3>
                <p className="text-parchment/[0.45] text-[14px] leading-[1.72]">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Our Facilities</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-14">
            Nestled in the Woodinville landscape.
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { val: "8", label: "Indoor Tennis Courts" },
              { val: "23", label: "Covered Driving Bays" },
              { val: "4", label: "Golf Simulators" },
              { val: "8+", label: "Pickleball Courts" },
              { val: "2", label: "Fitness Facilities" },
            ].map((f, i) => (
              <div key={i} className="py-6 border-t border-wsc-border">
                <div className="text-volt-bright text-[36px] font-light tracking-[-0.02em] leading-none mb-2">
                  {f.val}
                </div>
                <div className="text-ink-light text-[11px] tracking-[0.14em] uppercase leading-[1.5]">
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Community</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15]">
              More than<br />a sports club.
            </h2>
          </div>
          <div>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-8">
              Our members don't just train here — they form lifelong friendships, celebrate milestones, and inspire each other to reach new heights. From junior programs that shape future champions to social leagues that bring people together, we're committed to fostering a sense of belonging and shared achievement.
            </p>
            <p className="text-ink-mid text-[16px] leading-[1.82]">
              Our team of certified coaches and fitness professionals are the backbone of the Woodinville Sports Club experience. With their diverse expertise and passionate approach, they're dedicated to helping you unlock your full potential, regardless of your starting point.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-mid px-6 lg:px-14 py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-5">Join Us</p>
          <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light tracking-[-0.02em] leading-[1.15] mb-8">
            Ready to elevate your game?
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
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
