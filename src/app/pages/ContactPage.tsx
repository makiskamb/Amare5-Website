import { useState } from "react";

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`am-reveal am-reveal-d${(index % 5) + 1} border-t border-[#3a3028]/10`}
      style={{ borderBottom: index === 7 ? "1px solid rgba(58,48,40,0.1)" : undefined }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span style={{ fontFamily: "'Noto Serif Display', serif", fontSize: "clamp(15px, 2vw, 18px)", color: "#3a3028", fontWeight: 400 }}>
          {question}
        </span>
        <span
          className="flex-shrink-0 ml-6 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", color: "#9A8B7A", fontSize: "20px", lineHeight: 1 }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "300px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <p className="pb-6" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "14px", color: "#3a3028", lineHeight: 2, opacity: 0.75 }}>
          {answer}
        </p>
      </div>
    </div>
  );
}
import { useLanguage } from "../context/LanguageContext";
import { PageHero } from "../components/PageHero";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.jpg";

export function ContactPage() {
  const { t } = useLanguage();
  const pc = t.pages.contact;
  const villaKeys = ["thalassa", "petra", "elia", "helios", "selene"] as const;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "",
    villa: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    fontFamily: "'Catamaran', sans-serif",
    fontSize: "13px",
    color: "#3a3028",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Catamaran', sans-serif",
    fontSize: "9px",
    color: "#9A8B7A",
    fontWeight: 500,
    letterSpacing: "0.35em",
    textTransform: "uppercase",
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#3a3028]/18 py-3 outline-none focus:border-[#3a3028] transition-colors placeholder:text-[#3a3028]/25";

  return (
    <div style={{ backgroundColor: "#F5F0EB" }}>
      <PageHero image={beachfrontView} title={pc.heroTitle} subtitle={pc.heroSubtitle} />

      {/* Intro */}
      <section className="py-20 px-6 md:px-16 text-center" style={{ backgroundColor: "#F5F0EB" }}>
        <p
          className="max-w-2xl mx-auto"
          style={{
            fontFamily: "'Nanum Myeongjo', serif",
            fontSize: "15px",
            color: "#3a3028",
            lineHeight: 2,
            opacity: 0.8,
          }}
        >
          {pc.intro}
        </p>
      </section>

      {/* ── How it works ── */}
      <section className="pb-20 px-6 md:px-16" style={{ backgroundColor: "#EDE8E1" }}>
        <div className="max-w-6xl mx-auto">
          <p className="am-reveal text-center uppercase tracking-[0.5em] mb-12 pt-16" style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "9px", color: "#9A8B7A", fontWeight: 500 }}>
            How it works
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { step: "01", title: "Inquire", body: "Send us a message with your preferred dates, villa, and number of guests. No commitment required." },
              { step: "02", title: "Confirm", body: "We'll respond within 24 hours with availability, a tailored quote, and all the details you need." },
              { step: "03", title: "Arrive", body: "Once confirmed, simply arrive and let us take care of everything. Your stay begins the moment you do." },
            ].map(({ step, title, body }, i) => (
              <div
                key={step}
                className={`am-reveal am-reveal-d${i + 1} p-10 md:p-14 relative`}
                style={{ borderLeft: i > 0 ? "1px solid rgba(58,48,40,0.1)" : undefined }}
              >
                <p className="mb-6" style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "9px", color: "#9A8B7A", fontWeight: 500, letterSpacing: "0.4em" }}>
                  {step}
                </p>
                <h3 className="mb-4" style={{ fontFamily: "'Noto Serif Display', serif", fontSize: "clamp(22px, 3vw, 32px)", color: "#3a3028", fontWeight: 400 }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "14px", color: "#3a3028", lineHeight: 2, opacity: 0.75 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="pb-24 px-6 md:px-16" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-12 h-px bg-[#9A8B7A] mb-6" />
                <p
                  style={{
                    fontFamily: "'Noto Serif Display', serif",
                    fontSize: "22px",
                    color: "#3a3028",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {pc.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="am-reveal am-reveal-d1">
                  <label style={labelStyle}>{pc.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={inputStyle}
                    placeholder="—"
                  />
                </div>

                <div className="am-reveal am-reveal-d2">
                  <label style={labelStyle}>{pc.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={inputStyle}
                    placeholder="—"
                  />
                </div>

                <div className="am-reveal am-reveal-d3">
                  <label style={labelStyle}>{pc.form.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                    placeholder="—"
                  />
                </div>

                <div className="am-reveal am-reveal-d4 grid grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>{pc.form.dates}</label>
                    <input
                      type="text"
                      name="dates"
                      value={form.dates}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="DD/MM — DD/MM"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{pc.form.guests}</label>
                    <input
                      type="number"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      min={1}
                      max={10}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="—"
                    />
                  </div>
                </div>

                <div className="am-reveal am-reveal-d5">
                  <label style={labelStyle}>{pc.form.villaLabel}</label>
                  <select
                    name="villa"
                    value={form.villa}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                    style={{ ...inputStyle, appearance: "none" }}
                  >
                    <option value="" style={{ color: "#9A8B7A" }}>
                      {pc.selectVilla}
                    </option>
                    {villaKeys.map((key) => (
                      <option key={key} value={key} style={{ backgroundColor: "#F5F0EB" }}>
                        {t.villas[key].name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="am-reveal">
                  <label style={labelStyle}>{pc.form.message}</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                    placeholder="—"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full uppercase tracking-[0.35em] border border-[#3a3028]/30 py-4 hover:bg-[#3a3028] hover:text-white hover:border-[#3a3028] transition-all duration-300"
                  style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", fontWeight: 500, color: "#3a3028" }}
                >
                  {pc.form.submit}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-10 pt-4">
            <div className="w-10 h-px bg-[#3a3028]/20" />

            {/* Reach us */}
            <div className="am-reveal am-reveal-d1">
              <p className="uppercase tracking-[0.35em] mb-3" style={{ ...labelStyle }}>
                {pc.reachUs}
              </p>
              <div className="space-y-1">
                <p style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "14px", color: "#3a3028", lineHeight: 2.2 }}>
                  T: +30 2593 000000
                </p>
                <p style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "14px", color: "#3a3028", lineHeight: 2.2 }}>
                  E:{" "}
                  <a href="mailto:info@amare5.gr" className="hover:opacity-60 transition-opacity">
                    info@amare5.gr
                  </a>
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="am-reveal am-reveal-d2">
              <p className="uppercase tracking-[0.35em] mb-3" style={{ ...labelStyle }}>
                {t.footer.locationLabel}
              </p>
              <p style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "14px", color: "#3a3028", lineHeight: 2.2 }}>
                {t.footer.locationLine1}
                <br />
                {t.footer.locationLine2}
              </p>
            </div>

            {/* Check-in / Check-out */}
            <div className="am-reveal am-reveal-d3">
              <p className="uppercase tracking-[0.35em] mb-4" style={{ ...labelStyle }}>
                Check-In / Check-Out
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="uppercase tracking-[0.2em] mb-1"
                    style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "9px", color: "#9A8B7A", fontWeight: 500 }}>
                    Check-In
                  </p>
                  <p style={{ fontFamily: "'Noto Serif Display', serif", fontSize: "16px", color: "#3a3028" }}>
                    From 15:00
                  </p>
                </div>
                <div>
                  <p className="uppercase tracking-[0.2em] mb-1"
                    style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "9px", color: "#9A8B7A", fontWeight: 500 }}>
                    Check-Out
                  </p>
                  <p style={{ fontFamily: "'Noto Serif Display', serif", fontSize: "16px", color: "#3a3028" }}>
                    Until 11:00
                  </p>
                </div>
              </div>
              <p className="mt-3" style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "11px", color: "#9A8B7A", lineHeight: 1.7 }}>
                Early check-in & late check-out available upon request.
              </p>
            </div>

            {/* Office hours */}
            <div className="am-reveal am-reveal-d4">
              <p className="uppercase tracking-[0.35em] mb-3" style={{ ...labelStyle }}>
                {pc.hours}
              </p>
              <p style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "14px", color: "#3a3028", lineHeight: 2 }}>
                {pc.hoursValue}
              </p>
            </div>

            {/* Google Maps embed */}
            <div>
              <p className="uppercase tracking-[0.35em] mb-3" style={{ ...labelStyle }}>
                Location
              </p>
              <div className="am-reveal overflow-hidden" style={{ height: "260px" }}>
                <iframe
                  title="Amare5 location — Limenaria, Thassos"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Limenaria,Thassos,Greece&t=&z=14&ie=UTF8&iwloc=&output=embed"
                />
              </div>
              <p
                className="mt-2 text-right"
                style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", color: "#9A8B7A" }}
              >
                Limenaria, Thassos — 40.5934° N, 24.5647° E
              </p>
            </div>

            {/* Social */}
            <div>
              <p className="uppercase tracking-[0.35em] mb-3" style={{ ...labelStyle }}>
                {t.footer.followUsLabel}
              </p>
              <div className="flex gap-5">
                {[
                  { label: "Instagram", href: "https://instagram.com" },
                  { label: "Facebook", href: "https://facebook.com" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="am-nav-link hover:opacity-50 transition-opacity"
                    style={{
                      fontFamily: "'Catamaran', sans-serif",
                      fontSize: "11px",
                      color: "#3a3028",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── FAQ ── */}
      <section className="py-24 px-6 md:px-16" style={{ backgroundColor: "#EDE8E1" }}>
        <div className="max-w-3xl mx-auto">
          <p className="am-reveal uppercase tracking-[0.5em] mb-3 text-center" style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "9px", color: "#9A8B7A", fontWeight: 500 }}>
            FAQ
          </p>
          <h2 className="am-reveal am-reveal-d1 text-center mb-16" style={{ fontFamily: "'Noto Serif Display', serif", fontSize: "clamp(24px, 3.5vw, 38px)", color: "#3a3028", fontWeight: 400 }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-0">
            {[
              { q: "What is the minimum stay?", a: "Our villas require a minimum of 3 nights. During peak season (July–August) a 7-night minimum applies." },
              { q: "What is your pricing?", a: "Rates vary by villa, season, and duration. Contact us for a tailored quote — we're happy to find the best option for your stay." },
              { q: "What is included in the villa?", a: "Each villa includes daily housekeeping, welcome hamper, private pool, high-speed Wi-Fi, air conditioning, and a fully equipped kitchen. Breakfast is available on request." },
              { q: "What is your cancellation policy?", a: "Cancellations 90+ days before arrival receive a full refund. 60–90 days: 50% refund. Under 60 days: non-refundable. See our Terms & Conditions for full details." },
              { q: "Can I host events or gatherings?", a: "Small private gatherings for villa guests are welcome. Larger events require prior approval — please mention this in your enquiry." },
              { q: "Are pets allowed?", a: "We love animals, but unfortunately pets are not permitted in our villas at this time." },
              { q: "Is airport transfer available?", a: "Yes. We can arrange private transfers from Kavala Airport (KVA) or Thessaloniki Airport (SKG). Please enquire when booking." },
              { q: "Can I request early check-in or late check-out?", a: "We'll do our best to accommodate, subject to availability. Please let us know in advance and we'll arrange it." },
            ].map(({ q, a }, i) => (
              <FAQItem key={i} question={q} answer={a} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
