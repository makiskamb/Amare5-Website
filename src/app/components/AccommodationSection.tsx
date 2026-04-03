import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.jpg";

const villaKeys = ["thalassa", "petra", "elia", "helios", "selene"] as const;

export function AccommodationSection() {
  const { t } = useLanguage();

  return (
    <section
      id="villas"
      className="py-24 md:py-36 px-6 md:px-16"
      style={{ backgroundColor: "#EDE8E1" }}
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
          {t.accommodation.label}
        </p>
        <h2
          className="text-center mb-16"
          style={{
            fontFamily: "'Noto Serif Display', serif",
            fontSize: "clamp(28px, 4vw, 52px)",
            color: "#3a3028",
            fontWeight: 400,
            lineHeight: 1.15,
          }}
        >
          {t.accommodation.title1}
          <br />
          {t.accommodation.title2}
        </h2>

        {/* Villa List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-1">
            {villaKeys.map((key, i) => {
              const villa = t.villas[key];
              return (
                <Link
                  key={key}
                  to={`/villas/${villa.slug}`}
                  className="block group py-4 border-b border-[#3a3028]/10"
                >
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span
                        className="text-[#9A8B7A] mr-4"
                        style={{
                          fontFamily: "'Catamaran', sans-serif",
                          fontSize: "11px",
                          fontWeight: 500,
                        }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="group-hover:opacity-60 transition-opacity"
                        style={{
                          fontFamily: "'Noto Serif Display', serif",
                          fontSize: "clamp(20px, 2.5vw, 30px)",
                          color: "#3a3028",
                          fontWeight: 400,
                        }}
                      >
                        {villa.name}
                      </span>
                    </div>
                    <span
                      className="hidden md:inline text-right opacity-60"
                      style={{
                        fontFamily: "'Catamaran', sans-serif",
                        fontSize: "11px",
                        color: "#3a3028",
                        fontWeight: 400,
                      }}
                    >
                      {villa.desc}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div>
            <img
              loading="lazy"
              src={beachfrontView}
              alt="Beachfront villas with cabanas and stone architecture"
              className="w-full h-[350px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
