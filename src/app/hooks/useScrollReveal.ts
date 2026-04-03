import { useEffect } from "react";

/**
 * Global scroll reveal — wires IntersectionObserver to every .am-reveal element.
 * MutationObserver picks up new elements added after page transitions.
 */
export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("am-in-view");
            io.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );

    function observeAll() {
      document.querySelectorAll<Element>(".am-reveal:not(.am-in-view)").forEach((el) => {
        io.observe(el);
      });
    }

    observeAll();

    // Re-scan whenever new nodes land in the DOM (route changes)
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
