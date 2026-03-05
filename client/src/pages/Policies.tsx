/*
 * Policies Page — Comprehensive WSC membership, court booking,
 * cancellation, facility usage, and safety policies.
 * Data sourced from woodinvillesportsclub.com membership agreement
 * and membership policies pages (last updated Sep 14, 2025).
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Link } from "wouter";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663356767696/GmdCMwsk6BDHemXNoKKRRf/about-campus_70f7e2b0.jpg";

/* ── Shared UI ────────────────────────────────────────────── */

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-volt text-[11px] tracking-[0.22em] uppercase mb-5">{children}</p>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[clamp(26px,2.8vw,38px)] font-light tracking-[-0.02em] leading-[1.15] mb-8">
      {children}
    </h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return <div className="space-y-5 text-ink-mid text-[15px] leading-[1.82]">{children}</div>;
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-ink text-[18px] font-light tracking-[-0.01em] mt-8 mb-3">{children}</h3>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 my-4">
      {items.map((item, i) => (
        <li key={i} className="text-ink-mid text-[14px] leading-[1.72] flex items-start gap-3">
          <span className="text-volt text-[10px] mt-1.5">—</span> {item}
        </li>
      ))}
    </ul>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-parchment-mid p-8 my-8">
      {children}
    </div>
  );
}

function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 bg-parchment border-l-2 border-volt my-6">
      {children}
    </div>
  );
}

function FeeTable({ rows }: { rows: { item: string; fee: string }[] }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full text-[14px]">
        <thead>
          <tr className="border-b border-ink/10">
            <th className="text-left text-ink text-[12px] tracking-[0.1em] uppercase py-3 pr-4 font-medium">Item</th>
            <th className="text-right text-ink text-[12px] tracking-[0.1em] uppercase py-3 font-medium">Fee</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-ink/5">
              <td className="text-ink-mid py-3 pr-4">{row.item}</td>
              <td className="text-ink text-right py-3 font-medium whitespace-nowrap">{row.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Quick-nav anchor links ───────────────────────────────── */
const SECTIONS = [
  { id: "membership", label: "Membership Agreement" },
  { id: "court-booking", label: "Court Booking" },
  { id: "cancellation", label: "Cancellation Policies" },
  { id: "classes", label: "Classes & Packages" },
  { id: "guest", label: "Guest Policies" },
  { id: "court-usage", label: "Court Usage Rules" },
  { id: "facility", label: "Facility & Safety" },
  { id: "pricing", label: "Fees & Pricing" },
];

function QuickNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-parchment border-b border-ink/8 sticky top-[130px] z-30">
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden w-full flex items-center justify-between px-6 py-4 text-ink text-[13px] tracking-[0.08em] uppercase font-medium bg-transparent border-none cursor-pointer"
        aria-expanded={open}
      >
        Jump to Section
        <ChevronDown size={16} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {/* Desktop always visible, mobile toggle */}
      <div className={`${open ? "block" : "hidden"} lg:block max-w-[1440px] mx-auto px-6 lg:px-14`}>
        <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-0 py-3 lg:py-0 overflow-x-auto">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="text-ink-mid text-[12px] tracking-[0.08em] uppercase no-underline hover:text-ink transition-colors duration-200 px-3 lg:px-4 py-2.5 whitespace-nowrap"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────── */

export default function Policies() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Club Policies"
        headline="Policies & Guidelines."
        subtitle="Everything you need to know about membership, court booking, cancellations, facility rules, and fees at Woodinville Sports Club."
        image={HERO_IMG}
      />

      <QuickNav />

      {/* 1. Membership Agreement */}
      <section id="membership" className="bg-parchment px-6 lg:px-14 py-24 lg:py-28 scroll-mt-[180px]">
        <div className="max-w-[800px] mx-auto">
          <SectionEyebrow>Membership Agreement</SectionEyebrow>
          <SectionHeading>Membership terms.</SectionHeading>
          <Prose>
            <p>
              The WSC Membership Agreement was last updated on <strong className="text-ink font-normal">January 1, 2024</strong>. WSC retains the right to modify policies without warning. The most current copy of the Membership Guide can be found at WSC or on the WSC website.
            </p>

            <SubHeading>Assumption of Risk & Liability Waiver</SubHeading>
            <p>
              Using WSC facilities, services, or activities involves the risk of injury, ranging from minor to catastrophic injuries including death. By becoming a member, you voluntarily accept this risk and agree that WSC, its officers, directors, employees, volunteers, agents, and independent contractors will not be liable for any injury. You agree to indemnify, defend, and hold WSC harmless against any liability, damages, defense costs, or attorney's fees incurred in connection with claims for bodily injury, wrongful death, or property damage.
            </p>

            <SubHeading>Payment Terms</SubHeading>
            <p>
              All payments are processed through Electronic Funds Transfer (EFT) from your financial account (credit/debit card or checking/savings account). Payment is charged on the join date and recurs based on membership type. A joining or rejoining fee is assessed at the start of membership, including for returning customers previously enrolled with passes or memberships. It is the member's responsibility to keep all account information accurate and current.
            </p>

            <SubHeading>Default & Late Payments</SubHeading>
            <p>
              A default occurs when any payment is more than ten (10) days late. A late fee will be charged for payments more than 10 days past due. An additional service fee may be charged for any returned check, draft, or credit card. WSC reserves the right to declare the entire remaining balance due and payable, and the member agrees to pay all costs of collection, including agency fees, court costs, and attorney fees. WSC's Designated Billing Company, Caliber Labs, LLC, reserves the right to draft all amounts owed via EFT.
            </p>

            <SubHeading>Disability & Account Freeze</SubHeading>
            <BulletList items={[
              "Temporary disability: account may be frozen for up to 3 months with written request and physician note",
              "Medical issues are the only circumstance for account freeze",
              "Permanent disability: may cancel with standard 30-day notice; if already frozen for medical reasons, the 30-day notice may be waived",
              "During a freeze, a fee will be assessed as outlined in the agreement, and regular payments and time will be added to the end of the existing term",
            ]} />

            <SubHeading>Member Obligations</SubHeading>
            <p>
              Members agree to abide by all WSC policies, follow staff directions regarding safety and security, treat staff and other members with courtesy, pay monthly dues on time, and notify WSC promptly if payment information changes. Members who fail to use WSC facilities are not released from the obligation to make all payments required by the agreement.
            </p>

            <SubHeading>Dispute Resolution</SubHeading>
            <p>
              All disputes (except small claims under $1,000) will be settled by binding arbitration before a single arbitrator under the Federal Arbitration Act, conducted by the American Arbitration Association. Arbitration takes place in the county where WSC is located, and the decision is final and binding on all parties.
            </p>
          </Prose>
        </div>
      </section>

      {/* 2. Court Booking */}
      <section id="court-booking" className="bg-parchment-mid px-6 lg:px-14 py-20 lg:py-24 scroll-mt-[180px]">
        <div className="max-w-[800px] mx-auto">
          <SectionEyebrow>Court Booking</SectionEyebrow>
          <SectionHeading>Reservation policies.</SectionHeading>
          <Prose>
            <SubHeading>Online Booking</SubHeading>
            <p>
              Online booking reservations open daily at 8:00 AM through CourtReserve, with a 7-day booking window. Members may select a duration of 30, 60, or 90 minutes per session.
            </p>

            <InfoBox>
              <h3 className="text-[18px] font-light tracking-[-0.01em] mb-5">Key Booking Rules</h3>
              <div className="space-y-5">
                <div>
                  <span className="text-ink text-[14px] font-medium">Three-Reservation Limit</span>
                  <p className="text-ink-mid text-[14px] leading-[1.72] mt-1">
                    Members are limited to 3 active reservations within any rolling 7-day period. "Active reservations" include any current bookings within the next seven days. This ensures fairer access to preferred time slots for all members.
                  </p>
                </div>
                <div className="border-t border-ink/10 pt-5">
                  <span className="text-ink text-[14px] font-medium">Single Court Rule</span>
                  <p className="text-ink-mid text-[14px] leading-[1.72] mt-1">
                    Members can only book one court at a time — no side-by-side bookings. This increases court availability and prevents defensive booking practices.
                  </p>
                </div>
                <div className="border-t border-ink/10 pt-5">
                  <span className="text-ink text-[14px] font-medium">No 30-Minute Gaps</span>
                  <p className="text-ink-mid text-[14px] leading-[1.72] mt-1">
                    The system will not allow bookings that create 30-minute gaps between reservations. This eliminates "dead time" where courts sit empty but are not long enough for a proper session, adding approximately 20 more bookable court hours per week.
                  </p>
                </div>
              </div>
            </InfoBox>

            <SubHeading>Check-In Process</SubHeading>
            <p>
              All members and guests must check in at the front desk or by using the CourtReserve App before going to court. Failure to check in or provide complete participant information will result in a full court fee. Window drive-up check-in is no longer available — you must enter the building and use your QR code, verify your identity, or use the CourtReserve App.
            </p>

            <SubHeading>USTA Team Reservations</SubHeading>
            <p>
              Visiting teams can only reserve warmup courts the day of the match. Home teams can reserve their warmup court up to 7 days in advance by the WSC captain. USTA fees for home and visiting teams are $21 + tax per court and include a can of Babolat balls from the retail shop.
            </p>
          </Prose>
        </div>
      </section>

      {/* 3. Cancellation Policies */}
      <section id="cancellation" className="bg-parchment px-6 lg:px-14 py-20 lg:py-24 scroll-mt-[180px]">
        <div className="max-w-[800px] mx-auto">
          <SectionEyebrow>Cancellations</SectionEyebrow>
          <SectionHeading>Cancellation policies.</SectionHeading>
          <Prose>
            <SubHeading>Membership Cancellation</SubHeading>
            <BulletList items={[
              "Accounts continue to accrue monthly fees until explicitly canceled by the member. WSC will not automatically cancel any membership.",
              "Members may cancel and receive a full refund within 3 business days of signing by providing written notice and returning all access cards.",
              "To cancel, email CANCEL@WOODINVILLESPORTSCLUB.COM. If the cancellation date is less than 30 days from the next billing date, you will be billed the full amount of dues per contract terms.",
              "Annual fees, prepaid dues, programming, lessons, and punch cards will not be refunded regardless of illness, injury, or personal circumstance. Funds may be returned as balance credits only when allowed.",
              "WSC reserves the right to cancel or suspend any membership for any reason. If due to policy violations, the member remains responsible for all financial obligations.",
            ]} />

            <SubHeading>Court Cancellation</SubHeading>
            <HighlightBox>
              <p className="text-ink text-[15px] leading-[1.72]">
                <strong className="font-medium">24-hour notice</strong> is required for court cancellation (regardless of illness, injury, or personal circumstance) to receive a balance credit on the account. Members are responsible for all no-show or late-canceled court fees and may not book new courts until any outstanding late-canceled fees are paid.
              </p>
            </HighlightBox>
            <p>
              Cancellations may not be used as a workaround to avoid court booking rules and restrictions. Members who engage in cancellation patterns to avoid compliance with the intent of the policy risk account suspension.
            </p>

            <SubHeading>Class & Program Cancellation</SubHeading>
            <HighlightBox>
              <p className="text-ink text-[15px] leading-[1.72]">
                <strong className="font-medium">7-day notice</strong> is required for cancellation of classes, clinics, and camps (regardless of illness, injury, or personal circumstance) to receive a balance credit. No makeup classes are offered under any circumstances.
              </p>
            </HighlightBox>

            <SubHeading>Private Lesson Cancellation</SubHeading>
            <p>
              Private lessons must be canceled at least 24 hours in advance, or you will be charged the full lesson fee regardless of the reason. Credit will only be issued as a balance credit on your WSC account. When canceling, contact your coach directly, who will cancel the court reservation as needed.
            </p>

            <SubHeading>Summer Camp Cancellation</SubHeading>
            <p>
              Summer camp cancellations require 7-day notice to receive a balance credit. If WSC must cancel a camp or event for any reason, all registered participants will be notified as soon as possible via email, phone, or text message. Registration is not finalized until payment is received.
            </p>
          </Prose>
        </div>
      </section>

      {/* 4. Classes & Packages */}
      <section id="classes" className="bg-parchment-mid px-6 lg:px-14 py-20 lg:py-24 scroll-mt-[180px]">
        <div className="max-w-[800px] mx-auto">
          <SectionEyebrow>Classes & Packages</SectionEyebrow>
          <SectionHeading>Program policies.</SectionHeading>
          <Prose>
            <SubHeading>Class Requirements</SubHeading>
            <p>
              All participants in classes, clinics, and private lessons must have a valid WSC Pass or Membership. This includes participants from both WSC programs and authorized guest coaches. If WSC must cancel a class or event for any reason, all registered participants will be notified as soon as possible.
            </p>

            <SubHeading>Waitlist Policy</SubHeading>
            <HighlightBox>
              <p className="text-ink text-[15px] leading-[1.72]">
                By joining a waitlist, you agree to be <strong className="font-medium">automatically added to the class and charged</strong> when a spot becomes available, without prior notification.
              </p>
            </HighlightBox>

            <SubHeading>Package Policy</SubHeading>
            <InfoBox>
              <div className="space-y-4">
                <div>
                  <span className="text-ink text-[14px] font-medium">Expiration</span>
                  <p className="text-ink-mid text-[14px] leading-[1.72] mt-1">
                    Packages expire 31 days after purchase. Unused classes do not roll over — once the package expires, any remaining unbooked classes are forfeited.
                  </p>
                </div>
                <div className="border-t border-ink/10 pt-4">
                  <span className="text-ink text-[14px] font-medium">Class Cancellations within a Package</span>
                  <p className="text-ink-mid text-[14px] leading-[1.72] mt-1">
                    If you cancel a class more than 48 hours in advance, the class will be returned to your package balance and can be used within the package's 31-day validity period.
                  </p>
                </div>
                <div className="border-t border-ink/10 pt-4">
                  <span className="text-ink text-[14px] font-medium">No Refunds on Packages</span>
                  <p className="text-ink-mid text-[14px] leading-[1.72] mt-1">
                    Once a package is purchased, there will be no account credits or refunds offered.
                  </p>
                </div>
              </div>
            </InfoBox>

            <SubHeading>Private Lessons</SubHeading>
            <BulletList items={[
              "Private instruction by unauthorized coaches is strictly prohibited. Violators are subject to fines and loss of booking privileges.",
              "Customers schedule directly with WSC teaching staff through CourtReserve.",
              "For instructor requests, email info@woodinvillesportsclub.com.",
              "Arrive 10–15 minutes before your lesson and check in at the front desk before going to court.",
            ]} />
          </Prose>
        </div>
      </section>

      {/* 5. Guest Policies */}
      <section id="guest" className="bg-parchment px-6 lg:px-14 py-20 lg:py-24 scroll-mt-[180px]">
        <div className="max-w-[800px] mx-auto">
          <SectionEyebrow>Guest Policies</SectionEyebrow>
          <SectionHeading>Bringing guests.</SectionHeading>
          <Prose>
            <p>
              WSC members are welcome to bring friends, family members, and co-workers to enjoy the facilities. Payment of the applicable guest fee is required before using the facility, and the member must be present.
            </p>

            <FeeTable rows={[
              { item: "Tennis Guest Fee", fee: "$10 + tax / guest / court reservation" },
              { item: "Pickleball Guest Fee", fee: "$5 + tax / guest / court reservation" },
            ]} />

            <p>
              Members can pay the guest fee at the time of booking through CourtReserve. If the guest does not pay, the member who made the booking will be responsible for the guest fee.
            </p>

            <HighlightBox>
              <p className="text-ink text-[15px] leading-[1.72]">
                If the guest policy is violated, at the sole discretion of facility management, the member may be charged a guest fee and/or have their membership suspended or canceled, with the balance declared due and payable in full immediately, and be assessed a penalty of up to <strong className="font-medium">$250.00</strong>.
              </p>
            </HighlightBox>

            <SubHeading>Access Card & Photo Policy</SubHeading>
            <p>
              Members may not allow anyone else to use their access card and must alert WSC immediately if it is lost or stolen. All CourtReserve accounts must include current photos of all users associated with the account. Photos can be taken at the front desk. This is for enhanced security and personalized service.
            </p>

            <SubHeading>Age Restrictions</SubHeading>
            <BulletList items={[
              "Members up to 12 years of age are only permitted under the direct supervision of a parent or legal guardian",
              "Members ages 15–17 are permitted unsupervised with the written consent of a parent or legal guardian",
              "Participation with WSC coaches is allowed for all age ranges",
              "Golf may be used by members 12 and above unsupervised",
            ]} />
          </Prose>
        </div>
      </section>

      {/* 6. Court Usage Rules */}
      <section id="court-usage" className="bg-parchment-mid px-6 lg:px-14 py-20 lg:py-24 scroll-mt-[180px]">
        <div className="max-w-[800px] mx-auto">
          <SectionEyebrow>Court Usage</SectionEyebrow>
          <SectionHeading>Court rules & equipment.</SectionHeading>
          <Prose>
            <SubHeading>Equipment Restrictions</SubHeading>
            <p>
              Outside ball machines and ball hoppers are prohibited on WSC courts. Rental baskets of Babolat balls are available for a $15 + tax fee. This policy helps prevent unauthorized external coaching, protects court surfaces, and maintains the quality of balls used in programs. The Playmate Smash ball machine remains available for rent on courts #7 and #8.
            </p>

            <SubHeading>Footwear Requirements</SubHeading>
            <p>
              Court shoes specifically designed for tennis or pickleball must be worn on court — no sneakers or running shoes. This is for the safety of players and to prevent damage to the court surfaces. Court shoes provide extra grip and stability for the quick side-to-side movements required in tennis and pickleball.
            </p>

            <SubHeading>Dress Code</SubHeading>
            <p>
              Members must abide by the WSC dress code at all times while in the facility. A shirt or top must be worn at all times. Proper footwear for the environment being used is required.
            </p>
          </Prose>
        </div>
      </section>

      {/* 7. Facility & Safety */}
      <section id="facility" className="bg-parchment px-6 lg:px-14 py-20 lg:py-24 scroll-mt-[180px]">
        <div className="max-w-[800px] mx-auto">
          <SectionEyebrow>Facility & Safety</SectionEyebrow>
          <SectionHeading>Facility rules & safety notices.</SectionHeading>
          <Prose>
            <SubHeading>Facility Maintenance</SubHeading>
            <p>
              WSC may be temporarily closed for periods of up to two (2) weeks each year for maintenance purposes. If a Facility Maintenance Charge is implemented in the future, members will be given a minimum of sixty (60) days' notice of the amount owed and due date.
            </p>

            <SubHeading>Lockers</SubHeading>
            <p>
              Lockers are for day use only. Members are responsible for providing their own lock. Contents on lockers left overnight will be removed at the end of the business day. WSC is not responsible for any lost or stolen items.
            </p>

            <SubHeading>Personal Training</SubHeading>
            <p>
              Personal training services may be provided by employees or by independent contractors operating their own business. All payments for personal training services are to be made to WSC (unless otherwise arranged with WSC Management), who will then pay the trainers as the services are provided.
            </p>

            <SubHeading>Equipment & Orientation</SubHeading>
            <BulletList items={[
              "All members have access to a free orientation to the facility and proper use of equipment — it is the member's responsibility to request this orientation",
              "Members are individually responsible for wiping down equipment and re-racking weights after use",
              "Members are required to use the safety features of equipment. If unsure how to use a machine, obtain instructions from staff or personal trainers",
            ]} />

            <SubHeading>Code of Conduct</SubHeading>
            <BulletList items={[
              "No loud or profane language on WSC premises",
              "No harassment, assault, or intimidation of other members, guests, or employees — such behavior results in immediate cancellation",
              "No commercial or business activity while using facilities unless allowed by WSC Management; no acting as a trainer for other members or guests",
              "No drugs or steroids on WSC premises",
            ]} />

            <SubHeading>Photography & Media</SubHeading>
            <p>
              WSC may take images or videos of members and guests for marketing or social media purposes. If you do not wish to have images taken, please let management know by emailing info@woodinvillesportsclub.com so that you can opt out.
            </p>
          </Prose>
        </div>
      </section>

      {/* 8. Fees & Pricing */}
      <section id="pricing" className="bg-parchment-mid px-6 lg:px-14 py-20 lg:py-24 scroll-mt-[180px]">
        <div className="max-w-[800px] mx-auto">
          <SectionEyebrow>Fees & Pricing</SectionEyebrow>
          <SectionHeading>Current fee schedule.</SectionHeading>
          <Prose>
            <p>
              The following fees are effective as of January 1, 2025. Pricing for events and classes is no longer tax inclusive. WSC reserves the right to update fees with appropriate notice.
            </p>

            <FeeTable rows={[
              { item: "Court Time (per 30 minutes)", fee: "$21.14 + tax" },
              { item: "Tennis Guest Fee (per court reservation)", fee: "$10 + tax" },
              { item: "Pickleball Guest Fee (per court reservation)", fee: "$5 + tax" },
              { item: "Ball Basket Rental (Babolat)", fee: "$15 + tax" },
              { item: "USTA Team Fee (per court, includes balls)", fee: "$21 + tax" },
              { item: "New Member Initiation Fee (one-time)", fee: "$50 + tax" },
            ]} />

            <SubHeading>Court Rate Details</SubHeading>
            <p>
              Members can select a duration of 30, 60, or 90 minutes when booking courts. Each 30-minute increment is charged at $21.14 + tax. There are no separate rates for singles and doubles, which simplifies the booking process and provides more flexibility.
            </p>

            <HighlightBox>
              <p className="text-ink text-[15px] leading-[1.72]">
                <strong className="font-medium">Questions about fees?</strong> Contact the front desk at{" "}
                <a href="tel:+14254871090" className="text-volt no-underline hover:underline">(425) 487-1090</a> or email{" "}
                <a href="mailto:info@woodinvillesportsclub.com" className="text-volt no-underline hover:underline">info@woodinvillesportsclub.com</a>.
              </p>
            </HighlightBox>
          </Prose>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-bg px-6 lg:px-14 py-20 lg:py-24">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-volt-bright text-[11px] tracking-[0.22em] uppercase mb-5">Questions?</p>
          <h2 className="text-parchment text-[clamp(26px,3vw,42px)] font-light tracking-[-0.02em] leading-[1.15] mb-6">
            We're here to help.
          </h2>
          <p className="text-parchment/65 text-[15px] leading-[1.72] mb-10 max-w-[500px] mx-auto">
            If you have questions about any of our policies, please don't hesitate to reach out. Our front desk staff is trained to assist with all policy-related inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="text-[12px] tracking-[0.1em] uppercase no-underline text-dark-bg bg-volt-bright px-8 py-4 hover:bg-parchment transition-colors duration-200 inline-block"
            >
              Contact Us
            </Link>
            <Link
              href="/membership"
              className="text-[12px] tracking-[0.1em] uppercase no-underline text-parchment border border-parchment/30 px-8 py-4 hover:bg-parchment/10 transition-colors duration-200 inline-block"
            >
              View Membership
            </Link>
          </div>
          <p className="text-parchment/50 text-[12px] mt-8">
            Policies last updated September 14, 2025. WSC retains the right to modify policies without warning.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
