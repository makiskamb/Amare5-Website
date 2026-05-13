import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import aerialView from "../../assets/c9bb529b302b3d2b068711779b6d02c3a4cf6ff6.jpg";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.jpg";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" style={{ backgroundColor: "#F5F0EB" }}>

      {/* ── Top breathing room ── */}
      <div style={{ height: "clamp(32px, 4vw, 60px)" }} />

      {/* ── Label ── */}
      <div className="am-reveal text-center px-6 mb-10">
        <p
          className="uppercase tracking-[0.5em]"
          style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "11px", color: "#9A8B7A", fontWeight: 500 }}
        >
          {t.about.label}
        </p>
      </div>

      {/* ── Oversized stacked editorial headline — touches the image below ── */}
      <div className="am-reveal am-reveal-d1 px-4 overflow-hidden relative z-[2]"
        style={{ marginBottom: "clamp(-32px, -3.5vw, -20px)" }}>
        <div
          style={{
            fontFamily: "'Afjat Trends', serif",
            fontSize: "clamp(52px, 9.5vw, 136px)",
            fontWeight: 400,
            color: "#3a3028",
            lineHeight: 0.93,
            letterSpacing: "-0.01em",
          }}
        >
          <div style={{ marginLeft: "clamp(0px, 2vw, 36px)" }}>A</div>
          <div style={{ marginLeft: "clamp(48px, 9vw, 148px)" }}>Seaside</div>
          <div style={{ marginLeft: "clamp(16px, 4vw, 72px)" }}>Sanctuary</div>
        </div>
      </div>

      {/* ── Asymmetric layout: tall image left · text floats right, offset down ── */}
      <div className="relative z-[1]">
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-start"
          style={{ gap: "clamp(28px, 5vw, 80px)" }}
        >
          {/* Left: tall portrait image — full bleed to left edge */}
          <div className="am-reveal">
            <img
              loading="lazy"
              src={aerialView}
              alt="Amare5 boutique villas complex aerial view"
              style={{
                width: "100%",
                height: "clamp(360px, 52vw, 680px)",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Right: text floats down — editorial offset */}
          <div
            className="am-reveal am-reveal-d1 px-8 md:px-12"
            style={{ paddingTop: "clamp(0px, 16vw, 240px)" }}
          >
            <p
              style={{
                fontFamily: "'Nanum Myeongjo', serif",
                fontSize: "15px",
                color: "#3a3028",
                lineHeight: 2.1,
                letterSpacing: "0.02em",
                opacity: 0.85,
                marginBottom: "1.75rem",
              }}
            >
              {t.about.p1}
            </p>
            <p
              style={{
                fontFamily: "'Nanum Myeongjo', serif",
                fontSize: "15px",
                color: "#3a3028",
                lineHeight: 2.1,
                letterSpacing: "0.02em",
                opacity: 0.85,
                marginBottom: "3rem",
              }}
            >
              {t.about.p2}
            </p>
            <Link
              to="/villas"
              className="inline-block uppercase tracking-[0.35em] border-b border-[#9A8B7A]/40 pb-1 hover:border-[#3a3028] transition-colors duration-300"
              style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", color: "#3a3028", fontWeight: 500 }}
            >
              {t.about.cta}
            </Link>
          </div>
        </div>
      </div>

      {/* ── Breathing space before full-bleed ── */}
      <div style={{ height: "clamp(80px, 12vw, 160px)" }} />

      {/* ── Full-bleed edge-to-edge image ── */}
      <div className="am-reveal" style={{ lineHeight: 0 }}>
        <img
          loading="lazy"
          src={beachfrontView}
          alt="Amare5 beachfront view with cabanas and stone villas"
          style={{
            width: "100%",
            height: "clamp(280px, 46vw, 620px)",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

    </section>
  );
}
