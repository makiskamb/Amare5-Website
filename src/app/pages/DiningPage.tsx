import { useLanguage } from "../context/LanguageContext";
import { PageHero } from "../components/PageHero";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.jpg";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.jpg";
import poolArea from "../../assets/f360338b40e15ac219a17663de6ea3766e5dc3d2.jpg";

const sectionImages = [beachfrontView, firePitLounge, poolArea];

export function DiningPage() {
  const { t } = useLanguage();
  const pd = t.pages.dining;

  return (
    <div style={{ backgroundColor: "#F5F0EB" }}>
      <PageHero image={firePitLounge} title={pd.heroTitle} subtitle={pd.heroSubtitle} />

      {/* Intro & times */}
      <section className="py-20 px-6 md:px-16" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <p
                style={{
                  fontFamily: "'Nanum Myeongjo', serif",
                  fontSize: "16px",
                  color: "#3a3028",
                  lineHeight: 2,
                  opacity: 0.8,
                }}
              >
                {pd.intro}
              </p>
            </div>
            <div className="space-y-6">
              {[
                { label: pd.breakfast, time: pd.breakfastTime },
                { label: pd.dinner, time: pd.dinnerTime },
              ].map((meal) => (
                <div key={meal.label} className="pb-6 border-b border-[#3a3028]/10">
                  <p
                    className="uppercase tracking-[0.3em] mb-1"
                    style={{
                      fontFamily: "'Catamaran', sans-serif",
                      fontSize: "9px",
                      color: "#9A8B7A",
                      fontWeight: 500,
                    }}
                  >
                    {meal.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Noto Serif Display', serif",
                      fontSize: "16px",
                      color: "#3a3028",
                    }}
                  >
                    {meal.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section rows */}
      {pd.sections.map((section, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={i}
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ backgroundColor: i % 2 === 0 ? "#EDE8E1" : "#DDD5CA" }}
          >
            {/* Image */}
            <div className={`overflow-hidden ${isEven ? "order-2 md:order-2" : "order-2 md:order-1"}`}>
              <img
                src={sectionImages[i]}
                alt={section.title}
                className="w-full h-[320px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Text */}
            <div
              className={`flex items-center p-10 md:p-16 ${isEven ? "order-1 md:order-1" : "order-1 md:order-2"}`}
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
                    fontSize: "clamp(22px, 3vw, 38px)",
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
          </section>
        );
      })}

      {/* Dietary note */}
      <section className="py-16 px-6 md:px-16 text-center" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="max-w-2xl mx-auto">
          <p
            className="uppercase tracking-[0.4em] mb-3"
            style={{
              fontFamily: "'Catamaran', sans-serif",
              fontSize: "9px",
              color: "#9A8B7A",
              fontWeight: 500,
            }}
          >
            {pd.specialDietary}
          </p>
          <p
            style={{
              fontFamily: "'Nanum Myeongjo', serif",
              fontSize: "14px",
              color: "#3a3028",
              lineHeight: 2,
              opacity: 0.7,
            }}
          >
            {pd.specialDietaryNote}
          </p>
        </div>
      </section>
    </div>
  );
}
