import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { PageHero } from "../components/PageHero";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.jpg";
import poolArea from "../../assets/f360338b40e15ac219a17663de6ea3766e5dc3d2.jpg";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.jpg";
import aerialView from "../../assets/c9bb529b302b3d2b068711779b6d02c3a4cf6ff6.jpg";

const LOCAL_ACTIVITIES = [
  { en: "Beaches & Coves",      gr: "Παραλίες & Κόλποι",      note: { en: "Golden Beach, Paradise Beach, Saliara Marble Beach", gr: "Golden Beach, Paradise Beach, Σαλιάρα" } },
  { en: "Hiking Trails",        gr: "Μονοπάτια Πεζοπορίας",   note: { en: "Ancient paths through pine forests & clifftops", gr: "Αρχαία μονοπάτια σε πευκοδάση & βράχους" } },
  { en: "Water Sports",         gr: "Θαλάσσια Σπορ",          note: { en: "Kayak, paddleboard, windsurfing, boat rentals", gr: "Καγιάκ, paddleboard, θαλάσσια σκι, ενοικίαση σκαφών" } },
  { en: "Archaeological Sites", gr: "Αρχαιολογικοί Χώροι",    note: { en: "Ancient Thassos, Polygnotos Vagis Museum", gr: "Αρχαία Θάσος, Μουσείο Πολύγνωτου Βάγη" } },
  { en: "Local Villages",       gr: "Τοπικά Χωριά",            note: { en: "Potamia, Maries, Kastro — mountain villages", gr: "Ποταμιά, Μαριές, Κάστρο — ορεινά χωριά" } },
  { en: "Wine & Cuisine",       gr: "Κρασί & Κουζίνα",        note: { en: "Local tavernas, Thassos honey, olive oil estates", gr: "Τοπικές ταβέρνες, μέλι Θάσου, ελαιώνες" } },
];

export function ExperiencesPage() {
  const { t, lang } = useLanguage();
  const pe = t.pages.experiences;
  const isGr = lang === "gr";

  return (
    <div style={{ backgroundColor: "#F5F0EB" }}>

      <PageHero
        image={beachfrontView}
        title={pe.heroTitle}
        label={pe.heroSubtitle}
        intro={pe.intro}
        intro2={pe.intro2}
      />

      {/* ── Experiences numbered list — full bleed ── */}
      <section style={{ backgroundColor: "#F5F0EB" }}>
        <div style={{ height: "clamp(60px, 8vw, 100px)" }} />

        {pe.items.map((exp, i) => (
          <div
            key={i}
            className={`am-reveal am-reveal-d${i % 3 + 1} flex items-baseline gap-6 border-b border-[#3a3028]/10 px-10 md:px-20 py-7`}
          >
            <span style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", color: "#9A8B7A", fontWeight: 500, letterSpacing: "0.1em", flexShrink: 0, minWidth: "28px" }}>
              0{i + 1}
            </span>
            <span style={{ fontFamily: "'Afjat Trends', serif", fontSize: "clamp(18px, 2.4vw, 32px)", color: "#3a3028", fontWeight: 300, letterSpacing: "-0.01em", flexShrink: 0 }}>
              {exp.title}
            </span>
            <span
              className="ml-auto text-right"
              style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "13px", color: "#9A8B7A", lineHeight: 1.6, maxWidth: "300px", opacity: 0.85 }}
            >
              {exp.desc}
            </span>
          </div>
        ))}

        <div style={{ height: "clamp(60px, 8vw, 100px)" }} />
      </section>

      {/* ── Photo strip — full bleed, 3-col irregular ── */}
      <section style={{ backgroundColor: "#EDE8E1", lineHeight: 0 }}>
        <div className="grid grid-cols-1 md:grid-cols-[58fr_21fr_21fr]" style={{ gap: "clamp(4px, 0.6vw, 8px)" }}>
          <div className="am-reveal">
            <img
              loading="lazy"
              src={poolArea}
              alt="Private infinity pool at Amare5"
              style={{ width: "100%", height: "clamp(260px, 40vw, 520px)", objectFit: "cover", display: "block" }}
            />
          </div>
          <div className="am-reveal am-reveal-d1">
            <img
              loading="lazy"
              src={aerialView}
              alt="Aerial view of Amare5 complex"
              style={{ width: "100%", height: "clamp(260px, 40vw, 520px)", objectFit: "cover", display: "block" }}
            />
          </div>
          <div className="am-reveal am-reveal-d2">
            <img
              loading="lazy"
              src={firePitLounge}
              alt="Fire pit lounge at Amare5"
              style={{ width: "100%", height: "clamp(260px, 40vw, 520px)", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── Local Activities — full bleed ── */}
      <section style={{ backgroundColor: "#EDE8E1" }}>
        <div style={{ height: "clamp(60px, 8vw, 100px)" }} />

        <div className="px-10 md:px-20">
          <p
            className="am-reveal uppercase tracking-[0.5em] mb-4 text-center"
            style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", color: "#9A8B7A", fontWeight: 500 }}
          >
            {isGr ? "Τοπικές Δραστηριότητες" : "Local Activities"}
          </p>
          <h2
            className="am-reveal am-reveal-d1 text-center mb-14"
            style={{ fontFamily: "'Afjat Trends', serif", fontSize: "clamp(28px, 4vw, 56px)", color: "#3a3028", fontWeight: 400, letterSpacing: "-0.01em" }}
          >
            {isGr ? "Γύρω από τη Λιμενάρια" : "Around Limenaria"}
          </h2>
        </div>

        <div className="px-10 md:px-20">
          {LOCAL_ACTIVITIES.map((act, i) => (
            <div
              key={i}
              className={`am-reveal am-reveal-d${i % 3 + 1} flex items-baseline gap-6 border-b border-[#3a3028]/10 py-6`}
            >
              <span style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", color: "#9A8B7A", fontWeight: 500, letterSpacing: "0.1em", flexShrink: 0, minWidth: "28px" }}>
                0{i + 1}
              </span>
              <span style={{ fontFamily: "'Afjat Trends', serif", fontSize: "clamp(16px, 2vw, 26px)", color: "#3a3028", fontWeight: 300 }}>
                {isGr ? act.gr : act.en}
              </span>
              <span
                className="ml-auto text-right"
                style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "13px", color: "#9A8B7A", lineHeight: 1.6, maxWidth: "280px", opacity: 0.85 }}
              >
                {isGr ? act.note.gr : act.note.en}
              </span>
            </div>
          ))}
        </div>

        <div style={{ height: "clamp(60px, 8vw, 100px)" }} />
      </section>

      {/* ── CTA Banner — full bleed ── */}
      <section className="text-center" style={{ backgroundColor: "#3a3028", padding: "clamp(60px, 10vw, 120px) 24px" }}>
        <p
          className="uppercase tracking-[0.5em] mb-4"
          style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}
        >
          Amare5
        </p>
        <h2
          className="am-reveal mb-8 text-white"
          style={{ fontFamily: "'Afjat Trends', serif", fontSize: "clamp(24px, 4vw, 52px)", fontWeight: 400 }}
        >
          {t.hero.tagline}
        </h2>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/book"
            className="am-reveal am-reveal-d1 inline-block uppercase tracking-[0.35em] bg-white text-[#3a3028] px-8 py-3 hover:bg-[#F5F0EB] transition-colors duration-300"
            style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", fontWeight: 500 }}
          >
            {t.nav.bookNow}
          </Link>
          <Link
            to="/contact"
            className="inline-block uppercase tracking-[0.35em] border border-white/30 px-8 py-3 text-white hover:bg-white/10 transition-all duration-300"
            style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", fontWeight: 500 }}
          >
            {isGr ? "Επικοινωνία" : "Enquire"}
          </Link>
        </div>
      </section>
    </div>
  );
}
