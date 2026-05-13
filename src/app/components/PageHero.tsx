interface PageHeroProps {
  image: string;
  title: string;
  label?: string;
  intro?: string;
  intro2?: string;
  bgColor?: string;
}

export function PageHero({ image, title, label, intro, intro2, bgColor = "#F5F0EB" }: PageHeroProps) {
  return (
    <section style={{ backgroundColor: bgColor }}>

      {/* ── Top breathing room ── */}
      <div style={{ height: "clamp(60px, 8vw, 100px)" }} />

      {/* ── Label ── */}
      {label && (
        <div className="am-reveal text-center px-6 mb-10">
          <p
            className="uppercase tracking-[0.5em]"
            style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "11px", color: "#9A8B7A", fontWeight: 500 }}
          >
            {label}
          </p>
        </div>
      )}

      {/* ── Oversized title — centered, bleeds into image below ── */}
      <div
        className="am-reveal am-reveal-d1 px-4 overflow-hidden relative z-[2] text-center"
        style={{ marginBottom: "clamp(-44px, -5.5vw, -28px)" }}
      >
        <h1
          style={{
            fontFamily: "'Afjat Trends', serif",
            fontSize: "clamp(60px, 12vw, 172px)",
            fontWeight: 400,
            color: "#3a3028",
            lineHeight: 0.90,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h1>
      </div>

      {/* ── Split layout: intro text left · full-bleed image right ── */}
      <div className="relative z-[1] grid grid-cols-1 md:grid-cols-[42fr_58fr] items-start">

        {/* Left: text block floats down */}
        <div
          className="px-10 md:px-16"
          style={{ paddingTop: "clamp(80px, 13vw, 180px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}
        >
          {intro && (
            <p
              className="am-reveal am-reveal-d2"
              style={{
                fontFamily: "'Nanum Myeongjo', serif",
                fontSize: "15px",
                color: "#3a3028",
                lineHeight: 2.1,
                letterSpacing: "0.02em",
                opacity: 0.85,
                marginBottom: intro2 ? "1.75rem" : 0,
              }}
            >
              {intro}
            </p>
          )}
          {intro2 && (
            <p
              className="am-reveal am-reveal-d3"
              style={{
                fontFamily: "'Nanum Myeongjo', serif",
                fontSize: "15px",
                color: "#3a3028",
                lineHeight: 2.1,
                letterSpacing: "0.02em",
                opacity: 0.7,
              }}
            >
              {intro2}
            </p>
          )}
        </div>

        {/* Right: image — full bleed to right edge */}
        <div className="am-reveal" style={{ lineHeight: 0 }}>
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "clamp(420px, 65vw, 820px)",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>

    </section>
  );
}
