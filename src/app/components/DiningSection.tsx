import { useLanguage } from "../context/LanguageContext";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.jpg";

export function DiningSection() {
  const { t } = useLanguage();

  return (
    <section id="dining" style={{ backgroundColor: "#DDD5CA" }}>

      {/* ── Top breathing room ── */}
      <div style={{ height: "clamp(80px, 12vw, 160px)" }} />

      {/* ── Label ── */}
      <div className="am-reveal text-center px-6 mb-10">
        <p className="uppercase tracking-[0.5em]"
          style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "11px", color: "#9A8B7A", fontWeight: 500 }}>
          {t.dining.label}
        </p>
      </div>

      {/* ── Oversized stacked headline — touches image below ── */}
      <div className="am-reveal am-reveal-d1 px-4 overflow-hidden relative z-[2]"
        style={{ marginBottom: "clamp(-40px, -4.5vw, -24px)" }}>
        <div style={{
          fontFamily: "'Afjat Trends', serif",
          fontSize: "clamp(56px, 10.5vw, 152px)",
          fontWeight: 400,
          color: "#3a3028",
          lineHeight: 0.90,
          letterSpacing: "-0.01em",
        }}>
          <div style={{ marginLeft: "clamp(0px, 4vw, 64px)" }}>{t.dining.title1}</div>
          <div style={{ marginLeft: "clamp(40px, 9vw, 148px)" }}>{t.dining.title2}</div>
        </div>
      </div>

      {/* ── 65/35 image-dominant asymmetric layout ── */}
      <div className="relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-[65fr_35fr] items-start"
          style={{ gap: "clamp(28px, 5vw, 80px)" }}>

          {/* Dominant image */}
          <div className="am-reveal">
            <img
              src={firePitLounge}
              alt="Outdoor lounge area with stone walls and fire pit"
              style={{
                width: "100%",
                height: "clamp(320px, 50vw, 660px)",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Text — floats down, doesn't start at top */}
          <div className="am-reveal am-reveal-d1 px-8 md:px-10"
            style={{ paddingTop: "clamp(0px, 14vw, 200px)" }}>
            <p style={{
              fontFamily: "'Nanum Myeongjo', serif",
              fontSize: "15px",
              color: "#3a3028",
              lineHeight: 2.1,
              letterSpacing: "0.02em",
              opacity: 0.85,
              marginBottom: "2.5rem",
            }}>
              {t.dining.body}
            </p>
            <div className="flex flex-col gap-7">
              {[t.dining.option1, t.dining.option2].map((option, i) => (
                <div key={i} className="flex items-baseline gap-4">
                  <span style={{
                    fontFamily: "'Afjat Trends', sans-serif",
                    fontSize: "10px",
                    color: "#9A8B7A",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    flexShrink: 0,
                  }}>
                    0{i + 1}
                  </span>
                  <p style={{
                    fontFamily: "'Afjat Trends', serif",
                    fontSize: "clamp(18px, 2vw, 26px)",
                    color: "#3a3028",
                    fontWeight: 300,
                    letterSpacing: "-0.01em",
                  }}>
                    {option}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom breathing room ── */}
      <div style={{ height: "clamp(80px, 12vw, 160px)" }} />
    </section>
  );
}
