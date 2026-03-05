/*
 * 4B Design — WSC Gym Page
 * Dedicated page for the Main Gym at Woodinville Sports Club
 * Covers: Main Gym, Weight Room, Cardio, Functional Training, Sauna & Locker Rooms
 * Links to APL Fitness for athletic performance training
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StructuredData, { getBreadcrumbSchema } from "@/components/StructuredData";

const GYM_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/wsc-gym-main-kbMDtnrHt7XhzvkRacRv7e.webp";
const GYM_WEIGHTS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/wsc-gym-weights-RzsgUqBr5ayotRkdcXJGYE.webp";
const GYM_FUNCTIONAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/wsc-gym-functional-TNis4jbtrUgkmbUojh2MTU.webp";
const PERF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/fitness-gym_0d1e0831.jpg";
const COURT_RESERVE_URL = "https://app.courtreserve.com/Online/Portal/Index/6689";

export default function Gym() {
  return (
    <div className="min-h-screen">
      <StructuredData schemas={[getBreadcrumbSchema([
        { name: "Home", url: "https://woodinvillesportsclub.com/" },
        { name: "Gym", url: "https://woodinvillesportsclub.com/gym" },
      ])]} />
      <Navbar />
      <PageHero
        eyebrow="WSC Gym"
        headline="Your Gym. Your Goals."
        subtitle="A clean, modern, fully-equipped gym surrounded by 67 acres of Pacific Northwest beauty. Whether you're here for cardio, strength, or functional training — WSC has the space and equipment to match your ambition."
        image={GYM_HERO}
      />

      {/* Overview Stats */}
      <section className="bg-dark-bg px-6 lg:px-14 py-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-5 gap-y-8">
          {[
            { val: "2", label: "Training Facilities" },
            { val: "67", label: "Acre Campus" },
            { val: "6am", label: "Early Open" },
            { val: "Full", label: "Free Weight Room" },
            { val: "Sauna", label: "& Locker Rooms" },
          ].map((m, i) => (
            <div key={i} className={`pr-10 ${i < 4 ? "lg:border-r border-parchment/[0.08]" : ""}`}>
              <div className="text-volt-bright text-[36px] font-light tracking-[-0.03em] leading-none mb-2">
                {m.val}
              </div>
              <div className="text-parchment/60 text-[11px] tracking-[0.14em] uppercase leading-[1.5]">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Gym Section — Image Left, Text Right */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={GYM_HERO}
                alt="WSC Main Gym with cardio machines and tree-lined views"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Main Gym</p>
              <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-8">
                Full-service strength<br />and cardio.
              </h2>
              <p className="text-ink-mid text-[16px] leading-[1.82] mb-6">
                Our Main Gym is a clean and updated space with flexible hours and top-notch equipment, including free weights, cardio machines, power lifting stations, and a dynamic functional training area.
              </p>
              <p className="text-ink-mid text-[16px] leading-[1.82] mb-8">
                Enjoy views of the beautiful tree-lined property while you work out. The gym features floor-to-ceiling windows overlooking our 67-acre campus, creating an atmosphere that's as inspiring as it is functional.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-[11px] tracking-[0.1em] uppercase text-ink-mid border border-ink/15 px-4 py-2">Treadmills</span>
                <span className="text-[11px] tracking-[0.1em] uppercase text-ink-mid border border-ink/15 px-4 py-2">Ellipticals</span>
                <span className="text-[11px] tracking-[0.1em] uppercase text-ink-mid border border-ink/15 px-4 py-2">Rowing Machines</span>
                <span className="text-[11px] tracking-[0.1em] uppercase text-ink-mid border border-ink/15 px-4 py-2">Stationary Bikes</span>
                <span className="text-[11px] tracking-[0.1em] uppercase text-ink-mid border border-ink/15 px-4 py-2">Free Weights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weight Room Section — Dark */}
      <section className="bg-dark-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-6">Weight Room</p>
              <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light leading-[1.1] tracking-[-0.02em] mb-6">
                Built for serious<br />strength training.
              </h2>
              <p className="text-parchment/65 text-[15px] leading-[1.8] max-w-[420px] mb-6">
                Our dedicated weight room features power racks, Olympic lifting platforms, a full dumbbell range, cable machines, and kettlebells. Whether you're training for competition or general fitness, you'll find the equipment you need.
              </p>
              <p className="text-parchment/65 text-[15px] leading-[1.8] max-w-[420px] mb-8">
                Rubber flooring, mirrors, and proper ventilation create a focused training environment. The space is designed for both experienced lifters and those just starting their strength journey.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-[11px] tracking-[0.1em] uppercase text-parchment/60 border border-parchment/20 px-4 py-2">Power Racks</span>
                <span className="text-[11px] tracking-[0.1em] uppercase text-parchment/60 border border-parchment/20 px-4 py-2">Olympic Platforms</span>
                <span className="text-[11px] tracking-[0.1em] uppercase text-parchment/60 border border-parchment/20 px-4 py-2">Dumbbells</span>
                <span className="text-[11px] tracking-[0.1em] uppercase text-parchment/60 border border-parchment/20 px-4 py-2">Cable Machines</span>
                <span className="text-[11px] tracking-[0.1em] uppercase text-parchment/60 border border-parchment/20 px-4 py-2">Kettlebells</span>
              </div>
            </div>
            <img
              src={GYM_WEIGHTS}
              alt="WSC weight room with power racks and Olympic lifting platforms"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Functional Training — Light */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={GYM_FUNCTIONAL}
                alt="WSC functional training area with turf, TRX, and battle ropes"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Functional Training</p>
              <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-8">
                Move better.<br />Perform better.
              </h2>
              <p className="text-ink-mid text-[16px] leading-[1.82] mb-6">
                Our functional training zone features an open turf area for agility drills, TRX suspension trainers, battle ropes, medicine balls, and foam rollers. It's the perfect space for dynamic warm-ups, mobility work, and sport-specific conditioning.
              </p>
              <p className="text-ink-mid text-[16px] leading-[1.82]">
                Whether you're preparing for a match, recovering from a workout, or building foundational movement patterns, this space adapts to your training needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Amenities</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-14">
            Everything you need,<br />all under one roof.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3px]">
            {[
              {
                title: "Sauna",
                desc: "Unwind after your workout in our dry sauna. Available to all members with gym access during regular facility hours.",
              },
              {
                title: "Locker Rooms",
                desc: "Clean, well-maintained locker rooms with showers, changing areas, and secure storage for your belongings.",
              },
              {
                title: "Stretching Area",
                desc: "A dedicated stretching and recovery zone with foam rollers, yoga mats, and resistance bands.",
              },
              {
                title: "Pro Shop",
                desc: "Pick up essentials — grips, strings, balls, apparel, and accessories — conveniently located on campus.",
              },
              {
                title: "Free Parking",
                desc: "Ample free parking right at the facility. No meters, no garages — just pull up and train.",
              },
              {
                title: "Wi-Fi",
                desc: "Complimentary high-speed Wi-Fi throughout the facility so you can stream music, track workouts, or stay connected.",
              },
            ].map((a, i) => (
              <div key={i} className="bg-parchment-mid p-8 border-t-2 border-transparent hover:border-volt transition-colors duration-300">
                <h3 className="text-[20px] font-light tracking-[-0.01em] mb-3">{a.title}</h3>
                <p className="text-ink-mid text-[14px] leading-[1.72]">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APL Fitness Crosslink — Dark */}
      <section className="bg-dark-bg px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-6">Athletic Performance Lab</p>
              <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light leading-[1.1] tracking-[-0.02em] mb-6">
                Take your training<br />to the next level.
              </h2>
              <p className="text-parchment/65 text-[15px] leading-[1.8] max-w-[420px] mb-6">
                Beyond the main gym, WSC's Athletic Performance Lab (APL) is a dedicated space for elite strength and conditioning. Small-group classes, sport-specific programming, and expert coaching for youth and adult athletes.
              </p>
              <p className="text-parchment/65 text-[15px] leading-[1.8] max-w-[420px] mb-8">
                APL training is designed to build more well-rounded athletes — improving strength, speed, power, agility, and endurance through structured programming.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/fitness"
                  className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline bg-volt-bright text-dark-bg px-7 py-3 hover:bg-parchment transition-colors duration-200"
                >
                  Explore APL Fitness
                </Link>
                <a
                  href={COURT_RESERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline text-parchment border border-parchment/30 px-7 py-3 hover:bg-parchment/10 transition-colors duration-200"
                >
                  Browse Classes
                </a>
              </div>
            </div>
            <img
              src={PERF_IMG}
              alt="APL Training Center at WSC"
              className="w-full aspect-[4/3] object-cover saturate-[0.4] brightness-[0.65]"
            />
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Gym Hours</p>
              <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-8">
                Open early.<br />Close late.
              </h2>
              <p className="text-ink-mid text-[16px] leading-[1.82] max-w-[420px]">
                The WSC Gym operates on extended hours to fit your schedule. Whether you're an early riser or prefer evening sessions, we've got you covered.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { day: "Monday – Friday", hours: "6:00 AM – 9:00 PM" },
                { day: "Saturday", hours: "7:00 AM – 7:00 PM" },
                { day: "Sunday", hours: "8:00 AM – 6:00 PM" },
              ].map((h, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-ink/10">
                  <span className="text-[15px] font-light">{h.day}</span>
                  <span className="text-ink-mid text-[15px]">{h.hours}</span>
                </div>
              ))}
              <p className="text-ink-mid/60 text-[13px] leading-[1.7] pt-4">
                Hours may vary on holidays. Please check the front desk or CourtReserve for holiday schedules. Gym access requires an active membership with gym privileges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Get Started</p>
          <h2 className="text-[clamp(26px,3vw,42px)] font-light tracking-[-0.02em] leading-[1.15] mb-4">
            Ready to train at WSC?
          </h2>
          <p className="text-ink-mid text-[15px] leading-[1.75] max-w-[520px] mx-auto mb-8">
            All-Access memberships include full gym, APL Training Center, sauna, and locker room access. Join the WSC community today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/membership"
              className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline bg-volt-bright text-dark-bg px-8 py-3.5 hover:bg-parchment-dark transition-colors duration-200"
            >
              Become a Member
            </Link>
            <Link
              href="/contact"
              className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline text-ink border border-ink/20 px-8 py-3.5 hover:bg-ink/5 transition-colors duration-200"
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
