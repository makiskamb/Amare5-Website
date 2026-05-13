import { useState, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";
import { PageHero } from "../components/PageHero";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import aerialView from "../../assets/c9bb529b302b3d2b068711779b6d02c3a4cf6ff6.jpg";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.jpg";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.jpg";
import poolArea from "../../assets/f360338b40e15ac219a17663de6ea3766e5dc3d2.jpg";
import diningArea from "../../assets/2717ed628ed4f4d73050575531c0e1a3eac316c6.jpg";

type Category = "all" | "villas" | "architecture" | "experiences";

interface GalleryItem {
  src: string;
  alt: string;
  category: Category;
}

const ALL_ITEMS: GalleryItem[] = [
  { src: aerialView,     alt: "Amare5 complex cascading toward the Aegean",          category: "architecture" },
  { src: beachfrontView, alt: "Beachfront villas and stone cabanas",                  category: "villas"       },
  { src: poolArea,       alt: "Private infinity pool with panoramic sea view",         category: "villas"       },
  { src: firePitLounge,  alt: "Sunken fire pit lounge with natural stone walls",       category: "experiences"  },
  { src: diningArea,     alt: "Al fresco dining terrace under the wooden pergola",     category: "experiences"  },
  { src: beachfrontView, alt: "Stone-built villa facades and beach access",            category: "architecture" },
  { src: aerialView,     alt: "Villa terraces with sea views at sunset",               category: "villas"       },
  { src: poolArea,       alt: "Shaded pool terrace with horizon views",               category: "villas"       },
  { src: firePitLounge,  alt: "Evening ambiance at Amare5 lounge area",               category: "experiences"  },
  { src: diningArea,     alt: "Culinary experience with fresh local ingredients",      category: "experiences"  },
  { src: aerialView,     alt: "Hillside architecture blending with the landscape",     category: "architecture" },
  { src: beachfrontView, alt: "Steps from the beach — the Aegean awaits",             category: "experiences"  },
];

const CATEGORIES: { key: Category; label: string; labelGr: string }[] = [
  { key: "all",          label: "All",          labelGr: "Όλα"           },
  { key: "villas",       label: "Villas",       labelGr: "Βίλες"        },
  { key: "architecture", label: "Architecture", labelGr: "Αρχιτεκτονική"},
  { key: "experiences",  label: "Experiences",  labelGr: "Εμπειρίες"    },
];

export function GalleryPage() {
  const { t, lang } = useLanguage();
  const pg = t.pages.gallery;

  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? ALL_ITEMS
      : ALL_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox  = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);
  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape")     closeLightbox();
    if (e.key === "ArrowLeft")  goPrev();
    if (e.key === "ArrowRight") goNext();
  };

  return (
    <div style={{ backgroundColor: "#F5F0EB" }}>

      <PageHero
        image={aerialView}
        title={pg.heroTitle}
        label={pg.heroSubtitle}
        intro={pg.intro}
        intro2={pg.intro2}
      />

      {/* ── Category tabs — full width ── */}
      <section style={{ backgroundColor: "#F5F0EB", paddingTop: "clamp(48px, 6vw, 80px)" }}>
        <div className="am-reveal flex items-center justify-center gap-8 md:gap-14 border-b border-[#3a3028]/10 px-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`pb-4 uppercase tracking-[0.3em] transition-all duration-300 ${
                  isActive
                    ? "text-[#3a3028] border-b border-[#3a3028]"
                    : "text-[#9A8B7A] hover:text-[#3a3028] border-b border-transparent"
                }`}
                style={{
                  fontFamily: "'Afjat Trends', sans-serif",
                  fontSize: "10px",
                  fontWeight: isActive ? 500 : 400,
                  marginBottom: "-1px",
                }}
              >
                {lang === "gr" ? cat.labelGr : cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Image grid — irregular editorial, full bleed ── */}
      <section style={{ backgroundColor: "#F5F0EB", paddingTop: "clamp(6px, 1vw, 12px)", lineHeight: 0 }}>

        {/* Row 1: 2 images — 60/40 */}
        <div
          className="grid grid-cols-1 md:grid-cols-[60fr_40fr]"
          style={{ gap: "clamp(4px, 0.6vw, 8px)", marginBottom: "clamp(4px, 0.6vw, 8px)" }}
        >
          {filteredItems.slice(0, 2).map((item, i) => (
            <GalleryTile key={`r1-${i}`} item={item} index={i} onClick={openLightbox}
              height={i === 0 ? "clamp(260px, 38vw, 500px)" : "clamp(300px, 46vw, 580px)"} />
          ))}
        </div>

        {/* Row 2: 3 images — equal */}
        {filteredItems.length > 2 && (
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "clamp(4px, 0.6vw, 8px)", marginBottom: "clamp(4px, 0.6vw, 8px)", marginLeft: "clamp(0px, 5vw, 80px)" }}
          >
            {filteredItems.slice(2, 5).map((item, i) => (
              <GalleryTile key={`r2-${i}`} item={item} index={i + 2} onClick={openLightbox}
                height="clamp(200px, 24vw, 320px)" />
            ))}
          </div>
        )}

        {/* Row 3: 2 images — 40/60 */}
        {filteredItems.length > 5 && (
          <div
            className="grid grid-cols-1 md:grid-cols-[40fr_60fr]"
            style={{ gap: "clamp(4px, 0.6vw, 8px)", marginBottom: "clamp(4px, 0.6vw, 8px)" }}
          >
            {filteredItems.slice(5, 7).map((item, i) => (
              <GalleryTile key={`r3-${i}`} item={item} index={i + 5} onClick={openLightbox}
                height="clamp(260px, 36vw, 460px)" />
            ))}
          </div>
        )}

        {/* Row 4: remaining images — 3-col equal */}
        {filteredItems.length > 7 && (
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "clamp(4px, 0.6vw, 8px)" }}
          >
            {filteredItems.slice(7).map((item, i) => (
              <GalleryTile key={`r4-${i}`} item={item} index={i + 7} onClick={openLightbox}
                height="clamp(200px, 24vw, 320px)" />
            ))}
          </div>
        )}

        <div style={{ height: "clamp(60px, 8vw, 100px)" }} />
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
            style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            {t.nav.close} ×
          </button>

          <div
            className="absolute top-6 left-1/2 -translate-x-1/2 text-white/40"
            style={{ fontFamily: "'Afjat Trends', sans-serif", fontSize: "10px", letterSpacing: "0.3em" }}
          >
            {lightboxIndex + 1} / {filteredItems.length}
          </div>

          <div
            className="relative max-w-5xl w-full mx-4 md:mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              loading="lazy"
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain mx-auto block"
            />
            <p
              className="text-center text-white/50 mt-4"
              style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "13px", letterSpacing: "0.04em", lineHeight: 1 }}
            >
              {filteredItems[lightboxIndex].alt}
            </p>
          </div>

          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-10"
            style={{ fontFamily: "'Afjat Trends', serif", fontSize: "40px", lineHeight: 1 }}
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-10"
            style={{ fontFamily: "'Afjat Trends', serif", fontSize: "40px", lineHeight: 1 }}
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

/* ── Gallery Tile ── */
interface GalleryTileProps {
  item: GalleryItem;
  index: number;
  onClick: (index: number) => void;
  height: string;
}

function GalleryTile({ item, index, onClick, height }: GalleryTileProps) {
  return (
    <div
      className={`am-reveal am-reveal-d${index % 3 + 1} overflow-hidden cursor-pointer group relative`}
      style={{ lineHeight: 0 }}
      onClick={() => onClick(index)}
    >
      <ImageWithFallback
        src={item.src}
        alt={item.alt}
        className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
        style={{ height, display: "block" }}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/18 transition-all duration-500" />

      {/* Zoom icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="w-11 h-11 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 2H14V6M6 14H2V10M14 2L9 7M2 14L7 9" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
