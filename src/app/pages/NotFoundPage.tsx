import { Link } from "react-router";
import logoImg from "../../assets/d70a7dfdc5b2fbaf4173fce891e3d6e1089d971c.png";

export function NotFoundPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: "#F5F0EB" }}
    >
      <img src={logoImg} alt="Amare5" className="h-12 w-auto brightness-0 opacity-40 mb-10" />
      <p
        className="uppercase tracking-[0.5em] mb-4"
        style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", color: "#9A8B7A", fontWeight: 500 }}
      >
        404
      </p>
      <h1
        className="mb-6"
        style={{
          fontFamily: "'Noto Serif Display', serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          color: "#3a3028",
          fontWeight: 400,
        }}
      >
        Page Not Found
      </h1>
      <p
        className="mb-10 opacity-70"
        style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "15px", color: "#3a3028", lineHeight: 1.8 }}
      >
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="uppercase tracking-[0.3em] border border-[#3a3028]/30 px-8 py-3 hover:bg-[#3a3028]/5 transition-colors"
        style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", color: "#3a3028", fontWeight: 500 }}
      >
        Return Home
      </Link>
    </div>
  );
}
