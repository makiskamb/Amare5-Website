import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import aerialView from "../../assets/c9bb529b302b3d2b068711779b6d02c3a4cf6ff6.jpg";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.jpg";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.jpg";
import poolArea from "../../assets/f360338b40e15ac219a17663de6ea3766e5dc3d2.jpg";
import diningArea from "../../assets/2717ed628ed4f4d73050575531c0e1a3eac316c6.jpg";

export function GallerySlider() {
  const { t } = useLanguage();

  return (
    <section id="gallery" style={{ backgroundColor: "#F5F0EB" }}>

      {/* ── Top breathing room ── */}
      <div style={{ height: "clamp(80px, 12vw, 160px)" }} />

      {/* ── Label ── */}
      <div className="am-reveal text-center px-6 mb-10">
        <p className="uppercase tracking-[0.5em]"
          style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "11px", color: "#9A8B7A", fontWeight: 500 }}>
          {t.gallery.label}
        </p>
      </div>

      {/* ── Oversized stacked headline — touches image grid below ── */}
      <div className="am-reveal am-reveal-d1 px-4 overflow-hidden relative z-[2]"
        style={{ marginBottom: "clamp(-36px, -4vw, -20px)" }}>
        <div style={{
          fontFamily: "'Afjat Trends', serif",
          fontSize: "clamp(52px, 9.5vw, 136px)",
          fontWeight: 400,
          color: "#3a3028",
          lineHeight: 0.92,
          letterSpacing: "-0.01em",
        }}>
          <div style={{ marginLeft: "clamp(0px, 2vw, 36px)" }}>Moments</div>
          <div style={{ marginLeft: "clamp(48px, 10vw, 160px)" }}>of Amare</div>
        </div>
      </div>

      {/* ── Row 1: large landscape + tall portrait — unequal sizes ── */}
      <div className="relative z-[1]" style={{ lineHeight: 0 }}>
        <div className="grid grid-cols-2 md:grid-cols-[58fr_42fr] items-end"
          style={{ gap: "clamp(6px, 1vw, 12px)" }}>

          <div className="am-reveal">
            <img
              loading="lazy"
              src={beachfrontView}
              alt={t.gallery.slides[1]}
              style={{
                width: "100%",
                height: "clamp(180px, 30vw, 420px)",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Taller portrait — creates visual tension */}
          <div className="am-reveal am-reveal-d1">
            <img
              loading="lazy"
              src={poolArea}
              alt={t.gallery.slides[3]}
              style={{
                width: "100%",
                height: "clamp(260px, 44vw, 580px)",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Row 2: three images, offset left — irregular rhythm ── */}
      <div className="mt-3" style={{ lineHeight: 0 }}>
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: "clamp(6px, 1vw, 12px)",
            marginLeft: "clamp(0px, 5vw, 80px)",
          }}
        >
          <div className="am-reveal">
            <img
              loading="lazy"
              src={aerialView}
              alt={t.gallery.slides[0]}
              style={{
                width: "100%",
                height: "clamp(160px, 22vw, 300px)",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          <div className="am-reveal am-reveal-d1">
            <img
              loading="lazy"
              src={firePitLounge}
              alt={t.gallery.slides[2]}
              style={{
                width: "100%",
                height: "clamp(160px, 22vw, 300px)",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          <div className="am-reveal am-reveal-d2">
            <img
              loading="lazy"
              src={diningArea}
              alt={t.gallery.slides[4]}
              style={{
                width: "100%",
                height: "clamp(160px, 22vw, 300px)",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── View full gallery CTA ── */}
      <div className="am-reveal text-center" style={{ paddingTop: "clamp(48px, 6vw, 80px)" }}>
        <Link
          to="/gallery"
          className="inline-block uppercase tracking-[0.35em] border-b border-[#9A8B7A]/40 pb-1 hover:border-[#3a3028] transition-colors duration-300"
          style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", color: "#3a3028", fontWeight: 500 }}
        >
          View Full Gallery
        </Link>
      </div>

      {/* ── Bottom breathing room ── */}
      <div style={{ height: "clamp(80px, 12vw, 160px)" }} />
    </section>
  );
}
