import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { PageHero } from "../components/PageHero";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.jpg";
import poolArea from "../../assets/f360338b40e15ac219a17663de6ea3766e5dc3d2.jpg";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.jpg";
import aerialView from "../../assets/c9bb529b302b3d2b068711779b6d02c3a4cf6ff6.jpg";
import { Waves, Infinity as InfinityIcon, Leaf, Sailboat, Wine, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICON_COLOR = "#9A8B7A";
const ICON_SIZE = 26;

const icons: LucideIcon[] = [Waves, InfinityIcon, Leaf, Sailboat, Wine, Sparkles];

interface Package {
  icon: string;
  title: { en: string; gr: string };
  subtitle: { en: string; gr: string };
  desc: { en: string; gr: string };
  includes: { en: string[]; gr: string[] };
  tag: { en: string; gr: string };
}

const PACKAGES: Package[] = [
  {
    icon: "○",
    title:    { en: "Beach & Wellness",    gr: "Παραλία & Ευεξία" },
    subtitle: { en: "The restorative escape",  gr: "Η αναζωογονητική απόδραση" },
    desc: {
      en: "Three or more nights of pure restoration. Private beach access, a tailored in-villa spa treatment, and mornings with breakfast served on your terrace as the Aegean wakes.",
      gr: "Τρεις ή περισσότερες νύχτες καθαρής αποκατάστασης. Ιδιωτική πρόσβαση στην παραλία, εξατομικευμένο spa στη βίλα σας και πρωινά στη βεράντα με θέα στο Αιγαίο.",
    },
    includes: {
      en: ["Private beach sun beds & umbrella", "One in-villa spa treatment per guest", "Daily breakfast on your terrace", "Cold-pressed welcome juice on arrival"],
      gr: ["Ιδιωτικά ξαπλώστρες & ομπρέλα παραλίας", "Ένα spa στη βίλα ανά επισκέπτη", "Καθημερινό πρωινό στη βεράντα", "Χυμός υποδοχής κατά την άφιξη"],
    },
    tag: { en: "Most popular", gr: "Πιο δημοφιλές" },
  },
  {
    icon: "△",
    title:    { en: "Aegean Explorer",     gr: "Εξερεύνηση Αιγαίου" },
    subtitle: { en: "Adventure on the water", gr: "Περιπέτεια στο νερό" },
    desc: {
      en: "Discover the hidden coves, sea caves, and pristine beaches of Thassos by boat. Guided coastal hikes, water sports, and a sunset sailing excursion around the island.",
      gr: "Ανακαλύψτε τους κρυμμένους κόλπους, τις θαλάσσιες σπηλιές και τις παρθένες παραλίες της Θάσου με σκάφος. Πεζοπορία, θαλάσσια σπορ και εκδρομή ιστιοπλοΐας στο ηλιοβασίλεμα.",
    },
    includes: {
      en: ["Private sunset boat tour (3 hrs)", "One guided coastal hike", "Water sports session (kayak, paddleboard)", "Packed gourmet picnic"],
      gr: ["Ιδιωτική βόλτα με σκάφος στο ηλιοβασίλεμα (3 ώρες)", "Μια καθοδηγούμενη παράκτια πεζοπορία", "Θαλάσσια σπορ (καγιάκ, paddleboard)", "Γκουρμέ πικνίκ"],
    },
    tag: { en: "Adventure", gr: "Περιπέτεια" },
  },
  {
    icon: "◇",
    title:    { en: "Aegean Table",        gr: "Αιγαιοπελαγίτικη Τράπεζα" },
    subtitle: { en: "Flavours of Thassos", gr: "Γεύσεις της Θάσου" },
    desc: {
      en: "A journey through the flavours of the island. A private chef dinner under the stars, a morning visit to local producers, and an intimate wine and tsipouro tasting curated by our sommelier.",
      gr: "Ένα ταξίδι στις γεύσεις του νησιού. Δείπνο με ιδιωτικό σεφ κάτω από τα άστρα, πρωινή επίσκεψη σε τοπικούς παραγωγούς και γευσιγνωσία κρασιών και τσίπουρου.",
    },
    includes: {
      en: ["Private chef dinner for up to 4 (3-course)", "Wine & tsipouro tasting with sommelier", "Morning visit to local honey & olive producers", "Local welcome hamper on arrival"],
      gr: ["Δείπνο με ιδιωτικό σεφ για έως 4 άτομα (3 πιάτα)", "Γευσιγνωσία κρασιών & τσίπουρου με σομελιέ", "Πρωινή επίσκεψη σε παραγωγούς μελιού & ελαιολάδου", "Τοπικό καλάθι υποδοχής"],
    },
    tag: { en: "Gastronomy", gr: "Γαστρονομία" },
  },
];

const LOCAL_ACTIVITIES = [
  { en: "Beaches & Coves",     gr: "Παραλίες & Κόλποι",      note: { en: "Golden Beach, Paradise Beach, Saliara Marble Beach", gr: "Golden Beach, Paradise Beach, Σαλιάρα" } },
  { en: "Hiking Trails",       gr: "Μονοπάτια Πεζοπορίας",   note: { en: "Ancient paths through pine forests & clifftops", gr: "Αρχαία μονοπάτια σε πευκοδάση & βράχους" } },
  { en: "Water Sports",        gr: "Θαλάσσια Σπορ",          note: { en: "Kayak, paddleboard, windsurfing, boat rentals", gr: "Καγιάκ, paddleboard, θαλάσσια σκι, ενοικίαση σκαφών" } },
  { en: "Archaeological Sites", gr: "Αρχαιολογικοί Χώροι",  note: { en: "Ancient Thassos, Polygnotos Vagis Museum", gr: "Αρχαία Θάσος, Μουσείο Πολύγνωτου Βάγη" } },
  { en: "Local Villages",      gr: "Τοπικά Χωριά",           note: { en: "Potamia, Maries, Kastro — mountain villages", gr: "Ποταμιά, Μαριές, Κάστρο — ορεινά χωριά" } },
  { en: "Wine & Cuisine",      gr: "Κρασί & Κουζίνα",        note: { en: "Local tavernas, Thassos honey, olive oil estates", gr: "Τοπικές ταβέρνες, μέλι Θάσου, ελαιώνες" } },
];

export function ExperiencesPage() {
  const { t, lang } = useLanguage();
  const pe = t.pages.experiences;
  const isGr = lang === "gr";

  return (
    <div style={{ backgroundColor: "#F5F0EB" }}>
      <PageHero image={beachfrontView} title={pe.heroTitle} subtitle={pe.heroSubtitle} />

      {/* Intro */}
      <section className="py-20 px-6 md:px-16 text-center" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="max-w-2xl mx-auto">
          <p
            style={{
              fontFamily: "'Nanum Myeongjo', serif",
              fontSize: "16px",
              color: "#3a3028",
              lineHeight: 2,
              opacity: 0.8,
            }}
          >
            {pe.intro}
          </p>
        </div>
      </section>

      {/* ── Experiences grid ── */}
      <section className="px-6 md:px-16 pb-6" style={{ backgroundColor: "#F5F0EB" }}>
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ backgroundColor: "rgba(58,48,40,0.07)" }}
        >
          {pe.items.map((exp, i) => (
            <div
              key={i}
              className="p-10 md:p-14 transition-colors duration-300 hover:bg-[#EDE8E1]/60"
              style={{ backgroundColor: i % 4 < 2 ? "#F5F0EB" : "#EDE8E1" }}
            >
              <span className="block mb-5">
                {(() => {
                  const Icon = icons[i] ?? Sparkles;
                  return <Icon size={ICON_SIZE} color={ICON_COLOR} strokeWidth={1.25} />;
                })()}
              </span>
              <p
                className="uppercase tracking-[0.35em] mb-2"
                style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "9px", color: "#9A8B7A", fontWeight: 500 }}
              >
                0{i + 1}
              </p>
              <h3
                className="mb-4"
                style={{ fontFamily: "'Noto Serif Display', serif", fontSize: "22px", color: "#3a3028", fontWeight: 400, lineHeight: 1.2 }}
              >
                {exp.title}
              </h3>
              <p
                style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "14px", color: "#3a3028", lineHeight: 1.9, opacity: 0.75 }}
              >
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Photo strip ── */}
      <section className="py-6 px-6 md:px-16" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
          {[poolArea, aerialView, firePitLounge].map((src, i) => (
            <div key={i} className="overflow-hidden">
              <img
                loading="lazy"
                src={src}
                alt={`Amare5 experience ${i + 1}`}
                className="w-full h-[260px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Local Activities — around Limenaria ── */}
      <section className="py-20 px-6 md:px-16" style={{ backgroundColor: "#EDE8E1" }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="uppercase tracking-[0.5em] mb-4 text-center"
            style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", color: "#9A8B7A", fontWeight: 500 }}
          >
            {isGr ? "Τοπικές Δραστηριότητες" : "Local Activities"}
          </p>
          <h2
            className="text-center mb-16"
            style={{ fontFamily: "'Noto Serif Display', serif", fontSize: "clamp(26px, 3.5vw, 44px)", color: "#3a3028", fontWeight: 400 }}
          >
            {isGr ? "Γύρω από τη Λιμενάρια" : "Around Limenaria"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#3a3028]/10">
            {LOCAL_ACTIVITIES.map((act, i) => (
              <div
                key={i}
                className="p-8 md:p-10 border-b md:border-b-0 border-[#3a3028]/8 last:border-b-0 md:border-r odd:md:border-r even:md:border-r-0"
                style={{
                  borderColor: "rgba(58,48,40,0.08)",
                  backgroundColor: i % 4 < 2 ? "transparent" : "rgba(255,255,255,0.3)",
                }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-6 h-6 rounded-full border border-[#9A8B7A]/30 flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <span style={{ color: "#9A8B7A", fontSize: "8px", fontFamily: "'Catamaran', sans-serif" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h4
                      className="mb-1"
                      style={{ fontFamily: "'Noto Serif Display', serif", fontSize: "18px", color: "#3a3028", fontWeight: 400 }}
                    >
                      {isGr ? act.gr : act.en}
                    </h4>
                    <p
                      style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "12px", color: "#9A8B7A", lineHeight: 1.7 }}
                    >
                      {isGr ? act.note.gr : act.note.en}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA Banner ── */}
      <section className="py-20 px-6 md:px-16 text-center" style={{ backgroundColor: "#3a3028" }}>
        <p
          className="uppercase tracking-[0.5em] mb-4"
          style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}
        >
          Amare5
        </p>
        <h2
          className="mb-8 text-white"
          style={{ fontFamily: "'Noto Serif Display', serif", fontSize: "clamp(24px, 4vw, 48px)", fontWeight: 400 }}
        >
          {t.hero.tagline}
        </h2>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/book"
            className="inline-block uppercase tracking-[0.35em] bg-white text-[#3a3028] px-8 py-3 hover:bg-[#F5F0EB] transition-colors duration-300"
            style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", fontWeight: 500 }}
          >
            {t.nav.bookNow}
          </Link>
          <Link
            to="/contact"
            className="inline-block uppercase tracking-[0.35em] border border-white/30 px-8 py-3 text-white hover:bg-white/10 transition-all duration-300"
            style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", fontWeight: 500 }}
          >
            {isGr ? "Επικοινωνία" : "Enquire"}
          </Link>
        </div>
      </section>
    </div>
  );
}
