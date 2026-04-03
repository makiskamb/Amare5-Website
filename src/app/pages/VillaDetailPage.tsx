import { useParams, Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { PageHero } from "../components/PageHero";
import aerialView from "../../assets/c9bb529b302b3d2b068711779b6d02c3a4cf6ff6.png";
import beachfrontView from "../../assets/10d9b78e35f7da071d6b0b3f2c0cfaa201fcca30.png";
import firePitLounge from "../../assets/7742f09983c1ef2d446f89278e9befaba32eae6e.png";
import poolArea from "../../assets/f360338b40e15ac219a17663de6ea3766e5dc3d2.png";

const villaImages: Record<string, string[]> = {
  thalassa: [beachfrontView, poolArea],
  petra: [poolArea, aerialView],
  elia: [aerialView, beachfrontView],
  helios: [firePitLounge, poolArea],
  selene: [beachfrontView, firePitLounge],
};

const villaOrder = ["thalassa", "petra", "elia", "helios", "selene"];

export function VillaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const pv = t.pages.villas;

  const villaKey = slug as keyof typeof t.villas;
  const villa = t.villas[villaKey];
  const images = villaImages[slug || "thalassa"] || [beachfrontView, poolArea];

  if (!villa) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F5F0EB" }}>
        <p style={{ fontFamily: "'Noto Serif Display', serif", color: "#3a3028", fontSize: "24px" }}>
          Villa not found
        </p>
      </div>
    );
  }

  // Find prev / next
  const idx = villaOrder.indexOf(slug || "");
  const prevSlug = idx > 0 ? villaOrder[idx - 1] : null;
  const nextSlug = idx < villaOrder.length - 1 ? villaOrder[idx + 1] : null;

  return (
    <div style={{ backgroundColor: "#F5F0EB" }}>
      <PageHero
        image={images[0]}
        title={villa.name}
        subtitle={villa.tagline}
      />

      {/* Back link */}
      <div className="px-6 md:px-16 pt-10" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="max-w-6xl mx-auto">
          <Link
            to="/villas"
            className="inline-flex items-center gap-2 uppercase tracking-[0.3em] hover:opacity-60 transition-opacity"
            style={{
              fontFamily: "'Catamaran', sans-serif",
              fontSize: "10px",
              color: "#9A8B7A",
              fontWeight: 500,
            }}
          >
            ← {pv.viewAll}
          </Link>
        </div>
      </div>

      {/* Main content */}
      <section className="py-16 px-6 md:px-16" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left: text */}
            <div>
              <p
                className="uppercase tracking-[0.4em] mb-3"
                style={{
                  fontFamily: "'Catamaran', sans-serif",
                  fontSize: "10px",
                  color: "#9A8B7A",
                  fontWeight: 500,
                }}
              >
                {villa.desc}
              </p>
              <h1
                className="mb-8"
                style={{
                  fontFamily: "'Noto Serif Display', serif",
                  fontSize: "clamp(36px, 5vw, 60px)",
                  color: "#3a3028",
                  fontWeight: 400,
                  lineHeight: 1.05,
                }}
              >
                {villa.name}
              </h1>
              <p
                className="mb-6"
                style={{
                  fontFamily: "'Nanum Myeongjo', serif",
                  fontSize: "15px",
                  color: "#3a3028",
                  lineHeight: 2,
                  opacity: 0.85,
                }}
              >
                {villa.details}
              </p>
              <p
                className="mb-10"
                style={{
                  fontFamily: "'Nanum Myeongjo', serif",
                  fontSize: "15px",
                  color: "#3a3028",
                  lineHeight: 2,
                  opacity: 0.7,
                }}
              >
                {villa.details2}
              </p>

              {/* Features */}
              <div className="mb-10">
                <p
                  className="uppercase tracking-[0.35em] mb-5"
                  style={{
                    fontFamily: "'Catamaran', sans-serif",
                    fontSize: "9px",
                    color: "#9A8B7A",
                    fontWeight: 500,
                  }}
                >
                  {pv.featuresLabel}
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {villa.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 pb-3 border-b border-[#3a3028]/8">
                      <div className="w-1 h-1 rounded-full bg-[#9A8B7A] flex-shrink-0" />
                      <span
                        style={{
                          fontFamily: "'Catamaran', sans-serif",
                          fontSize: "12px",
                          color: "#3a3028",
                          fontWeight: 400,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-block uppercase tracking-[0.35em] border border-[#3a3028]/30 px-8 py-3 hover:bg-[#3a3028]/5 transition-all duration-300"
                style={{
                  fontFamily: "'Catamaran', sans-serif",
                  fontSize: "10px",
                  color: "#3a3028",
                  fontWeight: 500,
                }}
              >
                {pv.bookVilla}
              </Link>
            </div>

            {/* Right: images */}
            <div className="space-y-4">
              <div className="overflow-hidden">
                <img
                  src={images[0]}
                  alt={villa.name}
                  className="w-full h-[380px] md:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={images[1]}
                  alt={villa.name + " view"}
                  className="w-full h-[240px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="py-12 px-6 md:px-16 border-t border-[#3a3028]/10" style={{ backgroundColor: "#EDE8E1" }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {prevSlug ? (
            <Link
              to={`/villas/${prevSlug}`}
              className="group flex items-center gap-3 hover:opacity-60 transition-opacity"
            >
              <span
                style={{
                  fontFamily: "'Noto Serif Display', serif",
                  fontSize: "20px",
                  color: "#3a3028",
                }}
              >
                ←
              </span>
              <div>
                <p
                  style={{
                    fontFamily: "'Catamaran', sans-serif",
                    fontSize: "9px",
                    color: "#9A8B7A",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}
                >
                  prev
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif Display', serif",
                    fontSize: "18px",
                    color: "#3a3028",
                    fontWeight: 400,
                  }}
                >
                  {t.villas[prevSlug as keyof typeof t.villas].name}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          <Link
            to="/villas"
            className="hover:opacity-60 transition-opacity"
            style={{
              fontFamily: "'Catamaran', sans-serif",
              fontSize: "9px",
              color: "#9A8B7A",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            {pv.viewAll}
          </Link>

          {nextSlug ? (
            <Link
              to={`/villas/${nextSlug}`}
              className="group flex items-center gap-3 text-right hover:opacity-60 transition-opacity"
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Catamaran', sans-serif",
                    fontSize: "9px",
                    color: "#9A8B7A",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}
                >
                  next
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif Display', serif",
                    fontSize: "18px",
                    color: "#3a3028",
                    fontWeight: 400,
                  }}
                >
                  {t.villas[nextSlug as keyof typeof t.villas].name}
                </p>
              </div>
              <span
                style={{
                  fontFamily: "'Noto Serif Display', serif",
                  fontSize: "20px",
                  color: "#3a3028",
                }}
              >
                →
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  );
}
