/*
 * 4B Design — Summer Training Page
 * Matches WSC original layout + interactive sample day schedules
 * Blue accent: #3899EC via volt/volt-bright tokens
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Clock, Users, MapPin, Sun, Zap, Trophy, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/hero-campus-YM3mcvUEufhyrArKQifwwG.webp";
const TENNIS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/tennis-courts-MqQJkVQ3Hm5xQqVXdXqMrP.webp";
const GOLF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/golf-range-7qnFBbfxqhYhVzAqxQxwWZ.webp";
const PERF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/performance-lab-FkSsEMYJLJCYrfPLpRBnHZ.webp";

type ProgramKey = "tennis" | "golf" | "adventure";
type DayType = "half-am" | "half-pm" | "full-tennis" | "full-golf" | "full-bundle";

const PROGRAMS: Record<ProgramKey, {
  name: string;
  ages: string;
  color: string;
  icon: typeof Trophy;
  desc: string;
  features: string[];
  image: string;
}> = {
  tennis: {
    name: "Tennis",
    ages: "Ages 3–18",
    color: "volt-bright",
    icon: Trophy,
    desc: "Tier 1 Academy and Core (formerly RPM) tracks for ages 3–18. Tier 1 Academy requires coach approval (Core does not). Includes daily APL athletic development training.",
    features: [
      "8 indoor climate-controlled courts",
      "Former world-ranked, D1, and professional coaches",
      "Academy and recreational pathways",
      "Daily APL athletic development integrated",
    ],
    image: TENNIS_IMG,
  },
  golf: {
    name: "Golf",
    ages: "Ages 7–18",
    color: "volt-bright",
    icon: Sun,
    desc: "Tier 1 Golf Academy training for beginners to advanced golfers ages 7–18. Access to our driving range, practice greens, new indoor golf simulators, and putt-putt course. Includes daily APL athletic development training.",
    features: [
      "23-bay covered driving range with Toptracer",
      "NEW Swing Lab indoor golf simulators",
      "WGTF Master-certified Director of Golf",
      "Daily APL athletic development integrated",
    ],
    image: GOLF_IMG,
  },
  adventure: {
    name: "Adventure Club",
    ages: "Ages 5–12",
    color: "volt-bright",
    icon: Zap,
    desc: "Summer camp for active and creative kids, ages 5–12. With access to our golf range, courts, and grass fields, this camp offers an introduction to multiple sports and activities and professional athletes from around the world.",
    features: [
      "Multi-sport exploration across 67 acres",
      "Learn about pro athletes from around the world",
      "Access to courts, range, and grass fields",
      "Creative activities and team building",
    ],
    image: PERF_IMG,
  },
};

const SAMPLE_DAYS: Record<DayType, {
  label: string;
  subtitle: string;
  schedule: { time: string; activity: string; location: string; type: "sport" | "apl" | "break" | "fun" }[];
}> = {
  "half-am": {
    label: "Half-Day AM",
    subtitle: "Tennis or Golf — 9:00am to 12:30pm",
    schedule: [
      { time: "9:00", activity: "Check-in & Dynamic Warm-Up", location: "Main Pavilion", type: "apl" },
      { time: "9:30", activity: "Sport-Specific Skill Training", location: "Courts / Range", type: "sport" },
      { time: "10:45", activity: "Hydration Break & Snack", location: "Pavilion", type: "break" },
      { time: "11:00", activity: "Match Play / On-Course Practice", location: "Courts / Range", type: "sport" },
      { time: "11:45", activity: "APL Athletic Development", location: "Performance Lab", type: "apl" },
      { time: "12:15", activity: "Cool-Down & Dismissal", location: "Main Pavilion", type: "break" },
    ],
  },
  "half-pm": {
    label: "Half-Day PM",
    subtitle: "Tennis or Golf — 1:00pm to 4:30pm",
    schedule: [
      { time: "1:00", activity: "Check-in & Movement Prep", location: "Main Pavilion", type: "apl" },
      { time: "1:30", activity: "Technical Drills & Instruction", location: "Courts / Range", type: "sport" },
      { time: "2:45", activity: "Hydration Break", location: "Pavilion", type: "break" },
      { time: "3:00", activity: "Competitive Games & Challenges", location: "Courts / Range", type: "sport" },
      { time: "3:45", activity: "APL Athletic Development", location: "Performance Lab", type: "apl" },
      { time: "4:15", activity: "Cool-Down & Dismissal", location: "Main Pavilion", type: "break" },
    ],
  },
  "full-tennis": {
    label: "Full-Day Tennis",
    subtitle: "Tennis + Adventure Club — 9:00am to 4:30pm",
    schedule: [
      { time: "9:00", activity: "Check-in & Dynamic Warm-Up", location: "Main Pavilion", type: "apl" },
      { time: "9:30", activity: "Tennis Skill Training", location: "Indoor Courts", type: "sport" },
      { time: "10:45", activity: "Hydration Break & Snack", location: "Pavilion", type: "break" },
      { time: "11:00", activity: "Match Play & Point Construction", location: "Indoor Courts", type: "sport" },
      { time: "11:45", activity: "APL Athletic Development", location: "Performance Lab", type: "apl" },
      { time: "12:15", activity: "Lunch Break", location: "Pavilion / Outdoors", type: "break" },
      { time: "1:00", activity: "Adventure Club: Multi-Sport Rotation", location: "Fields / Courts", type: "fun" },
      { time: "2:15", activity: "Hydration Break", location: "Pavilion", type: "break" },
      { time: "2:30", activity: "Adventure Club: Pro Athlete Spotlight", location: "Fields / Courts", type: "fun" },
      { time: "3:30", activity: "Team Games & Challenges", location: "Grass Fields", type: "fun" },
      { time: "4:15", activity: "Cool-Down & Dismissal", location: "Main Pavilion", type: "break" },
    ],
  },
  "full-golf": {
    label: "Full-Day Golf",
    subtitle: "Golf + Adventure Club — 9:00am to 4:30pm",
    schedule: [
      { time: "9:00", activity: "Check-in & Dynamic Warm-Up", location: "Main Pavilion", type: "apl" },
      { time: "9:30", activity: "Golf Fundamentals & Swing Lab", location: "Range / Simulators", type: "sport" },
      { time: "10:45", activity: "Hydration Break & Snack", location: "Pavilion", type: "break" },
      { time: "11:00", activity: "On-Course Play & Short Game", location: "Range / Greens", type: "sport" },
      { time: "11:45", activity: "APL Athletic Development", location: "Performance Lab", type: "apl" },
      { time: "12:15", activity: "Lunch Break", location: "Pavilion / Outdoors", type: "break" },
      { time: "1:00", activity: "Adventure Club: Multi-Sport Rotation", location: "Fields / Courts", type: "fun" },
      { time: "2:15", activity: "Hydration Break", location: "Pavilion", type: "break" },
      { time: "2:30", activity: "Adventure Club: Pro Athlete Spotlight", location: "Fields / Courts", type: "fun" },
      { time: "3:30", activity: "Team Games & Challenges", location: "Grass Fields", type: "fun" },
      { time: "4:15", activity: "Cool-Down & Dismissal", location: "Main Pavilion", type: "break" },
    ],
  },
  "full-bundle": {
    label: "Full-Day Bundle",
    subtitle: "Tennis AM + Golf PM — 9:00am to 4:30pm",
    schedule: [
      { time: "9:00", activity: "Check-in & Dynamic Warm-Up", location: "Main Pavilion", type: "apl" },
      { time: "9:30", activity: "Tennis Skill Training", location: "Indoor Courts", type: "sport" },
      { time: "10:45", activity: "Hydration Break & Snack", location: "Pavilion", type: "break" },
      { time: "11:00", activity: "Tennis Match Play", location: "Indoor Courts", type: "sport" },
      { time: "11:45", activity: "APL Athletic Development", location: "Performance Lab", type: "apl" },
      { time: "12:15", activity: "Lunch Break", location: "Pavilion / Outdoors", type: "break" },
      { time: "1:00", activity: "Golf Fundamentals & Swing Lab", location: "Range / Simulators", type: "sport" },
      { time: "2:15", activity: "Hydration Break", location: "Pavilion", type: "break" },
      { time: "2:30", activity: "On-Course Play & Short Game", location: "Range / Greens", type: "sport" },
      { time: "3:30", activity: "APL Cool-Down & Mobility", location: "Performance Lab", type: "apl" },
      { time: "4:15", activity: "Dismissal", location: "Main Pavilion", type: "break" },
    ],
  },
};

const typeColors: Record<string, string> = {
  sport: "bg-volt-bright/20 text-volt-bright border-volt-bright/30",
  apl: "bg-parchment/10 text-parchment/80 border-parchment/20",
  break: "bg-parchment/5 text-parchment/40 border-parchment/10",
  fun: "bg-volt/20 text-volt-bright border-volt/30",
};

const typeLabels: Record<string, string> = {
  sport: "SPORT",
  apl: "APL",
  break: "BREAK",
  fun: "ADVENTURE",
};

export default function Summer() {
  const [activeProgram, setActiveProgram] = useState<ProgramKey>("tennis");
  const [activeDay, setActiveDay] = useState<DayType>("half-am");

  const program = PROGRAMS[activeProgram];
  const day = SAMPLE_DAYS[activeDay];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero — Full bleed with overlay */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="WSC Campus" className="w-full h-full object-cover brightness-[0.35] saturate-[0.7]" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-14 pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-volt-bright text-[13px] tracking-[0.22em] uppercase mb-5">
              Summer Training @ WSC
            </p>
            <h1 className="text-parchment text-[clamp(36px,5.5vw,72px)] font-light tracking-[-0.03em] leading-[1.05] mb-5">
              Join Us for an<br />Epic Summer.
            </h1>
            <p className="text-parchment/50 text-[17px] leading-[1.7] max-w-[520px] mb-8">
              Train where high-performance athletes train. Ages 3–18 on our 67-acre campus, June 29 – August 30.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase no-underline bg-volt-bright text-dark-bg px-8 py-3.5 hover:bg-parchment transition-colors duration-200"
              >
                Register Now <ChevronRight size={14} />
              </Link>
              <a
                href="#sample-days"
                className="inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase no-underline text-parchment border border-parchment/20 px-8 py-3.5 hover:border-volt-bright transition-colors duration-200"
              >
                See Sample Days <Calendar size={14} />
              </a>
            </div>
          </motion.div>

          {/* Quick Stats Strip */}
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-parchment/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { label: "Programs", value: "3", detail: "Tennis · Golf · Adventure" },
              { label: "Ages", value: "3–18", detail: "All skill levels" },
              { label: "Duration", value: "9 Weeks", detail: "June 29 – Aug 30" },
              { label: "Campus", value: "67 Acres", detail: "Woodinville, WA" },
            ].map((s, i) => (
              <div key={i} className="bg-dark-bg/80 backdrop-blur-sm px-5 py-4">
                <p className="text-volt-bright text-[22px] font-light tracking-[-0.01em]">{s.value}</p>
                <p className="text-parchment/40 text-[11px] tracking-[0.12em] uppercase mt-0.5">{s.label}</p>
                <p className="text-parchment/25 text-[11px] mt-1">{s.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Early Bird Banner */}
      <section className="bg-volt-bright px-6 lg:px-14 py-5">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-dark-bg text-[12px] tracking-[0.14em] uppercase font-medium">
              Early Bird Special
            </span>
            <span className="text-dark-bg/60 text-[13px]">
              Save 10% on full-week registration + Free Summer Training t-shirt
            </span>
          </div>
          <Link
            href="/contact"
            className="text-dark-bg text-[11px] tracking-[0.14em] uppercase no-underline border border-dark-bg/30 px-5 py-2 hover:bg-dark-bg hover:text-volt-bright transition-colors duration-200"
          >
            Register by Feb 28
          </Link>
        </div>
      </section>

      {/* Interactive Program Explorer */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Programs</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-4">
            Three tracks. One campus.
          </h2>
          <p className="text-ink-mid text-[15px] leading-[1.75] max-w-[560px] mb-12">
            Choose your path — or bundle them together for a multi-sport summer experience.
          </p>

          {/* Program Tabs */}
          <div className="flex gap-[3px] mb-10">
            {(Object.keys(PROGRAMS) as ProgramKey[]).map((key) => {
              const p = PROGRAMS[key];
              const isActive = activeProgram === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveProgram(key)}
                  className={`flex-1 py-4 px-5 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-dark-bg"
                      : "bg-parchment-mid hover:bg-parchment-dark"
                  }`}
                >
                  <p className={`text-[12px] tracking-[0.14em] uppercase mb-1 ${
                    isActive ? "text-volt-bright" : "text-ink-light"
                  }`}>
                    {p.ages}
                  </p>
                  <p className={`text-[18px] font-light tracking-[-0.01em] ${
                    isActive ? "text-parchment" : "text-ink"
                  }`}>
                    {p.name}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Program Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgram}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-[3px]"
            >
              <div className="bg-dark-bg p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <program.icon size={18} className="text-volt-bright" />
                    <span className="text-volt-bright text-[11px] tracking-[0.18em] uppercase">
                      {program.name} — {program.ages}
                    </span>
                  </div>
                  <p className="text-parchment/50 text-[15px] leading-[1.8] mb-8">
                    {program.desc}
                  </p>
                  <div className="space-y-3">
                    {program.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-volt-bright text-[8px] mt-2">●</span>
                        <p className="text-parchment/40 text-[14px] leading-[1.65]">{f}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase no-underline bg-volt-bright text-dark-bg px-8 py-3.5 mt-10 self-start hover:bg-parchment transition-colors duration-200"
                >
                  Register for {program.name} <ChevronRight size={14} />
                </Link>
              </div>
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-full object-cover brightness-[0.8] saturate-[0.85]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-bg/80 to-transparent p-6">
                  <p className="text-parchment/50 text-[12px] tracking-[0.1em] uppercase">
                    <MapPin size={12} className="inline mr-1.5 -mt-0.5" />
                    67-acre campus · Woodinville, WA
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Interactive Sample Day Schedules */}
      <section id="sample-days" className="bg-dark-bg px-6 lg:px-14 py-24 lg:py-28 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-16">
            {/* Left: Selector */}
            <div>
              <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-5">Sample Day</p>
              <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light tracking-[-0.02em] leading-[1.1] mb-4">
                What does a<br />day look like?
              </h2>
              <p className="text-parchment/40 text-[14px] leading-[1.75] mb-10">
                Tap a schedule below to explore what a typical training day looks like. Every option includes APL athletic development.
              </p>

              <div className="space-y-[2px]">
                {(Object.keys(SAMPLE_DAYS) as DayType[]).map((key) => {
                  const d = SAMPLE_DAYS[key];
                  const isActive = activeDay === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveDay(key)}
                      className={`w-full text-left px-5 py-4 transition-all duration-300 flex items-center justify-between ${
                        isActive
                          ? "bg-dark-mid border-l-2 border-volt-bright"
                          : "bg-dark-bg hover:bg-dark-mid border-l-2 border-transparent"
                      }`}
                    >
                      <div>
                        <p className={`text-[14px] font-light ${
                          isActive ? "text-parchment" : "text-parchment/50"
                        }`}>
                          {d.label}
                        </p>
                        <p className={`text-[11px] mt-0.5 ${
                          isActive ? "text-parchment/40" : "text-parchment/20"
                        }`}>
                          {d.subtitle}
                        </p>
                      </div>
                      <ChevronRight
                        size={14}
                        className={`transition-all duration-300 ${
                          isActive ? "text-volt-bright translate-x-0" : "text-parchment/20 -translate-x-1"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-volt-bright/60" />
                  <span className="text-parchment/30 text-[10px] tracking-[0.1em] uppercase">Sport</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-parchment/40" />
                  <span className="text-parchment/30 text-[10px] tracking-[0.1em] uppercase">APL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-volt/40" />
                  <span className="text-parchment/30 text-[10px] tracking-[0.1em] uppercase">Adventure</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-parchment/15" />
                  <span className="text-parchment/30 text-[10px] tracking-[0.1em] uppercase">Break</span>
                </div>
              </div>
            </div>

            {/* Right: Timeline */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-[2px]"
                >
                  {/* Day Header */}
                  <div className="bg-dark-mid px-6 py-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-parchment text-[18px] font-light tracking-[-0.01em]">
                        {day.label}
                      </h3>
                      <p className="text-parchment/35 text-[12px] mt-1">{day.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 text-parchment/30">
                      <Clock size={14} />
                      <span className="text-[12px]">{day.schedule.length} blocks</span>
                    </div>
                  </div>

                  {/* Timeline Items */}
                  {day.schedule.map((block, i) => (
                    <motion.div
                      key={`${activeDay}-${i}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className={`relative px-6 py-4 border-l-2 ${typeColors[block.type]} bg-dark-mid/50 hover:bg-dark-mid transition-colors duration-200`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <span className="text-parchment/60 text-[14px] font-light tabular-nums min-w-[48px]">
                            {block.time}
                          </span>
                          <div>
                            <p className="text-parchment text-[14px] font-light leading-[1.5]">
                              {block.activity}
                            </p>
                            <p className="text-parchment/25 text-[11px] mt-1 flex items-center gap-1.5">
                              <MapPin size={10} /> {block.location}
                            </p>
                          </div>
                        </div>
                        <span className={`text-[9px] tracking-[0.14em] uppercase px-2.5 py-1 border ${typeColors[block.type]} shrink-0`}>
                          {typeLabels[block.type]}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  {/* Day Footer */}
                  <div className="bg-dark-mid/30 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-parchment/30 text-[12px]">
                      <Users size={12} className="inline mr-1.5 -mt-0.5" />
                      Schedules are representative. Actual times may vary by age group and program.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase no-underline bg-volt-bright text-dark-bg px-6 py-2.5 hover:bg-parchment transition-colors duration-200 shrink-0"
                    >
                      Register for this option <ChevronRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Coaching */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Elite Coaching & Facilities</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15]">
              The same coaches.<br />Year-round excellence.
            </h2>
          </div>
          <div>
            <p className="text-ink-mid text-[16px] leading-[1.82] mb-6">
              The same elite coaching staff that trains our athletes year-round. Plus, state-of-the-art facilities, including professional-grade courts, new indoor golf simulators, and Athletic Performance Lab.
            </p>
            <ul className="space-y-3">
              {[
                "Former world-ranked, D1, and professional tennis coaches",
                "NEW Tier 1 Golf Academy, led by WGTF Master-certified Director of Golf",
                "Athletic Performance Lab training led by NASM-Certified Director of Performance who has trained pro, Olympic, and D1 athletes",
              ].map((item, i) => (
                <li key={i} className="text-ink-mid text-[14px] leading-[1.72] flex items-start gap-2.5">
                  <span className="text-volt text-[10px] mt-1.5">—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Flexible Options */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Flexible Options</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-12">
            Build the summer that fits your athlete.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
            {[
              {
                icon: Clock,
                title: "Half-Day Sessions",
                desc: "Morning or afternoon. Perfect for younger athletes or those who want to focus on a single sport.",
              },
              {
                icon: Zap,
                title: "Full-Day Bundles",
                desc: "Pair a half-day of Tennis or Golf with Adventure Club, or split between Tennis and Golf. Discounted bundle pricing available.",
              },
              {
                icon: Calendar,
                title: "Single-Day Drop-Ins",
                desc: "Registration opens 4 weeks prior to each camp date. Try a day before committing to a full week.",
              },
            ].map((opt, i) => (
              <div key={i} className="bg-parchment p-8 border-t-2 border-transparent hover:border-volt transition-colors duration-300">
                <opt.icon size={20} className="text-volt mb-4" />
                <h3 className="text-[18px] font-light tracking-[-0.01em] mb-3">{opt.title}</h3>
                <p className="text-ink-mid text-[14px] leading-[1.72]">{opt.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-ink-light text-[13px] mt-8">
            For bundles, email{" "}
            <a href="mailto:info@woodinvillesportsclub.com" className="text-volt underline underline-offset-2">
              info@woodinvillesportsclub.com
            </a>{" "}
            and we can help get you registered.
          </p>
        </div>
      </section>

      {/* APL Athletic Development */}
      <section className="bg-dark-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-6">APL Athletic Development</p>
            <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light leading-[1.1] tracking-[-0.02em] mb-6">
              Building complete<br />athletes.
            </h2>
            <p className="text-parchment/[0.45] text-[15px] leading-[1.8] mb-6">
              Athletic development focuses on helping athletes move better, get stronger, faster, and more coordinated so they can perform with confidence and stay healthy. Our goal is to build well-rounded athletes who can train, compete, and succeed across any sport.
            </p>
            <p className="text-parchment/[0.45] text-[15px] leading-[1.8]">
              Athletes work on key areas such as basic movement skills, strength, speed, balance, and coordination through age-appropriate training. Sessions emphasize proper technique and body control to reduce injury risk while supporting long-term physical development.
            </p>
            <Link
              href="/fitness"
              className="inline-flex items-center gap-2 text-parchment text-[12px] tracking-[0.12em] uppercase no-underline border-b border-volt-bright pb-[3px] mt-8 hover:text-volt-bright transition-colors duration-200"
            >
              Learn more about APL <ChevronRight size={12} />
            </Link>
          </div>
          <div className="relative">
            <img
              src={PERF_IMG}
              alt="Athletic Performance Lab"
              className="w-full aspect-[4/3] object-cover brightness-[0.7] saturate-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-[2px]">
              {[
                { label: "Movement", value: "Skills" },
                { label: "Strength", value: "& Speed" },
                { label: "Injury", value: "Prevention" },
              ].map((s, i) => (
                <div key={i} className="bg-dark-bg/70 backdrop-blur-sm px-3 py-3 text-center">
                  <p className="text-volt-bright text-[13px] font-light">{s.value}</p>
                  <p className="text-parchment/30 text-[9px] tracking-[0.12em] uppercase mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-parchment px-6 lg:px-14 py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Registration is Open</p>
          <h2 className="text-[clamp(26px,3vw,42px)] font-light tracking-[-0.02em] leading-[1.15] mb-4">
            Save 10% with Early Bird pricing.
          </h2>
          <p className="text-ink-mid text-[15px] leading-[1.75] max-w-[480px] mx-auto mb-3">
            Register by February 28, 2026 and get 10% off full-week registration. Plus a free Summer Training t-shirt.
          </p>
          <p className="text-ink-light text-[12px] mb-8">
            *10% discount does not apply to Tier 1 Academy tennis.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase no-underline bg-volt-bright text-dark-bg px-8 py-3.5 hover:bg-parchment-dark transition-colors duration-200"
            >
              Register Now <ChevronRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline text-ink border border-wsc-border px-8 py-3.5 hover:border-volt transition-colors duration-200"
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
