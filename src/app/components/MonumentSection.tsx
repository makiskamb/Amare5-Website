import { useLanguage } from "../context/LanguageContext";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.jpg";
import aerialView from "../../assets/c9bb529b302b3d2b068711779b6d02c3a4cf6ff6.jpg";

export function ArchitectureSection() {
  const { t } = useLanguage();

  return (
    <section id="architecture" style={{ backgroundColor: "#F5F0EB" }}>

      {/* ── Top breathing room ── */}
      <div style={{ height: "clamp(80px, 12vw, 160px)" }} />

      {/* ── Label ── */}
      <div className="am-reveal text-center px-6 mb-10">
        <p className="uppercase tracking-[0.5em]"
          style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "11px", color: "#9A8B7A", fontWeight: 500 }}>
          {t.architecture.label}
        </p>
      </div>

      {/* ── Oversized stacked headline — touches body text below ── */}
      <div className="am-reveal am-reveal-d1 px-4 overflow-hidden relative z-[2]"
        style={{ marginBottom: "clamp(-20px, -2vw, -10px)" }}>
        <div style={{
          fontFamily: "'Afjat Trends', serif",
          fontSize: "clamp(44px, 8vw, 120px)",
          fontWeight: 400,
          color: "#3a3028",
          lineHeight: 0.93,
          letterSpacing: "-0.01em",
        }}>
          <div style={{ marginLeft: "clamp(0px, 2vw, 36px)" }}>{t.architecture.title1}</div>
          <div style={{ marginLeft: "clamp(48px, 10vw, 160px)" }}>{t.architecture.title2}</div>
        </div>
      </div>

      {/* ── Body text — left-aligned, offset, not centered ── */}
      <div className="am-reveal px-8 md:px-16 mb-20 md:mb-28 relative z-[1]" style={{ paddingTop: "clamp(32px, 4vw, 56px)" }}>
        <p style={{
          fontFamily: "'Nanum Myeongjo', serif",
          fontSize: "15px",
          color: "#3a3028",
          lineHeight: 2.1,
          letterSpacing: "0.02em",
          opacity: 0.75,
          maxWidth: "520px",
          marginLeft: "clamp(0px, 14vw, 220px)",
        }}>
          {t.architecture.body}
        </p>
      </div>

      {/* ── Irregular image grid: 2/3 large · 1/3 right column ── */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-start"
          style={{ gap: "clamp(8px, 1.2vw, 16px)" }}>

          {/* Large image — 2/3 */}
          <div className="am-reveal md:col-span-2">
            <img
              loading="lazy"
              src={firePitLounge}
              alt="Amare5 sunken fire pit lounge with stone walls and pergolas"
              style={{
                width: "100%",
                height: "clamp(280px, 42vw, 560px)",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Right column: smaller image + floating materials list */}
          <div className="flex flex-col" style={{ gap: "clamp(8px, 1.2vw, 16px)" }}>
            <div className="am-reveal am-reveal-d1">
              <img
                loading="lazy"
                src={aerialView}
                alt="Amare5 villas aerial view"
                style={{
                  width: "100%",
                  height: "clamp(160px, 20vw, 260px)",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Materials — floating list, no card box */}
            <div className="am-reveal am-reveal-d2 py-8 px-1">
              <p className="uppercase tracking-[0.35em] mb-6"
                style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", color: "#9A8B7A", fontWeight: 500 }}>
                {t.architecture.materialsLabel}
              </p>
              <div className="flex flex-col gap-3">
                {t.architecture.materials.map((mat, i) => (
                  <span key={mat} style={{
                    fontFamily: "'Afjat Trends', serif",
                    fontSize: "clamp(15px, 1.6vw, 22px)",
                    color: "#3a3028",
                    fontWeight: 300,
                    opacity: 1 - i * 0.14,
                    letterSpacing: "-0.01em",
                    display: "block",
                  }}>
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom breathing room ── */}
      <div style={{ height: "clamp(80px, 12vw, 160px)" }} />
    </section>
  );
}
