import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { PageHero } from "../components/PageHero";
import poolArea from "../../assets/f360338b40e15ac219a17663de6ea3766e5dc3d2.png";
import aerialView from "../../assets/c9bb529b302b3d2b068711779b6d02c3a4cf6ff6.png";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.png";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.png";
import diningArea from "../../assets/2717ed628ed4f4d73050575531c0e1a3eac316c6.png";

const villaImages = [beachfrontView, poolArea, aerialView, firePitLounge, diningArea];

interface Addon {
  id: string;
  label: { en: string; gr: string };
  desc: { en: string; gr: string };
  price: string;
}

const ADDONS: Addon[] = [
  {
    id: "beach",
    label: { en: "Private Beach Setup",       gr: "Ιδιωτική Παραλία" },
    desc:  { en: "Sun beds, umbrella & towel service", gr: "Ξαπλώστρες, ομπρέλα & υπηρεσία πετσέτας" },
    price: "+€50 / day",
  },
  {
    id: "boat",
    label: { en: "Sunset Boat Excursion",      gr: "Εκδρομή με Σκάφος" },
    desc:  { en: "3-hour private coastal tour",        gr: "3ωρη ιδιωτική περιήγηση ακτής" },
    price: "+€200 / person",
  },
  {
    id: "spa",
    label: { en: "In-Villa Spa Treatment",     gr: "Θεραπεία Spa στη Βίλα" },
    desc:  { en: "Massage, hammam or aromatherapy",    gr: "Μασάζ, χαμάμ ή αρωματοθεραπεία" },
    price: "+€80 / person",
  },
  {
    id: "chef",
    label: { en: "Private Chef Dinner",        gr: "Δείπνο με Ιδιωτικό Σεφ" },
    desc:  { en: "3-course Mediterranean menu",        gr: "Μεσογειακό μενού 3 πιάτων" },
    price: "+€120 / person",
  },
  {
    id: "transfer",
    label: { en: "Airport Transfer",           gr: "Μεταφορά από Αεροδρόμιο" },
    desc:  { en: "Private transfer from Kavala Airport", gr: "Ιδιωτική μεταφορά από αεροδρόμιο Καβάλας" },
    price: "+€60 / trip",
  },
  {
    id: "hamper",
    label: { en: "Welcome Hamper",             gr: "Καλάθι Υποδοχής" },
    desc:  { en: "Local honey, wine & Thassos olive oil", gr: "Τοπικό μέλι, κρασί & ελαιόλαδο Θάσου" },
    price: "+€40",
  },
];

const villaKeys = ["thalassa", "petra", "elia", "helios", "selene"] as const;
type VillaKey = typeof villaKeys[number];

export function BookPage() {
  const { t, lang } = useLanguage();
  const isGr = lang === "gr";

  const [selectedVilla, setSelectedVilla] = useState<VillaKey | "">("");
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());
  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Catamaran', sans-serif",
    fontSize: "9px",
    color: "#9A8B7A",
    fontWeight: 500,
    letterSpacing: "0.35em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "6px",
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#3a3028]/18 py-3 outline-none focus:border-[#3a3028] transition-colors placeholder:text-[#3a3028]/25";

  const inputStyle = {
    fontFamily: "'Catamaran', sans-serif",
    fontSize: "13px",
    color: "#3a3028",
  };

  const sectionLabelStyle = {
    fontFamily: "'Catamaran', sans-serif",
    fontSize: "10px",
    color: "#9A8B7A",
    fontWeight: 500 as const,
    letterSpacing: "0.5em",
    textTransform: "uppercase" as const,
  };

  return (
    <div style={{ backgroundColor: "#F5F0EB" }}>
      <PageHero
        image={poolArea}
        title={isGr ? "Κράτηση" : "Book Your Stay"}
        subtitle={isGr ? "Ιδιωτικές Βίλες" : "Private Villas"}
      />

      {submitted ? (
        /* ── Success state ── */
        <section className="py-32 px-6 text-center" style={{ backgroundColor: "#F5F0EB" }}>
          <div className="w-12 h-px bg-[#9A8B7A] mx-auto mb-8" />
          <p
            style={{
              fontFamily: "'Noto Serif Display', serif",
              fontSize: "clamp(22px, 3vw, 32px)",
              color: "#3a3028",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            {isGr
              ? "Ευχαριστούμε για την κράτησή σας.\nΘα επικοινωνήσουμε σύντομα μαζί σας."
              : "Thank you for your reservation request.\nWe will be in touch shortly."}
          </p>
          <div className="w-12 h-px bg-[#9A8B7A] mx-auto mt-8" />
        </section>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* ── Intro ── */}
          <section className="py-16 px-6 md:px-16 text-center" style={{ backgroundColor: "#F5F0EB" }}>
            <p
              className="max-w-xl mx-auto"
              style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "15px", color: "#3a3028", lineHeight: 2, opacity: 0.75 }}
            >
              {isGr
                ? "Επιλέξτε τη βίλα σας, τις ημερομηνίες διαμονής και τυχόν πρόσθετες υπηρεσίες. Θα επιβεβαιώσουμε τη διαθεσιμότητα και θα επικοινωνήσουμε μαζί σας άμεσα."
                : "Choose your villa, travel dates, and any add-on experiences. We'll confirm availability and respond promptly."}
            </p>
          </section>

          {/* ── Step 1: Villa Selection ── */}
          <section className="px-6 md:px-16 pb-16" style={{ backgroundColor: "#F5F0EB" }}>
            <div className="max-w-6xl mx-auto">
              <p className="text-center mb-10" style={sectionLabelStyle}>
                {isGr ? "01 — Επιλογή Βίλας" : "01 — Select Your Villa"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                {villaKeys.map((key, i) => {
                  const villa = t.villas[key];
                  const isSelected = selectedVilla === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedVilla(isSelected ? "" : key)}
                      className="relative group overflow-hidden text-left transition-all duration-300 focus:outline-none"
                      style={{
                        outline: isSelected ? "1.5px solid #3a3028" : "1.5px solid transparent",
                      }}
                    >
                      {/* Image */}
                      <div className="relative h-[200px] md:h-[260px]">
                        <img
                          src={villaImages[i]}
                          alt={villa.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div
                          className={`absolute inset-0 transition-all duration-300 ${
                            isSelected ? "bg-[#3a3028]/40" : "bg-black/20 group-hover:bg-black/10"
                          }`}
                        />
                        {/* Selected tick */}
                        {isSelected && (
                          <div className="absolute top-3 right-3 w-6 h-6 bg-white/90 flex items-center justify-center">
                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                              <path d="M1 5L4.5 8.5L11 1" stroke="#3a3028" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </div>
                        )}
                        {/* Index */}
                        <span
                          className="absolute top-3 left-3 text-white/60"
                          style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", fontWeight: 500 }}
                        >
                          0{i + 1}
                        </span>
                      </div>
                      {/* Label */}
                      <div
                        className="p-4"
                        style={{ backgroundColor: isSelected ? "#EDE8E1" : "#F5F0EB" }}
                      >
                        <p
                          style={{
                            fontFamily: "'Noto Serif Display', serif",
                            fontSize: "16px",
                            color: "#3a3028",
                            fontWeight: 400,
                            lineHeight: 1.2,
                            marginBottom: "4px",
                          }}
                        >
                          {villa.name}
                        </p>
                        <p
                          style={{
                            fontFamily: "'Catamaran', sans-serif",
                            fontSize: "10px",
                            color: "#9A8B7A",
                          }}
                        >
                          {villa.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
              {selectedVilla && (
                <p
                  className="text-center mt-6"
                  style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", color: "#9A8B7A", letterSpacing: "0.1em" }}
                >
                  {isGr ? "Επιλέξατε:" : "Selected:"}{" "}
                  <span style={{ color: "#3a3028" }}>{t.villas[selectedVilla].name}</span>
                </p>
              )}
            </div>
          </section>

          {/* ── Step 2: Dates & Guests ── */}
          <section className="px-6 md:px-16 py-16" style={{ backgroundColor: "#EDE8E1" }}>
            <div className="max-w-3xl mx-auto">
              <p className="text-center mb-10" style={sectionLabelStyle}>
                {isGr ? "02 — Ημερομηνίες & Άτομα" : "02 — Dates & Guests"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                  <label style={labelStyle}>{isGr ? "Άφιξη" : "Check-In"}</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={form.checkIn}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={{ ...inputStyle, backgroundColor: "transparent" }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>{isGr ? "Αναχώρηση" : "Check-Out"}</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={form.checkOut}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={{ ...inputStyle, backgroundColor: "transparent" }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>{isGr ? "Αριθμός Ατόμων" : "Guests"}</label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    required
                    className={`${inputClass} cursor-pointer`}
                    style={{ ...inputStyle, appearance: "none", backgroundColor: "transparent" }}
                  >
                    <option value="">—</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n} style={{ backgroundColor: "#EDE8E1" }}>
                        {n} {n === 1 ? (isGr ? "άτομο" : "guest") : (isGr ? "άτομα" : "guests")}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* ── Step 3: Add-ons ── */}
          <section className="px-6 md:px-16 py-16" style={{ backgroundColor: "#F5F0EB" }}>
            <div className="max-w-6xl mx-auto">
              <p className="text-center mb-3" style={sectionLabelStyle}>
                {isGr ? "03 — Βελτιώστε τη Διαμονή σας" : "03 — Enhance Your Stay"}
              </p>
              <p
                className="text-center mb-12"
                style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "14px", color: "#9A8B7A", opacity: 0.9 }}
              >
                {isGr ? "Προαιρετικά" : "Optional add-ons"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.has(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className="text-left p-8 transition-all duration-300 focus:outline-none"
                      style={{
                        backgroundColor: isChecked ? "#EDE8E1" : "transparent",
                        border: isChecked ? "1px solid rgba(58,48,40,0.2)" : "1px solid rgba(58,48,40,0.1)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h4
                          style={{
                            fontFamily: "'Noto Serif Display', serif",
                            fontSize: "17px",
                            color: "#3a3028",
                            fontWeight: 400,
                            lineHeight: 1.25,
                          }}
                        >
                          {isGr ? addon.label.gr : addon.label.en}
                        </h4>
                        {/* Checkbox */}
                        <div
                          className="w-5 h-5 border flex-shrink-0 flex items-center justify-center transition-colors duration-200"
                          style={{
                            borderColor: isChecked ? "#3a3028" : "rgba(58,48,40,0.25)",
                            backgroundColor: isChecked ? "#3a3028" : "transparent",
                          }}
                        >
                          {isChecked && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          )}
                        </div>
                      </div>
                      <p
                        style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "12px", color: "#9A8B7A", lineHeight: 1.6, marginBottom: "8px" }}
                      >
                        {isGr ? addon.desc.gr : addon.desc.en}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Catamaran', sans-serif",
                          fontSize: "11px",
                          color: "#3a3028",
                          fontWeight: 500,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {addon.price}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Step 4: Your Details ── */}
          <section className="px-6 md:px-16 py-16" style={{ backgroundColor: "#EDE8E1" }}>
            <div className="max-w-3xl mx-auto">
              <p className="text-center mb-10" style={sectionLabelStyle}>
                {isGr ? "04 — Στοιχεία Επικοινωνίας" : "04 — Your Details"}
              </p>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label style={labelStyle}>{isGr ? "Πλήρες Όνομα" : "Full Name"}</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      style={{ ...inputStyle, backgroundColor: "transparent" }}
                      placeholder="—"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{isGr ? "Τηλέφωνο" : "Phone"}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, backgroundColor: "transparent" }}
                      placeholder="—"
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>{isGr ? "Email" : "Email Address"}</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={{ ...inputStyle, backgroundColor: "transparent" }}
                    placeholder="—"
                  />
                </div>
                <div>
                  <label style={labelStyle}>{isGr ? "Μήνυμα ή Ειδικές Απαιτήσεις" : "Message or Special Requests"}</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputClass} resize-none`}
                    style={{ ...inputStyle, backgroundColor: "transparent" }}
                    placeholder="—"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── Summary & Submit ── */}
          <section className="px-6 md:px-16 py-16" style={{ backgroundColor: "#3a3028" }}>
            <div className="max-w-3xl mx-auto">
              {/* Summary */}
              {(selectedVilla || selectedAddons.size > 0) && (
                <div className="mb-10 pb-10 border-b border-white/10">
                  <p
                    className="uppercase tracking-[0.4em] mb-6 text-white/40"
                    style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "9px", fontWeight: 500 }}
                  >
                    {isGr ? "Σύνοψη Κράτησης" : "Booking Summary"}
                  </p>
                  {selectedVilla && (
                    <div className="flex justify-between items-center mb-3">
                      <span style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "15px", color: "rgba(255,255,255,0.8)" }}>
                        {t.villas[selectedVilla].name}
                      </span>
                      <span style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
                        {t.villas[selectedVilla].desc}
                      </span>
                    </div>
                  )}
                  {selectedAddons.size > 0 && (
                    <div className="mt-4 space-y-2">
                      {ADDONS.filter((a) => selectedAddons.has(a.id)).map((addon) => (
                        <div key={addon.id} className="flex justify-between items-center">
                          <span style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
                            + {isGr ? addon.label.gr : addon.label.en}
                          </span>
                          <span style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>
                            {addon.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Note */}
              <p
                className="text-center mb-8"
                style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }}
              >
                {isGr
                  ? "Αυτό είναι αίτημα κράτησης. Θα επιβεβαιώσουμε τη διαθεσιμότητα και θα σας αποστείλουμε προσφορά εντός 24 ωρών."
                  : "This is a reservation request. We will confirm availability and send you a tailored quote within 24 hours."}
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="w-full uppercase tracking-[0.4em] bg-white text-[#3a3028] py-5 hover:bg-[#F5F0EB] transition-colors duration-300"
                style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", fontWeight: 500 }}
              >
                {isGr ? "Αποστολή Αιτήματος" : "Send Reservation Request"}
              </button>

              <p
                className="text-center mt-6"
                style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.3)", lineHeight: 1.7 }}
              >
                {isGr ? "Ή καλέστε μας: " : "Or call us: "}
                <a
                  href="tel:+302593000000"
                  className="text-white/50 hover:text-white/80 transition-colors"
                >
                  +30 2593 000000
                </a>
              </p>
            </div>
          </section>
        </form>
      )}
    </div>
  );
}
