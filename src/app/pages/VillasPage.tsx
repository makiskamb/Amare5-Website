import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { PageHero } from "../components/PageHero";
import aerialView from "../../assets/c9bb529b302b3d2b068711779b6d02c3a4cf6ff6.png";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.png";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.png";
import poolArea from "../../assets/f360338b40e15ac219a17663de6ea3766e5dc3d2.png";

const villaImages = [beachfrontView, poolArea, aerialView, firePitLounge, beachfrontView];

export function VillasPage() {
  const { t } = useLanguage();
  const pv = t.pages.villas;
  const villaKeys = ["thalassa", "petra", "elia", "helios", "selene"] as const;

  return (
    <div style={{ backgroundColor: "#F5F0EB" }}>
      <PageHero image={aerialView} title={pv.heroTitle} subtitle={pv.heroSubtitle} />

      {/* Intro */}
      <section className="py-20 px-6 md:px-16 text-center" style={{ backgroundColor: "#F5F0EB" }}>
        <p
          className="max-w-2xl mx-auto"
          style={{
            fontFamily: "'Nanum Myeongjo', serif",
            fontSize: "16px",
            color: "#3a3028",
            lineHeight: 2,
            opacity: 0.8,
          }}
        >
          {pv.intro}
        </p>
      </section>

      {/* Villa List */}
      <section className="pb-24 px-6 md:px-16" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="max-w-6xl mx-auto space-y-0">
          {villaKeys.map((key, i) => {
            const villa = t.villas[key];
            const isEven = i % 2 === 0;
            return (
              <div
                key={key}
                className={`grid grid-cols-1 md:grid-cols-2 ${i < villaKeys.length - 1 ? "mb-2" : ""}`}
                style={{ backgroundColor: i % 3 === 1 ? "#EDE8E1" : "#F5F0EB" }}
              >
                {/* Image side */}
                <div className={isEven ? "order-1 md:order-1" : "order-1 md:order-2"}>
                  <div className="relative overflow-hidden h-[300px] md:h-[520px]">
                    <img
                      src={villaImages[i]}
                      alt={villa.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Number overlay */}
                    <div className="absolute top-6 left-6">
                      <span
                        className="text-white/60"
                        style={{
                          fontFamily: "'Catamaran', sans-serif",
                          fontSize: "11px",
                          fontWeight: 500,
                          letterSpacing: "0.3em",
                        }}
                      >
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div
                  className={`flex items-center p-10 md:p-16 ${isEven ? "order-2 md:order-2" : "order-2 md:order-1"}`}
                  style={{ backgroundColor: i % 3 === 1 ? "#EDE8E1" : "#F5F0EB" }}
                >
                  <div className="w-full">
                    <p
                      className="uppercase tracking-[0.3em] mb-3"
                      style={{
                        fontFamily: "'Catamaran', sans-serif",
                        fontSize: "10px",
                        color: "#9A8B7A",
                        fontWeight: 500,
                      }}
                    >
                      {villa.desc}
                    </p>
                    <h2
                      className="mb-3"
                      style={{
                        fontFamily: "'Noto Serif Display', serif",
                        fontSize: "clamp(28px, 3.5vw, 44px)",
                        color: "#3a3028",
                        fontWeight: 400,
                        lineHeight: 1.1,
                      }}
                    >
                      {villa.name}
                    </h2>
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
                    <p
                      className="mb-8"
                      style={{
                        fontFamily: "'Nanum Myeongjo', serif",
                        fontSize: "14px",
                        color: "#3a3028",
                        lineHeight: 1.9,
                        opacity: 0.8,
                      }}
                    >
                      {villa.details}
                    </p>

                    {/* Features */}
                    <p
                      className="uppercase tracking-[0.3em] mb-3"
                      style={{
                        fontFamily: "'Catamaran', sans-serif",
                        fontSize: "9px",
                        color: "#9A8B7A",
                        fontWeight: 500,
                      }}
                    >
                      {pv.featuresLabel}
                    </p>
                    <div className="grid grid-cols-2 gap-1 mb-8">
                      {villa.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-[#9A8B7A] flex-shrink-0" />
                          <span
                            style={{
                              fontFamily: "'Catamaran', sans-serif",
                              fontSize: "11px",
                              color: "#3a3028",
                              fontWeight: 400,
                            }}
                          >
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Link
                        to={`/villas/${villa.slug}`}
                        className="inline-block uppercase tracking-[0.3em] border-b border-[#9A8B7A]/40 pb-1 hover:border-[#3a3028] transition-colors"
                        style={{
                          fontFamily: "'Catamaran', sans-serif",
                          fontSize: "10px",
                          color: "#3a3028",
                          fontWeight: 500,
                        }}
                      >
                        {pv.exploreVilla}
                      </Link>
                      <Link
                        to="/book"
                        className="inline-block uppercase tracking-[0.3em] border border-[#3a3028]/30 px-5 py-2 hover:bg-[#3a3028] hover:text-white transition-all duration-300"
                        style={{
                          fontFamily: "'Catamaran', sans-serif",
                          fontSize: "10px",
                          color: "#3a3028",
                          fontWeight: 500,
                        }}
                      >
                        {pv.bookVilla}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Design note — understated, supporting role ── */}
      <section className="py-16 px-6 md:px-16 text-center" style={{ backgroundColor: "#EDE8E1" }}>
        <div className="max-w-xl mx-auto">
          <p
            className="uppercase tracking-[0.5em] mb-5"
            style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "9px", color: "#9A8B7A", fontWeight: 500 }}
          >
            {t.architecture.label}
          </p>
          <p
            style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "15px", color: "#3a3028", lineHeight: 2, opacity: 0.75 }}
          >
            {t.architecture.body}
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          {t.architecture.materials.map((mat) => (
            <span
              key={mat}
              className="uppercase tracking-[0.3em]"
              style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "9px", color: "#9A8B7A", fontWeight: 500 }}
            >
              {mat}
            </span>
          ))}
        </div>
      </section>

      {/* ── Book Now CTA ── */}
      <section className="py-20 px-6 md:px-16 text-center" style={{ backgroundColor: "#3a3028" }}>
        <p
          className="uppercase tracking-[0.5em] mb-4"
          style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}
        >
          Amare5 — Thassos
        </p>
        <h2
          className="mb-8 text-white"
          style={{ fontFamily: "'Noto Serif Display', serif", fontSize: "clamp(24px, 4vw, 46px)", fontWeight: 400 }}
        >
          {t.hero.tagline}
        </h2>
        <Link
          to="/book"
          className="inline-block uppercase tracking-[0.35em] bg-white text-[#3a3028] px-10 py-4 hover:bg-[#F5F0EB] transition-colors duration-300"
          style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", fontWeight: 500 }}
        >
          {t.nav.bookNow}
        </Link>
      </section>
    </div>
  );
}
