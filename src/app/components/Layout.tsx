import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LenisProvider } from "./LenisProvider";
import { useState, useEffect, useRef } from "react";
import logoImg from "../../assets/d70a7dfdc5b2fbaf4173fce891e3d6e1089d971c.png";
import { useScrollReveal } from "../hooks/useScrollReveal";

function PageLoader() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      // Only intercept internal SPA navigation links
      if (
        href.startsWith("http") ||
        href.startsWith("//") ||
        href.startsWith("mailto") ||
        href.startsWith("tel") ||
        href === "#"
      ) return;

      if (timerRef.current) clearTimeout(timerRef.current);
      setPhase("in");
      setVisible(true);

      timerRef.current = setTimeout(() => {
        setPhase("out");
        timerRef.current = setTimeout(() => setVisible(false), 380);
      }, 560);
    }

    // Capture phase so we fire before React Router's click handler
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#F5F0EB",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation:
          phase === "in"
            ? "am-loader-in 0.22s ease forwards"
            : "am-loader-out 0.38s ease forwards",
        pointerEvents: phase === "in" ? "all" : "none",
      }}
    >
      <img
        src={logoImg}
        alt="Amare5"
        style={{
          height: "150px",
          width: "auto",
          filter: "brightness(0) opacity(0.7)",
          WebkitFilter: "brightness(0) opacity(0.7)",
        }}
      />
    </div>
  );
}

export function Layout() {
  useScrollReveal();
  return (
    <LenisProvider>
      <div className="w-full" style={{ backgroundColor: "#F5F0EB" }}>
        <Header />
        <PageLoader />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </LenisProvider>
  );
}
