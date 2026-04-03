import { useLanguage } from "../context/LanguageContext";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.jpg";

export function DiningSection() {
  const { t } = useLanguage();

  return (
    <section id="dining" className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="flex items-center justify-center p-12 md:p-20"
          style={{ backgroundColor: "#DDD5CA" }}
        >
          <div className="max-w-md">
            <p
              className="uppercase tracking-[0.5em] mb-4"
              style={{
                fontFamily: "'Catamaran', sans-serif",
                fontSize: "11px",
                color: "#9A8B7A",
                fontWeight: 500,
              }}
            >
              {t.dining.label}
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Noto Serif Display', serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#3a3028",
                fontWeight: 400,
                lineHeight: 1.15,
              }}
            >
              {t.dining.title1}
              <br />
              {t.dining.title2}
            </h2>
            <p
              className="mb-8"
              style={{
                fontFamily: "'Nanum Myeongjo', serif",
                fontSize: "15px",
                color: "#3a3028",
                lineHeight: 2,
                opacity: 0.8,
              }}
            >
              {t.dining.body}
            </p>
            <div className="flex gap-8">
              {[
                { label: t.dining.breakfast, time: "08:00 — 11:00" },
                { label: t.dining.dinner, time: "19:00 — 23:00" },
              ].map((meal) => (
                <div key={meal.label}>
                  <p
                    className="uppercase tracking-[0.2em] mb-1"
                    style={{
                      fontFamily: "'Catamaran', sans-serif",
                      fontSize: "10px",
                      color: "#9A8B7A",
                      fontWeight: 500,
                    }}
                  >
                    {meal.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Noto Serif Display', serif",
                      fontSize: "14px",
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
        <div>
          <img
            src={firePitLounge}
            alt="Outdoor lounge area with stone walls and fire pit"
            className="w-full h-[400px] md:h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
