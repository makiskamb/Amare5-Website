import { useLanguage } from "../context/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import poolArea from "../../assets/f360338b40e15ac219a17663de6ea3766e5dc3d2.jpg";

const sunsetImage =
  "https://images.unsplash.com/photo-1594102937188-529120813b68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMGlzbGFuZCUyMHN1bnNldCUyMGdvbGRlbiUyMGhvdXIlMjBzZWF8ZW58MXx8fHwxNzczMjUxMDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function ExperiencesSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" style={{ backgroundColor: "#EDE8E1" }}>

      {/* ── Top breathing room ── */}
      <div style={{ height: "clamp(80px, 12vw, 160px)" }} />

      {/* ── Label ── */}
      <div className="am-reveal text-center px-6 mb-10">
        <p className="uppercase tracking-[0.5em]"
          style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "11px", color: "#9A8B7A", fontWeight: 500 }}>
          {t.experiences.label}
        </p>
      </div>

      {/* ── Oversized headline — touches the collage below ── */}
      <div className="am-reveal am-reveal-d1 px-4 overflow-hidden relative z-[2]"
        style={{ marginBottom: "clamp(-44px, -5vw, -28px)" }}>
        <div style={{
          fontFamily: "'Afjat Trends', serif",
          fontSize: "clamp(68px, 13vw, 188px)",
          fontWeight: 400,
          color: "#3a3028",
          lineHeight: 0.88,
          letterSpacing: "-0.02em",
          marginLeft: "clamp(0px, 4vw, 72px)",
        }}>
          {t.experiences.title}
        </div>
      </div>

      {/* ── Irregular image collage: tall portrait left · stacked right ── */}
      <div className="relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start"
          style={{ gap: "clamp(8px, 1.5vw, 20px)" }}>

          {/* Left: tall portrait with overlay caption */}
          <div className="am-reveal relative overflow-hidden">
            <img
              loading="lazy"
              src={poolArea}
              alt="Private infinity pools at Amare5"
              style={{
                width: "100%",
                height: "clamp(360px, 58vw, 760px)",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <p className="uppercase tracking-[0.3em] mb-2 text-white/60"
                style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", fontWeight: 500 }}>
                {t.experiences.items[1].title}
              </p>
              <p style={{
                fontFamily: "'Afjat Trends', serif",
                fontSize: "clamp(20px, 2.4vw, 32px)",
                color: "white",
                fontWeight: 300,
                lineHeight: 1.2,
              }}>
                {t.experiences.poolsCaption}
              </p>
            </div>
          </div>

          {/* Right: landscape image + numbered experience list — offset down */}
          <div className="flex flex-col" style={{ gap: "clamp(8px, 1.5vw, 20px)", paddingTop: "clamp(0px, 8vw, 120px)" }}>

            {/* Landscape image with overlay */}
            <div className="am-reveal am-reveal-d1 relative overflow-hidden">
              <div style={{ height: "clamp(220px, 28vw, 380px)", overflow: "hidden" }}>
                <ImageWithFallback
                  src={sunsetImage}
                  alt="Golden hour sunset at Limenaria"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <p className="uppercase tracking-[0.3em] mb-2 text-white/60"
                  style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", fontWeight: 500 }}>
                  {t.experiences.items[0].title}
                </p>
                <p style={{
                  fontFamily: "'Afjat Trends', serif",
                  fontSize: "clamp(16px, 1.8vw, 24px)",
                  color: "white",
                  fontWeight: 300,
                }}>
                  {t.experiences.sunsetCaption}
                </p>
              </div>
            </div>

            {/* Numbered experience list — editorial, no cards */}
            <div className="am-reveal am-reveal-d2 py-8 md:py-10">
              {t.experiences.items.map((exp, i) => (
                <div key={i} className="flex items-baseline gap-5 py-4 border-b border-[#3a3028]/10">
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
                  <span style={{
                    fontFamily: "'Afjat Trends', serif",
                    fontSize: "clamp(16px, 1.8vw, 24px)",
                    color: "#3a3028",
                    fontWeight: 300,
                    letterSpacing: "-0.01em",
                  }}>
                    {exp.title}
                  </span>
                  <span className="ml-auto text-right" style={{
                    fontFamily: "'Afjat Trends', sans-serif",
                    fontSize: "11px",
                    color: "#9A8B7A",
                    fontWeight: 400,
                    maxWidth: "140px",
                  }}>
                    {exp.desc}
                  </span>
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