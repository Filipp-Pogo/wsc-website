/*
 * 4B Design: Dark footer (#161310), 3-column grid
 * Real content from WSC website crawl
 */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-dark-bg px-6 lg:px-14 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-[1440px] mx-auto">
        {/* Brand */}
        <div>
          <div className="text-parchment text-[13px] tracking-[0.14em] uppercase font-medium mb-2">
            Woodinville Sports Club
          </div>
          <div className="text-volt-bright text-[12px] mb-5">
            Woodinville, Washington — Pacific Northwest
          </div>
          <p className="text-parchment/[0.28] text-[13px] leading-[1.7] max-w-[260px] mb-4">
            A hybrid performance campus for tennis, golf, and athletic development. Serving the Woodinville community since 1979.
          </p>
          <a
            href="https://www.instagram.com/woodinvillesportsclub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-parchment/[0.35] text-[12px] no-underline hover:text-parchment transition-colors duration-200"
          >
            @woodinvillesportsclub
          </a>
        </div>

        {/* Campus */}
        <div>
          <div className="text-volt-bright text-[11px] tracking-[0.18em] uppercase font-medium mb-5">
            Campus
          </div>
          <ul className="list-none space-y-2.5">
            {[
              { href: "/tennis", label: "Tennis" },
              { href: "/golf", label: "Golf" },
              { href: "/fitness", label: "Athletic Performance Lab" },
              { href: "/pickleball", label: "Pickleball" },
              { href: "/summer", label: "Summer Training" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-parchment/[0.35] text-[13px] no-underline hover:text-parchment transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Club */}
        <div>
          <div className="text-volt-bright text-[11px] tracking-[0.18em] uppercase font-medium mb-5">
            Club
          </div>
          <ul className="list-none space-y-2.5">
            {[
              { href: "/membership", label: "Membership" },
              { href: "/about", label: "About WSC" },
              { href: "/contact", label: "Contact Us" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-parchment/[0.35] text-[13px] no-underline hover:text-parchment transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <p className="text-parchment/[0.25] text-[12px] leading-relaxed">
                15327 140th Pl NE<br />
                Woodinville, WA 98072
              </p>
              <p className="text-parchment/[0.25] text-[12px] mt-2">
                Front Desk: (425) 487-1090<br />
                Golf Desk: (425) 485-7319
              </p>
              <a
                href="mailto:info@woodinvillesportsclub.com"
                className="text-parchment/[0.25] text-[12px] no-underline hover:text-parchment/[0.4] transition-colors duration-200 mt-2 inline-block"
              >
                info@woodinvillesportsclub.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-14 pt-8 border-t border-white/[0.06]">
        <p className="text-parchment/[0.2] text-[11px] tracking-[0.1em] uppercase">
          &copy; {new Date().getFullYear()} Woodinville Sports Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
