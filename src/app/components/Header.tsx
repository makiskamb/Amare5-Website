import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import logoImg from "../../assets/d70a7dfdc5b2fbaf4173fce891e3d6e1089d971c.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, setLang } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const useScrolledStyle = scrolled || !isHome;
  const textLight = !useScrolledStyle && !menuOpen;

  const navItems = [
    { label: t.nav.home,          href: "/" },
    { label: t.nav.villas,        href: "/villas" },
    { label: t.nav.experiences,   href: "/experiences" },
    { label: t.nav.gallery,       href: "/gallery" },
    // { label: t.nav.architecture,  href: "/architecture" },
    // { label: t.nav.dining,      href: "/dining" },
    { label: t.nav.contact,       href: "/contact" },
  ];

  // On home + not scrolled + menu closed → show original logo colors
  // On home + scrolled, or any other page → dark logo
  // Over video (home, not scrolled, menu closed) → white (invert)
  // Menu open → dark logo
  const logoFilter = menuOpen
    ? "brightness-0 opacity-70"
    : isHome && !scrolled
    ? "" // original colors
    : useScrolledStyle
    ? "brightness-0 opacity-80"
    : "brightness-0 invert";

  return (
    <>
      {/* ── Centred logo — always fixed ── */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-[200] flex items-center h-[72px] md:h-[88px] pointer-events-none" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
        <Link to="/" viewTransition className="pointer-events-auto">
          <img
            src={logoImg}
            alt="Amare5 Thassos Exclusive Villas"
            className={`h-[60px] md:h-28 w-auto transition-all duration-500 ${logoFilter}`}
          />
        </Link>
      </div>

      {/* ── Header bar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[150] flex items-center justify-between h-[72px] md:h-[88px] transition-all duration-500 ${
          useScrolledStyle
            ? "bg-[#F5F0EB]/92 backdrop-blur-md shadow-sm shadow-black/5"
            : "bg-gradient-to-b from-black/30 to-transparent"
        }`}
        style={{
          paddingLeft: "clamp(16px, 4vw, 48px)",
          paddingRight: "clamp(16px, 4vw, 48px)",
          paddingTop: "env(safe-area-inset-top, 0px)",
          height: "calc(72px + env(safe-area-inset-top, 0px))",
        }}
      >
        {/* Hamburger — always visible */}
        <label className={`burger${textLight && !menuOpen ? " light" : ""}`} aria-label="Toggle menu">
          <input
            type="checkbox"
            checked={menuOpen}
            onChange={(e) => setMenuOpen(e.target.checked)}
          />
          <span />
          <span />
          <span />
        </label>

        {/* Right: Book Now — hidden on mobile, visible md+ */}
        <div className="flex items-center gap-4">
          <Link
            to="/book"
            viewTransition
            className="hidden md:inline-block tracking-[0.28em] uppercase px-5 py-2 transition-all duration-300"
            style={{
              fontFamily: "'Catamaran', sans-serif",
              fontSize: "10px",
              fontWeight: 500,
              color: textLight ? "white" : "#3a3028",
              background: textLight ? "rgba(255,255,255,0.08)" : "rgba(58,48,40,0.06)",
              border: textLight ? "1px solid rgba(255,255,255,0.30)" : "1px solid rgba(58,48,40,0.20)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderRadius: "9999px",
            }}
          >
            {t.nav.bookNow}
          </Link>
        </div>
      </header>

      {/* ── Full-screen Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#F5F0EB" }}
      >
        {/* Overlay top bar — spacer only, burger sits above via z-index */}
        <div style={{ height: "calc(72px + env(safe-area-inset-top, 0px))" }} />

        {/* Nav links */}
        <nav className="flex flex-col items-center justify-center h-[calc(100%-88px)] gap-1">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              to={item.href}
              viewTransition
              onClick={() => setMenuOpen(false)}
              className={`group relative text-[#3a3028] py-2 transition-all duration-300 hover:tracking-widest hover:opacity-60${menuOpen ? " am-menu-item" : ""}`}
              style={{
                fontFamily: "'Noto Serif Display', serif",
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 400,
                letterSpacing: "0.02em",
                animationDelay: menuOpen ? `${i * 0.07}s` : "0s",
              }}
            >
              <span className="relative inline-block">
                {item.label}
                <span
                  className="absolute left-0 -bottom-1 h-px bg-[#3a3028] w-0 group-hover:w-full transition-all duration-500 ease-out"
                />
              </span>
            </Link>
          ))}

          <Link
            to="/book"
            viewTransition
            onClick={() => setMenuOpen(false)}
            className={`mt-8 uppercase tracking-[0.35em] border border-[#3a3028]/30 px-10 py-3 hover:bg-[#3a3028] hover:text-white transition-all duration-300${menuOpen ? " am-menu-item" : ""}`}
            style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", fontWeight: 500, color: "#3a3028", animationDelay: menuOpen ? `${navItems.length * 0.07}s` : "0s" }}
          >
            {t.nav.bookNow}
          </Link>

          {/* ── Bottom row: socials + language ── */}
          <div
            className={`flex items-center gap-6 mt-12${menuOpen ? " am-menu-item" : ""}`}
            style={{ animationDelay: menuOpen ? `${(navItems.length + 1) * 0.07}s` : "0s" }}
          >
            {[
              { label: "Instagram", href: "https://www.instagram.com/" },
              { label: "Facebook",  href: "https://www.facebook.com/" },
              { label: "Google",    href: "https://g.page/" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9A8B7A] hover:text-[#3a3028] transition-colors duration-300"
                style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "13px" }}
              >
                {label}
              </a>
            ))}

            <span className="w-px h-3 bg-[#3a3028]/20" />

            <button
              onClick={() => setLang(lang === "en" ? "gr" : "en")}
              className="uppercase tracking-[0.25em] text-[#9A8B7A] hover:text-[#3a3028] transition-colors duration-300"
              style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", fontWeight: 500 }}
            >
              {lang === "en" ? "ΕΛ" : "EN"}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
