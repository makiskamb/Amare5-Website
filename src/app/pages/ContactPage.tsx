import { useState } from "react";
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
                <div>
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

                <div>
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

                <div>
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

                <div className="grid grid-cols-2 gap-6">
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

                <div>
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

                <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
              <div className="overflow-hidden" style={{ height: "260px" }}>
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
    </div>
  );
}
