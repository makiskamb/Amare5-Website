import { useState, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";
import { PageHero } from "../components/PageHero";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import aerialView from "../../assets/c9bb529b302b3d2b068711779b6d02c3a4cf6ff6.png";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.png";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.png";
import poolArea from "../../assets/f360338b40e15ac219a17663de6ea3766e5dc3d2.png";
import diningArea from "../../assets/2717ed628ed4f4d73050575531c0e1a3eac316c6.png";

type Category = "all" | "villas" | "architecture" | "experiences";

interface GalleryItem {
  src: string;
  alt: string;
  category: Category;
  span?: string;
}

const ALL_ITEMS: GalleryItem[] = [
  { src: aerialView,      alt: "Amare5 complex cascading toward the Aegean",              category: "architecture", span: "md:col-span-2 md:row-span-2" },
  { src: beachfrontView,  alt: "Beachfront villas and stone cabanas",                      category: "villas",       span: "" },
  { src: poolArea,        alt: "Private infinity pool with panoramic sea view",             category: "villas",       span: "" },
  { src: firePitLounge,   alt: "Sunken fire pit lounge with natural stone walls",           category: "experiences",  span: "md:col-span-2" },
  { src: diningArea,      alt: "Al fresco dining terrace under the wooden pergola",         category: "experiences",  span: "" },
  { src: beachfrontView,  alt: "Stone-built villa facades and beach access",                category: "architecture", span: "" },
  { src: aerialView,      alt: "Villa terraces with sea views at sunset",                   category: "villas",       span: "" },
  { src: poolArea,        alt: "Shaded pool terrace with horizon views",                    category: "villas",       span: "md:col-span-2" },
  { src: firePitLounge,   alt: "Evening ambiance at Amare5 lounge area",                   category: "experiences",  span: "" },
  { src: diningArea,      alt: "Culinary experience with fresh local ingredients",          category: "experiences",  span: "" },
  { src: aerialView,      alt: "Hillside architecture blending with the landscape",         category: "architecture", span: "md:col-span-2" },
  { src: beachfrontView,  alt: "Steps from the beach — the Aegean awaits",                 category: "experiences",  span: "" },
];

const CATEGORIES: { key: Category; label: string; labelGr: string }[] = [
  { key: "all",          label: "All",          labelGr: "Όλα" },
  { key: "villas",       label: "Villas",       labelGr: "Βίλες" },
  { key: "architecture", label: "Architecture", labelGr: "Αρχιτεκτονική" },
  { key: "experiences",  label: "Experiences",  labelGr: "Εμπειρίες" },
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

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  };

  const isFiltered = activeCategory !== "all";

  return (
    <div style={{ backgroundColor: "#F5F0EB" }}>
      <PageHero image={aerialView} title={pg.heroTitle} subtitle={pg.heroSubtitle} />

      {/* Intro */}
      <section className="py-16 px-6 md:px-16 text-center" style={{ backgroundColor: "#F5F0EB" }}>
        <p
          className="max-w-xl mx-auto"
          style={{
            fontFamily: "'Nanum Myeongjo', serif",
            fontSize: "15px",
            color: "#3a3028",
            lineHeight: 2,
            opacity: 0.7,
          }}
        >
          {pg.intro}
        </p>
      </section>

      {/* ── Category Tabs ── */}
      <section className="px-6 md:px-16 pb-10" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-8 md:gap-12 border-b border-[#3a3028]/10 pb-0">
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
                    fontFamily: "'Catamaran', sans-serif",
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
        </div>
      </section>

      {/* ── Image Grid ── */}
      <section className="px-6 md:px-16 pb-24" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="max-w-6xl mx-auto">
          {isFiltered ? (
            /* Uniform grid for filtered views */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {filteredItems.map((item, i) => (
                <GalleryTile key={`${item.src}-${i}`} item={item} index={i} onClick={openLightbox} uniformHeight />
              ))}
            </div>
          ) : (
            /* Editorial masonry-style grid for "all" */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[280px]">
              {filteredItems.map((item, i) => (
                <GalleryTile key={`${item.src}-${i}`} item={item} index={i} onClick={openLightbox} />
              ))}
            </div>
          )}
        </div>
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
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
            style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            {t.nav.close} ×
          </button>

          {/* Counter */}
          <div
            className="absolute top-6 left-1/2 -translate-x-1/2 text-white/40"
            style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", letterSpacing: "0.3em" }}
          >
            {lightboxIndex + 1} / {filteredItems.length}
          </div>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full mx-4 md:mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain mx-auto block"
            />
            {/* Caption */}
            <p
              className="text-center text-white/50 mt-4"
              style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "13px", letterSpacing: "0.04em" }}
            >
              {filteredItems[lightboxIndex].alt}
            </p>
          </div>

          {/* Prev arrow */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-10"
            style={{ fontFamily: "'Noto Serif Display', serif", fontSize: "40px", lineHeight: 1 }}
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next arrow */}
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-10"
            style={{ fontFamily: "'Noto Serif Display', serif", fontSize: "40px", lineHeight: 1 }}
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
  uniformHeight?: boolean;
}

function GalleryTile({ item, index, onClick, uniformHeight }: GalleryTileProps) {
  return (
    <div
      className={`overflow-hidden cursor-pointer group relative ${uniformHeight ? "h-[280px]" : item.span ?? ""}`}
      onClick={() => onClick(index)}
    >
      <ImageWithFallback
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      {/* Overlay */}
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

      {/* Category pill */}
      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span
          className="uppercase tracking-[0.25em] text-white/80"
          style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "8px", fontWeight: 500 }}
        >
          {item.category}
        </span>
      </div>
    </div>
  );
}
