import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { PageHero } from "../components/PageHero";
import aerialView from "../../assets/c9bb529b302b3d2b068711779b6d02c3a4cf6ff6.jpg";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.jpg";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.jpg";
import poolArea from "../../assets/f360338b40e15ac219a17663de6ea3766e5dc3d2.jpg";

const villaImages = [beachfrontView, poolArea, aerialView, firePitLounge, beachfrontView];

export function VillasPage() {
  const { t } = useLanguage();
  const pv = t.pages.villas;
  const villaKeys = ["thalassa", "petra", "elia", "helios", "selene"] as const;

  return (
    <div style={{ backgroundColor: "#F5F0EB" }}>

      <PageHero
        image={aerialView}
        title={pv.heroTitle}
        label={pv.heroSubtitle}
        intro={pv.intro}
        intro2={pv.intro2}
      />

      {/* ── Villa List — full bleed, alternating bg ── */}
      <section style={{ backgroundColor: "#F5F0EB" }}>
        {villaKeys.map((key, i) => {
          const villa = t.villas[key];
          const isEven = i % 2 === 0;
          const bg = i % 3 === 1 ? "#EDE8E1" : "#F5F0EB";

          return (
            <div
              key={key}
              className={`am-reveal am-reveal-d${i % 3 + 1} grid grid-cols-1 md:grid-cols-2`}
              style={{ backgroundColor: bg }}
            >
              {/* Image side — always full bleed, no padding */}
              <div
                className={`am-reveal ${isEven ? "order-1 md:order-1" : "order-1 md:order-2"}`}
                style={{ lineHeight: 0 }}
              >
                <img
                  loading="lazy"
                  src={villaImages[i]}
                  alt={villa.name}
                  style={{
                    width: "100%",
                    height: "clamp(300px, 46vw, 580px)",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Content side */}
              <div
                className={`flex items-center p-10 md:p-16 ${isEven ? "order-2 md:order-2" : "order-2 md:order-1"}`}
                style={{ backgroundColor: bg }}
              >
                <div className="w-full">
                  {/* Number + desc */}
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", color: "#9A8B7A", fontWeight: 500, letterSpacing: "0.1em" }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="uppercase tracking-[0.3em]"
                      style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", color: "#9A8B7A", fontWeight: 500 }}
                    >
                      {villa.desc}
                    </span>
                  </div>

                  {/* Villa name */}
                  <h2
                    className="mb-3"
                    style={{
                      fontFamily: "'Afjat Trends', serif",
                      fontSize: "clamp(28px, 3.5vw, 48px)",
                      color: "#3a3028",
                      fontWeight: 400,
                      lineHeight: 1.05,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {villa.name}
                  </h2>

                  {/* Tagline */}
                  <p
                    className="mb-6"
                    style={{
                      fontFamily: "'Nanum Myeongjo', serif",
                      fontSize: "13px",
                      color: "#9A8B7A",
                      letterSpacing: "0.04em",
                      fontStyle: "italic",
                    }}
                  >
                    {villa.tagline}
                  </p>

                  {/* Details */}
                  <p
                    className="mb-8"
                    style={{
                      fontFamily: "'Nanum Myeongjo', serif",
                      fontSize: "14px",
                      color: "#3a3028",
                      lineHeight: 2,
                      opacity: 0.8,
                    }}
                  >
                    {villa.details}
                  </p>

                  {/* Features */}
                  <p
                    className="uppercase tracking-[0.3em] mb-3"
                    style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "9px", color: "#9A8B7A", fontWeight: 500 }}
                  >
                    {pv.featuresLabel}
                  </p>
                  <div className="grid grid-cols-2 gap-1 mb-8">
                    {villa.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#9A8B7A] flex-shrink-0" />
                        <span
                          style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "11px", color: "#3a3028", fontWeight: 400 }}
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Rates */}
                  <p
                    className="mb-6"
                    style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "9px", color: "#9A8B7A", letterSpacing: "0.3em", textTransform: "uppercase" }}
                  >
                    Rates —{" "}
                    <Link
                      to="/contact"
                      className="hover:text-[#3a3028] transition-colors"
                      style={{ borderBottom: "1px solid currentColor", paddingBottom: "1px" }}
                    >
                      Inquire
                    </Link>
                  </p>

                  {/* CTAs */}
                  <div className="flex gap-4 flex-wrap">
                    <Link
                      to={`/villas/${villa.slug}`}
                      className="inline-block uppercase tracking-[0.3em] border-b border-[#9A8B7A]/40 pb-1 hover:border-[#3a3028] transition-colors"
                      style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", color: "#3a3028", fontWeight: 500 }}
                    >
                      {pv.exploreVilla}
                    </Link>
                    <Link
                      to="/book"
                      className="inline-block uppercase tracking-[0.3em] border border-[#3a3028]/30 px-5 py-2 hover:bg-[#3a3028] hover:text-white transition-all duration-300"
                      style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", color: "#3a3028", fontWeight: 500 }}
                    >
                      {pv.bookVilla}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── Architecture note — full bleed ── */}
      <section style={{ backgroundColor: "#EDE8E1" }}>
        <div style={{ height: "clamp(60px, 8vw, 100px)" }} />
        <div className="px-10 md:px-20 text-center">
          <p
            className="am-reveal uppercase tracking-[0.5em] mb-5"
            style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "9px", color: "#9A8B7A", fontWeight: 500 }}
          >
            {t.architecture.label}
          </p>
          <p
            className="am-reveal am-reveal-d1 mx-auto"
            style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "15px", color: "#3a3028", lineHeight: 2, opacity: 0.75, maxWidth: "640px" }}
          >
            {t.architecture.body}
          </p>
          <div className="am-reveal am-reveal-d2 flex justify-center gap-6 mt-10 flex-wrap">
            {t.architecture.materials.map((mat) => (
              <span
                key={mat}
                className="uppercase tracking-[0.3em]"
                style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "9px", color: "#9A8B7A", fontWeight: 500 }}
              >
                {mat}
              </span>
            ))}
          </div>
        </div>
        <div style={{ height: "clamp(60px, 8vw, 100px)" }} />
      </section>

      {/* ── Book Now CTA — full bleed ── */}
      <section className="text-center" style={{ backgroundColor: "#3a3028", padding: "clamp(60px, 10vw, 120px) 24px" }}>
        <p
          className="uppercase tracking-[0.5em] mb-4"
          style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}
        >
          Amare5 — Thassos
        </p>
        <h2
          className="am-reveal mb-8 text-white"
          style={{ fontFamily: "'Afjat Trends', serif", fontSize: "clamp(24px, 4vw, 52px)", fontWeight: 400 }}
        >
          {t.hero.tagline}
        </h2>
        <Link
          to="/book"
          className="am-reveal am-reveal-d1 inline-block uppercase tracking-[0.35em] bg-white text-[#3a3028] px-10 py-4 hover:bg-[#F5F0EB] transition-colors duration-300"
          style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", fontWeight: 500 }}
        >
          {t.nav.bookNow}
        </Link>
      </section>
    </div>
  );
}
