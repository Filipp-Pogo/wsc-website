/*
 * 4B Design: Dark nav bar (#161310), Inter 500 logo, 12px uppercase links
 * Volt-bright CTA button, subtle border-bottom on nav-inner
 */
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/tennis", label: "Tennis" },
  { href: "/golf", label: "Golf" },
  { href: "/fitness", label: "APL Fitness" },
  { href: "/pickleball", label: "Pickleball" },
  { href: "/summer", label: "Summer" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg">
      {/* Caliber Sports top bar */}
      <div className="bg-dark-mid px-6 lg:px-14 py-1.5 flex items-center justify-between border-b border-white/[0.05]">
        <span className="text-parchment/30 text-[10px] tracking-[0.16em] uppercase">A Caliber Sports Facility</span>
        <a
          href="https://www.calibersports.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-parchment/25 text-[10px] tracking-[0.1em] uppercase no-underline hover:text-parchment/50 transition-colors duration-200"
        >
          calibersports.com
        </a>
      </div>
      <div className="flex items-center justify-between px-6 lg:px-14 py-5 border-b border-white/[0.08]">
        <Link href="/" className="text-parchment text-[13px] tracking-[0.14em] uppercase font-medium no-underline">
          Woodinville Sports Club
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[12px] tracking-[0.1em] uppercase no-underline transition-colors duration-200 ${
                  location === link.href
                    ? "text-parchment"
                    : "text-parchment/[0.45] hover:text-parchment"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/membership"
          className="hidden lg:inline-block text-[12px] tracking-[0.1em] uppercase no-underline text-dark-bg bg-volt-bright px-6 py-2.5 hover:bg-parchment transition-colors duration-200"
        >
          Membership
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-parchment"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-bg border-t border-white/[0.08] px-6 py-6">
          <ul className="flex flex-col gap-5 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[13px] tracking-[0.1em] uppercase no-underline ${
                    location === link.href
                      ? "text-parchment"
                      : "text-parchment/[0.45]"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/membership"
                className="inline-block text-[12px] tracking-[0.1em] uppercase no-underline text-dark-bg bg-volt-bright px-6 py-2.5 mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Membership
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
