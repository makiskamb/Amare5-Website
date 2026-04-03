import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import aerialView from "../../assets/c9bb529b302b3d2b068711779b6d02c3a4cf6ff6.png";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.png";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-16" style={{ backgroundColor: "#F5F0EB" }}>
      <div className="max-w-6xl mx-auto">
        {/* Welcome Label */}
        <p
          className="text-center uppercase tracking-[0.5em] mb-4"
          style={{
            fontFamily: "'Catamaran', sans-serif",
            fontSize: "11px",
            color: "#9A8B7A",
            fontWeight: 500,
          }}
        >
          {t.about.label}
        </p>
        <h2
          className="text-center mb-16"
          style={{
            fontFamily: "'Noto Serif Display', serif",
            fontSize: "clamp(32px, 4.5vw, 56px)",
            color: "#3a3028",
            fontWeight: 400,
            lineHeight: 1.15,
          }}
        >
          {t.about.title}
        </h2>

        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
          <div>
            <img
              src={aerialView}
              alt="Amare5 boutique villas complex aerial view"
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
          </div>
          <div>
            <p
              className="mb-6"
              style={{
                fontFamily: "'Nanum Myeongjo', serif",
                fontSize: "15px",
                color: "#3a3028",
                lineHeight: 2,
                letterSpacing: "0.02em",
              }}
            >
              {t.about.p1}
            </p>
            <p
              className="mb-8"
              style={{
                fontFamily: "'Nanum Myeongjo', serif",
                fontSize: "15px",
                color: "#3a3028",
                lineHeight: 2,
                letterSpacing: "0.02em",
              }}
            >
              {t.about.p2}
            </p>
            <Link
              to="/villas"
              className="inline-block uppercase tracking-[0.3em] border-b border-[#9A8B7A]/40 pb-1 hover:border-[#3a3028] transition-colors"
              style={{
                fontFamily: "'Catamaran', sans-serif",
                fontSize: "10px",
                color: "#3a3028",
                fontWeight: 500,
              }}
            >
              {t.about.cta}
            </Link>
          </div>
        </div>

        {/* Full width beachfront image */}
        <div className="relative">
          <img
            src={beachfrontView}
            alt="Amare5 beachfront view with cabanas and stone villas"
            className="w-full h-[250px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0EB]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
