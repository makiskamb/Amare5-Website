import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import aerialView from "../../assets/c9bb529b302b3d2b068711779b6d02c3a4cf6ff6.jpg";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.jpg";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.jpg";
import poolArea from "../../assets/f360338b40e15ac219a17663de6ea3766e5dc3d2.jpg";
import diningArea from "../../assets/2717ed628ed4f4d73050575531c0e1a3eac316c6.jpg";

const slideImages = [aerialView, beachfrontView, firePitLounge, poolArea, diningArea];

export function GallerySlider() {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();
  const slides = slideImages.map((image, i) => ({
    image,
    caption: t.gallery.slides[i] || "",
  }));

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  return (
    <section id="gallery" className="py-24 md:py-36 px-6 md:px-16" style={{ backgroundColor: "#F5F0EB" }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="text-center uppercase tracking-[0.5em] mb-4"
          style={{
            fontFamily: "'Catamaran', sans-serif",
            fontSize: "11px",
            color: "#9A8B7A",
            fontWeight: 500,
          }}
        >
          {t.gallery.label}
        </p>
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: "'Noto Serif Display', serif",
            fontSize: "clamp(28px, 4vw, 52px)",
            color: "#3a3028",
            fontWeight: 400,
          }}
        >
          {t.gallery.title}
        </h2>

        <div className="relative overflow-hidden">
          <div className="aspect-[16/9] md:aspect-[21/9] relative">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                <ImageWithFallback
                  src={slide.image}
                  alt={slide.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>

          {/* Caption */}
          <p
            className="text-center mt-6"
            style={{
              fontFamily: "'Nanum Myeongjo', serif",
              fontSize: "15px",
              color: "#3a3028",
              opacity: 0.7,
            }}
          >
            {slides[current].caption}
          </p>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prev}
              className="text-[#3a3028]/60 hover:text-[#3a3028] transition-colors"
              style={{ fontFamily: "'Noto Serif Display', serif", fontSize: "28px" }}
            >
              &#8249;
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "bg-[#3a3028] w-6" : "bg-[#3a3028]/25 w-2"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="text-[#3a3028]/60 hover:text-[#3a3028] transition-colors"
              style={{ fontFamily: "'Noto Serif Display', serif", fontSize: "28px" }}
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
