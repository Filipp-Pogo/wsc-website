/*
 * 4B Design — Contact Page
 * Real content from WSC website crawl
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { toast } from "sonner";
import StructuredData, { getContactPageSchema, getBreadcrumbSchema } from "@/components/StructuredData";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/tennis-courts-exterior_368d9d74.jpg";

export default function Contact() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll be in touch shortly.");
    setForm({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <StructuredData schemas={[
        getContactPageSchema(),
        getBreadcrumbSchema([
          { name: "Home", url: "https://woodinvillesportsclub.com/" },
          { name: "Contact", url: "https://woodinvillesportsclub.com/contact" },
        ]),
      ]} />
      <Navbar />
      <PageHero
        eyebrow="Contact Us"
        headline="Get in Touch."
        subtitle="Questions about membership, programs, or facilities? We'd love to hear from you."
        image={HERO_IMG}
      />

      {/* Form + Info */}
      <section className="bg-parchment px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Send a Message</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-first-name" className="block text-ink-light text-[11px] tracking-[0.14em] uppercase mb-2">
                    First Name
                  </label>
                  <input
                    id="contact-first-name"
                    type="text"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full bg-parchment-mid border border-wsc-border px-4 py-3 text-[14px] text-ink focus:border-volt focus:outline-none transition-colors"
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-last-name" className="block text-ink-light text-[11px] tracking-[0.14em] uppercase mb-2">
                    Last Name
                  </label>
                  <input
                    id="contact-last-name"
                    type="text"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full bg-parchment-mid border border-wsc-border px-4 py-3 text-[14px] text-ink focus:border-volt focus:outline-none transition-colors"
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-ink-light text-[11px] tracking-[0.14em] uppercase mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-parchment-mid border border-wsc-border px-4 py-3 text-[14px] text-ink focus:border-volt focus:outline-none transition-colors"
                  required
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-ink-light text-[11px] tracking-[0.14em] uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full bg-parchment-mid border border-wsc-border px-4 py-3 text-[14px] text-ink focus:border-volt focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-[12px] tracking-[0.14em] uppercase bg-volt-bright text-dark-bg px-8 py-3.5 hover:bg-parchment-dark transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Information</p>
            <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-10">
              Woodinville<br />Sports Club
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-ink-light text-[11px] tracking-[0.14em] uppercase mb-2">Address</p>
                <p className="text-ink text-[16px] leading-[1.7]">
                  15327 140th Pl NE<br />
                  Woodinville, WA 98072
                </p>
              </div>
              <div>
                <p className="text-ink-light text-[11px] tracking-[0.14em] uppercase mb-2">Phone</p>
                <p className="text-ink text-[16px] leading-[1.7]">
                  Front Desk:{" "}
                  <a href="tel:4254871090" className="text-ink no-underline border-b border-volt pb-[2px]">
                    (425) 487-1090
                  </a>
                  <br />
                  Golf Desk:{" "}
                  <a href="tel:4254857319" className="text-ink no-underline border-b border-volt pb-[2px]">
                    (425) 485-7319
                  </a>
                </p>
              </div>
              <div>
                <p className="text-ink-light text-[11px] tracking-[0.14em] uppercase mb-2">Email</p>
                <a
                  href="mailto:info@woodinvillesportsclub.com"
                  className="text-ink text-[16px] no-underline border-b border-volt pb-[2px]"
                >
                  info@woodinvillesportsclub.com
                </a>
              </div>
              <div>
                <p className="text-ink-light text-[11px] tracking-[0.14em] uppercase mb-2">Sports</p>
                <p className="text-ink text-[16px] leading-[1.7]">
                  Tennis, Golf, Fitness, Pickleball
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="bg-parchment-mid px-6 lg:px-14 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">Hours of Operation</p>
          <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-14">
            When we're open.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
            {[
              {
                name: "Tennis & Gym",
                hours: [
                  { day: "Weekdays", time: "6:00 AM – 11:00 PM" },
                  { day: "Weekends", time: "7:00 AM – 10:00 PM" },
                ],
              },
              {
                name: "Golf Range",
                hours: [
                  { day: "Everyday", time: "9:00 AM – 10:00 PM" },
                ],
              },
              {
                name: "Pickleball",
                hours: [
                  { day: "Open Play", time: "7 days/week" },
                  { day: "See schedule", time: "for session times" },
                ],
              },
            ].map((h, i) => (
              <div key={i} className="bg-parchment p-8 lg:p-10">
                <h3 className="text-[20px] font-light tracking-[-0.01em] mb-5">{h.name}</h3>
                <div className="space-y-3">
                  {h.hours.map((hr, hi) => (
                    <div key={hi} className="flex justify-between py-2 border-b border-wsc-border">
                      <span className="text-ink-mid text-[14px]">{hr.day}</span>
                      <span className="text-ink text-[14px]">{hr.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow */}
      <section className="bg-dark-mid px-6 lg:px-14 py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-5">Follow Us</p>
          <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light tracking-[-0.02em] leading-[1.15] mb-4">
            @woodinvillesportsclub
          </h2>
          <p className="text-parchment/60 text-[15px] leading-[1.75] max-w-[480px] mx-auto mb-8">
            Follow us on Instagram for updates, event highlights, and community stories.
          </p>
          <a
            href="https://www.instagram.com/woodinvillesportsclub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[12px] tracking-[0.14em] uppercase no-underline text-parchment border border-volt-bright px-8 py-3.5 hover:bg-volt hover:border-volt transition-colors duration-200"
          >
            Follow on Instagram
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
