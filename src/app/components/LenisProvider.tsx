import { createContext, useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const location = useLocation();

  // Initialise Lenis once in native scroll mode
  useEffect(() => {
    const lenis = new Lenis({
      // Native scroll — Lenis intercepts wheel/touch events and re-dispatches
      // smooth scroll to the real window, so window.scrollY always reflects the
      // true position and the page grows to its natural content height.
      lerp: 0.08,       // smoothing factor (0 = instant, 1 = never arrives)
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scroll to top (instant) on every route change
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [location.pathname]);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
}
