import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

const HERO_VIDEO =
  "https://cdn.builder.io/o/assets%2F7d5202236cd845e8b5ebf8eed31e0b5e%2Ff42312966fff49dd956b74e66e443afc?alt=media&token=f473ca89-f3d1-43c9-ac0e-de90fa313474&apiKey=7d5202236cd845e8b5ebf8eed31e0b5e";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Hero">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Atmospheric gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.32) 100%)",
        }}
      />

      {/* Slogan — editorial staggered split */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* LEFT: "Where / Love" — upper-left */}
        <div
          className="am-hero-item am-d1 absolute"
          style={{ left: "5vw", top: "28%" }}
        >
          <div
            style={{
              fontFamily: "'Noto Serif Display', serif",
              fontSize: "clamp(48px, 9.5vw, 124px)",
              fontWeight: 300,
              color: "white",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              textShadow: "0 2px 40px rgba(0,0,0,0.18)",
            }}
          >
            <div>Where</div>
            <div>Love</div>
          </div>
        </div>

        {/* RIGHT: "Meets / the / Sea" — lower-right */}
        <div
          className="am-hero-item am-d2 absolute"
          style={{ right: "5vw", bottom: "22%", textAlign: "right" }}
        >
          <div
            style={{
              fontFamily: "'Noto Serif Display', serif",
              fontSize: "clamp(48px, 9.5vw, 124px)",
              fontWeight: 300,
              color: "white",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              textShadow: "0 2px 40px rgba(0,0,0,0.18)",
            }}
          >
            <div>Meets</div>
            <div>the</div>
            <div>Sea</div>
          </div>
        </div>
      </div>

      {/* DISCOVER button — centre, above scroll indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <Link
          to="/villas"
          viewTransition
          className="am-hero-item am-d3 inline-block tracking-[0.35em] uppercase px-10 py-3.5 transition-all duration-300"
          style={{
            fontFamily: "'Catamaran', sans-serif",
            fontSize: "10px",
            fontWeight: 500,
            color: "white",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.30)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "9999px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.18)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.55)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.30)";
          }}
        >
          {t.hero.discover}
        </Link>
      </div>

      {/* Scroll indicator */}
      <div
        className="am-hero-item am-d2 absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center"
        aria-hidden="true"
      >
        <div className="w-px h-8 overflow-hidden">
          <div className="w-full h-full bg-white/40 am-scroll-bar" />
        </div>
      </div>
    </section>
  );
}
