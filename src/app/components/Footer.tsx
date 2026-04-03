import { useState } from "react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import logoImg from "../../assets/d70a7dfdc5b2fbaf4173fce891e3d6e1089d971c.png";

export function Footer() {
  const [email, setEmail] = useState("");
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-20 md:py-28 px-6 md:px-16" style={{ backgroundColor: "#3a3028" }}>
      <div className="max-w-5xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/">
            <img
              src={logoImg}
              alt="Amare5 Thassos Exclusive Villas"
              className="h-32 md:h-44 w-auto mx-auto brightness-0 invert opacity-80"
            />
          </Link>
        </div>
        <div className="w-12 h-px bg-white/20 mx-auto mb-10" />

        {/* Newsletter */}
        <div className="max-w-md mx-auto mb-16">
          <p
            className="text-center mb-5 uppercase tracking-[0.3em] text-white/50"
            style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", fontWeight: 500 }}
          >
            {t.footer.stayInTouch}
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.footer.emailPlaceholder}
              className="flex-1 bg-transparent border-b border-white/20 px-2 py-2 outline-none text-white placeholder:text-white/30"
              style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "13px" }}
            />
            <button
              className="uppercase tracking-[0.3em] border border-white/20 px-5 py-2 text-white/70 hover:text-white hover:border-white/40 transition-colors"
              style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", fontWeight: 500 }}
            >
              {t.footer.subscribe}
            </button>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-12">
          {[
            { label: t.nav.villas, href: "/villas" },
            { label: t.nav.experiences, href: "/experiences" },
            // { label: t.nav.dining, href: "/dining" },
            { label: t.nav.gallery, href: "/gallery" },
            { label: t.nav.contact, href: "/contact" },
            { label: t.nav.bookNow, href: "/book" },
          ].map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-white/40 hover:text-white/80 transition-colors uppercase tracking-[0.25em]"
              style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "9px", fontWeight: 500 }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-center md:text-left">
          <div>
            <p
              className="uppercase tracking-[0.3em] mb-4 text-white/40"
              style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", fontWeight: 500 }}
            >
              {t.footer.locationLabel}
            </p>
            <p
              className="text-white/60"
              style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "14px", lineHeight: 2 }}
            >
              {t.footer.locationLine1}
              <br />
              {t.footer.locationLine2}
            </p>
          </div>
          <div>
            <p
              className="uppercase tracking-[0.3em] mb-4 text-white/40"
              style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", fontWeight: 500 }}
            >
              {t.footer.contactLabel}
            </p>
            <p
              className="text-white/60"
              style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: "14px", lineHeight: 2 }}
            >
              T: +30 2593 000000
              <br />
              E: info@amare5.gr
            </p>
          </div>
          <div>
            <p
              className="uppercase tracking-[0.3em] mb-4 text-white/40"
              style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", fontWeight: 500 }}
            >
              {t.footer.followUsLabel}
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {["Instagram", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                  style={{
                    fontFamily: "'Nanum Myeongjo', serif",
                    fontSize: "14px",
                  }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {[
            { label: t.footer.privacyPolicy, href: "/privacy" },
            { label: t.footer.cookiePolicy, href: "/cookies" },
            { label: t.footer.terms, href: "/terms" },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.href}
              viewTransition
              className="text-white/30 hover:text-white/60 transition-colors"
              style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px", fontWeight: 400 }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6">
          <p
            className="text-center text-white/25"
            style={{ fontFamily: "'Catamaran', sans-serif", fontSize: "10px" }}
          >
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}