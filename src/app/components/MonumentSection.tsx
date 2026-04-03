import { useLanguage } from "../context/LanguageContext";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.jpg";
import aerialView from "../../assets/c9bb529b302b3d2b068711779b6d02c3a4cf6ff6.jpg";

export function ArchitectureSection() {
  const { t } = useLanguage();

  return (
    <section
      id="architecture"
      className="py-24 md:py-36 px-6 md:px-16"
      style={{ backgroundColor: "#F5F0EB" }}
    >
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
          {t.architecture.label}
        </p>
        <h2
          className="text-center mb-6"
          style={{
            fontFamily: "'Noto Serif Display', serif",
            fontSize: "clamp(28px, 4vw, 52px)",
            color: "#3a3028",
            fontWeight: 400,
            lineHeight: 1.15,
          }}
        >
          {t.architecture.title1}
          <br />
          {t.architecture.title2}
        </h2>
        <p
          className="text-center max-w-2xl mx-auto mb-16"
          style={{
            fontFamily: "'Nanum Myeongjo', serif",
            fontSize: "15px",
            color: "#3a3028",
            lineHeight: 2,
            opacity: 0.8,
          }}
        >
          {t.architecture.body}
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <img
              loading="lazy"
              src={firePitLounge}
              alt="Amare5 sunken fire pit lounge with stone walls and pergolas"
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <img
              loading="lazy"
              src={aerialView}
              alt="Amare5 villas aerial view showing cascading architecture"
              className="w-full h-[148px] md:h-[244px] object-cover"
            />
            <div
              className="flex-1 flex items-center justify-center p-8"
              style={{ backgroundColor: "#DDD5CA" }}
            >
              <div className="text-center">
                <p
                  className="uppercase tracking-[0.3em] mb-3"
                  style={{
                    fontFamily: "'Catamaran', sans-serif",
                    fontSize: "10px",
                    color: "#9A8B7A",
                    fontWeight: 500,
                  }}
                >
                  {t.architecture.materialsLabel}
                </p>
                <div className="flex flex-col gap-2">
                  {t.architecture.materials.map((mat) => (
                    <span
                      key={mat}
                      style={{
                        fontFamily: "'Noto Serif Display', serif",
                        fontSize: "14px",
                        color: "#3a3028",
                      }}
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
