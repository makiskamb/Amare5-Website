import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ image, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] md:h-[68vh] w-full overflow-hidden" aria-label={`Hero — ${title}`}>
      {/* Background */}
      <ImageWithFallback
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover am-kenburns"
        style={{ animationDuration: "28s" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/55" />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.3) 100%)" }}
      />

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        {subtitle && (
          <p
            className="am-hero-item am-d1 tracking-[0.6em] uppercase mb-5"
            style={{
              fontFamily: "'Catamaran', sans-serif",
              fontSize: "10px",
              fontWeight: 500,
              opacity: 0.65,
            }}
          >
            {subtitle}
          </p>
        )}

        {/* Thin line above title */}
        <div className="am-line w-10 h-px bg-white/35 mb-6 origin-center" />

        <h1
          className="am-hero-item am-d2"
          style={{
            fontFamily: "'Noto Serif Display', serif",
            fontSize: "clamp(34px, 6vw, 70px)",
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: "0.04em",
          }}
        >
          {title}
        </h1>
      </div>

      {/* Bottom fade into page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{ background: "linear-gradient(to bottom, transparent, #F5F0EB)" }}
      />
    </section>
  );
}
