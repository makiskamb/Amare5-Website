import { useLanguage } from "../context/LanguageContext";
import { PageHero } from "../components/PageHero";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.png";
import aerialView from "../../assets/c9bb529b302b3d2b068711779b6d02c3a4cf6ff6.png";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.png";
import poolArea from "../../assets/f360338b40e15ac219a17663de6ea3766e5dc3d2.png";

const sectionImages = [aerialView, firePitLounge, beachfrontView, poolArea];

export function ArchitecturePage() {
  const { t } = useLanguage();
  const pa = t.pages.architecture;

  return (
    <div style={{ backgroundColor: "#F5F0EB" }}>
      <PageHero image={firePitLounge} title={pa.heroTitle} subtitle={pa.heroSubtitle} />

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
            {pa.intro}
          </p>
        </div>
      </section>

      {/* Sections */}
      <section style={{ backgroundColor: "#EDE8E1" }}>
        {pa.sections.map((section, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ borderTop: "1px solid rgba(58,48,40,0.08)" }}
            >
              {/* Image */}
              <div className={`overflow-hidden ${isEven ? "order-1 md:order-1" : "order-1 md:order-2"}`}>
                <img
                  src={sectionImages[i]}
                  alt={section.title}
                  className="w-full h-[300px] md:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text */}
              <div
                className={`flex items-center p-10 md:p-16 ${isEven ? "order-2 md:order-2" : "order-2 md:order-1"}`}
                style={{ backgroundColor: i % 2 === 0 ? "#EDE8E1" : "#F5F0EB" }}
              >
                <div>
                  <p
                    className="uppercase tracking-[0.4em] mb-5"
                    style={{
                      fontFamily: "'Catamaran', sans-serif",
                      fontSize: "9px",
                      color: "#9A8B7A",
                      fontWeight: 500,
                    }}
                  >
                    0{i + 1}
                  </p>
                  <h2
                    className="mb-6"
                    style={{
                      fontFamily: "'Noto Serif Display', serif",
                      fontSize: "clamp(22px, 3vw, 36px)",
                      color: "#3a3028",
                      fontWeight: 400,
                      lineHeight: 1.2,
                    }}
                  >
                    {section.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Nanum Myeongjo', serif",
                      fontSize: "14px",
                      color: "#3a3028",
                      lineHeight: 2,
                      opacity: 0.8,
                    }}
                  >
                    {section.body}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Materials Grid */}
      <section className="py-24 px-6 md:px-16" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-center uppercase tracking-[0.5em] mb-4"
            style={{
              fontFamily: "'Catamaran', sans-serif",
              fontSize: "11px",
              color: "#9A8B7A",
              fontWeight: 500,
            }}
          >
            {pa.materialsTitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-12" style={{ backgroundColor: "rgba(58,48,40,0.1)" }}>
            {pa.materials.map((mat, i) => (
              <div
                key={i}
                className="p-10 md:p-14"
                style={{ backgroundColor: i % 2 === 0 ? "#F5F0EB" : "#EDE8E1" }}
              >
                <p
                  className="uppercase tracking-[0.3em] mb-3"
                  style={{
                    fontFamily: "'Catamaran', sans-serif",
                    fontSize: "9px",
                    color: "#9A8B7A",
                    fontWeight: 500,
                  }}
                >
                  0{i + 1}
                </p>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Noto Serif Display', serif",
                    fontSize: "22px",
                    color: "#3a3028",
                    fontWeight: 400,
                  }}
                >
                  {mat.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Catamaran', sans-serif",
                    fontSize: "12px",
                    color: "#9A8B7A",
                    letterSpacing: "0.04em",
                  }}
                >
                  {mat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <div className="relative overflow-hidden h-[400px] md:h-[540px]">
        <img
          src={poolArea}
          alt="Amare5 architecture and nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-12 left-0 right-0 text-center px-6">
          <p
            className="text-white/90"
            style={{
              fontFamily: "'Noto Serif Display', serif",
              fontSize: "clamp(20px, 3vw, 36px)",
              fontWeight: 400,
              letterSpacing: "0.04em",
            }}
          >
            {t.architecture.title1} {t.architecture.title2}
          </p>
        </div>
      </div>
    </div>
  );
}
