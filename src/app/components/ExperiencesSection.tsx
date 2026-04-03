import { useLanguage } from "../context/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import poolArea from "../../assets/f360338b40e15ac219a17663de6ea3766e5dc3d2.png";
import { Sun, Waves, Leaf, Wine } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const sunsetImage =
  "https://images.unsplash.com/photo-1594102937188-529120813b68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMGlzbGFuZCUyMHN1bnNldCUyMGdvbGRlbiUyMGhvdXIlMjBzZWF8ZW58MXx8fHwxNzczMjUxMDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const ICON_COLOR = "#9A8B7A";
const icons: LucideIcon[] = [Sun, Waves, Leaf, Wine];

export function ExperiencesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="py-24 md:py-36 px-6 md:px-16"
      style={{ backgroundColor: "#EDE8E1" }}
    >
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
          {t.experiences.label}
        </p>
        <h2
          className="text-center mb-16"
          style={{
            fontFamily: "'Noto Serif Display', serif",
            fontSize: "clamp(28px, 4vw, 52px)",
            color: "#3a3028",
            fontWeight: 400,
            lineHeight: 1.15,
          }}
        >
          {t.experiences.title}
        </h2>

        {/* Experience cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {t.experiences.items.map((exp, i) => {
            const Icon = icons[i] ?? Sun;
            return (
              <div
                key={i}
                className="text-center p-6 md:p-8"
                style={{ backgroundColor: "#F5F0EB" }}
              >
                <span className="mb-4 flex justify-center">
                  <Icon size={28} color={ICON_COLOR} strokeWidth={1.25} />
                </span>
                <h3
                  style={{
                    fontFamily: "'Noto Serif Display', serif",
                    fontSize: "16px",
                    color: "#3a3028",
                    fontWeight: 400,
                    marginBottom: "8px",
                  }}
                >
                  {exp.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Catamaran', sans-serif",
                    fontSize: "12px",
                    color: "#9A8B7A",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {exp.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Two images side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative overflow-hidden">
            <img
              src={poolArea}
              alt="Private infinity pools at Amare5"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
              <p
                className="text-white"
                style={{
                  fontFamily: "'Noto Serif Display', serif",
                  fontSize: "20px",
                  fontWeight: 400,
                }}
              >
                {t.experiences.poolsCaption}
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <ImageWithFallback
              src={sunsetImage}
              alt="Golden hour sunset at Limenaria"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
              <p
                className="text-white"
                style={{
                  fontFamily: "'Noto Serif Display', serif",
                  fontSize: "20px",
                  fontWeight: 400,
                }}
              >
                {t.experiences.sunsetCaption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}