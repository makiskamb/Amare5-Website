import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.jpg";

const villaKeys = ["thalassa", "petra", "elia", "helios", "selene"] as const;

export function AccommodationSection() {
  const { t } = useLanguage();

  return (
    <section id="villas" style={{ backgroundColor: "#EDE8E1" }}>

      {/* ── Top breathing room ── */}
      <div style={{ height: "clamp(80px, 12vw, 160px)" }} />

      {/* ── Label ── */}
      <div className="am-reveal text-center px-6 mb-10">
        <p className="uppercase tracking-[0.5em]"
          style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "11px", color: "#9A8B7A", fontWeight: 500 }}>
          {t.accommodation.label}
        </p>
      </div>

      {/* ── Oversized stacked headline — touches the content below ── */}
      <div className="am-reveal am-reveal-d1 px-4 overflow-hidden relative z-[2]"
        style={{ marginBottom: "clamp(-28px, -3vw, -16px)" }}>
        <div style={{
          fontFamily: "'Afjat Trends', serif",
          fontSize: "clamp(44px, 8vw, 120px)",
          fontWeight: 400,
          color: "#3a3028",
          lineHeight: 0.93,
          letterSpacing: "-0.01em",
        }}>
          <div style={{ marginLeft: "clamp(0px, 2vw, 36px)" }}>{t.accommodation.title1}</div>
          <div style={{ marginLeft: "clamp(48px, 10vw, 160px)" }}>{t.accommodation.title2}</div>
        </div>
      </div>

      {/* ── Asymmetric: villa list left · tall portrait image right ── */}
      <div className="relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start"
          style={{ gap: "clamp(28px, 5vw, 80px)" }}>

          {/* Villa list — oversized serif names */}
          <div className="px-8 md:px-12" style={{ paddingTop: "clamp(48px, 6vw, 88px)" }}>
            {villaKeys.map((key, i) => {
              const villa = t.villas[key];
              return (
                <Link
                  key={key}
                  to={`/villas/${villa.slug}`}
                  className={`am-reveal am-reveal-d${i % 5 + 1} block group border-b border-[#3a3028]/12 py-5 md:py-6`}
                >
                  <div className="flex items-baseline gap-5">
                    <span style={{
                      fontFamily: "'Afjat Trends', sans-serif",
                      fontSize: "11px",
                      color: "#9A8B7A",
                      fontWeight: 500,
                      flexShrink: 0,
                      letterSpacing: "0.1em",
                    }}>
                      0{i + 1}
                    </span>
                    <span className="group-hover:opacity-40 transition-opacity duration-300" style={{
                      fontFamily: "'Afjat Trends', serif",
                      fontSize: "clamp(28px, 4vw, 56px)",
                      color: "#3a3028",
                      fontWeight: 300,
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                    }}>
                      {villa.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Tall portrait image — offset downward */}
          <div className="am-reveal am-reveal-d1 hidden md:block"
            style={{ paddingTop: "clamp(0px, 6vw, 100px)" }}>
            <img
              loading="lazy"
              src={beachfrontView}
              alt="Beachfront villas with cabanas and stone architecture"
              style={{
                width: "100%",
                height: "clamp(400px, 56vw, 720px)",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Bottom breathing room ── */}
      <div style={{ height: "clamp(80px, 12vw, 160px)" }} />
    </section>
  );
}
