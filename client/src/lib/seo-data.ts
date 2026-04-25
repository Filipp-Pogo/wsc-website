/**
 * Centralized SEO metadata for all pages.
 * Each entry maps to a route and provides title, description, and path.
 */
export const SEO = {
  home: {
    title: "Tennis, Golf, Pickleball & Athletic Performance",
    description:
      "Woodinville Sports Club is a 67-acre performance campus in Woodinville, WA. 8 indoor tennis courts, 23 covered driving bays, Swing Lab simulators, pickleball, and APL athletic training. Home to Tier 1 Sports by Caliber.",
    path: "/",
  },
  tennis: {
    title: "Tennis Programs & Indoor Courts",
    description:
      "8 climate-controlled indoor tennis courts, Tier 1 Tennis Academy, adult and junior programs, private lessons, and court booking via CourtReserve. Book courts at $21.14/30min at Woodinville Sports Club.",
    path: "/tennis",
  },
  golf: {
    title: "Golf Range, Swing Lab Simulators & Tier 1 Academy",
    description:
      "23 covered driving bays with free Toptracer, 4 Uneekor Swing Lab simulators, Tier 1 Golf Academy, private lessons, and a 2.5-acre short game area. Range buckets from $8 at Woodinville Sports Club.",
    path: "/golf",
  },
  gym: {
    title: "Gym, Fitness Center & APL Athletic Performance",
    description:
      "Full-service gym with weight room, functional training area, sauna, and locker rooms. APL group classes including Build, Ignite, Speed School, and more. Monthly All-Access from $40/mo at WSC.",
    path: "/gym",
  },
  pickleball: {
    title: "Pickleball at The Dome — Open Play, Lessons & Tournaments",
    description:
      "8 indoor pickleball courts at The Dome with open play 7 days a week. Sessions from $18, private court rental $25/hr, DUPR Ladder, 4 annual PIG tournaments, and beginner-to-advanced classes at WSC.",
    path: "/pickleball",
  },
  summer: {
    title: "Summer Training Programs & Camps 2026",
    description:
      "Summer training at WSC from June 29 to August 30, 2026. Tennis Academy, Golf Academy, and Adventure Club multi-sport camps for ages 3-18. Weekly sessions with full-day and half-day options.",
    path: "/summer",
  },
  membership: {
    title: "Membership Plans & Pricing",
    description:
      "6 membership tiers from $20 one-time trial to $100/mo Family All-Access. Court booking, golf simulator access, gym and fitness, and class registration. Join Woodinville Sports Club today.",
    path: "/membership",
  },
  about: {
    title: "About WSC — 67-Acre Campus Since 1979",
    description:
      "Founded in 1979, Woodinville Sports Club is a 67-acre hybrid performance campus in Woodinville, WA. A Caliber Sports facility and home to Tier 1 Sports — one of the nation's leading developmental programs.",
    path: "/about",
  },
  contact: {
    title: "Contact Us — Hours, Directions & Inquiries",
    description:
      "Contact Woodinville Sports Club at (425) 487-1090 or info@woodinvillesportsclub.com. Located at 15327 140th Pl NE, Woodinville, WA 98072. Tennis, golf, gym, and pickleball facility hours.",
    path: "/contact",
  },
  proShop: {
    title: "Pro Shop — Gear, Apparel & Equipment",
    description:
      "Visit the WSC Pro Shop for tennis rackets, golf equipment, pickleball paddles, athletic apparel, and accessories. Expert staff and stringing services available on campus.",
    path: "/pro-shop",
  },
  policies: {
    title: "Club Policies & Terms of Service",
    description:
      "Review Woodinville Sports Club's membership policies, facility rules, code of conduct, cancellation policies, and terms of service. Guest policies and court booking guidelines.",
    path: "/policies",
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "Woodinville Sports Club's privacy policy covering data collection, usage, cookies, and your rights. Learn how we protect your personal information.",
    path: "/privacy",
  },
  faq: {
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about Woodinville Sports Club membership, pricing, court booking, facility hours, cancellation policies, and guest access.",
    path: "/faq",
  },
  accessibility: {
    title: "Accessibility Statement",
    description:
      "Woodinville Sports Club's commitment to digital accessibility. Learn about our WCAG compliance efforts and how to request accommodations.",
    path: "/accessibility",
  },
} as const;
