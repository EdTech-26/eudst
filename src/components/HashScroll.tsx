import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Handles scrolling to hash anchors on route changes.
 * Works whether the hash link is clicked from the same page or a different page.
 */
const HashScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Wait for the target page to render before scrolling
      const tryScroll = (attempt = 0) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempt < 10) {
          setTimeout(() => tryScroll(attempt + 1), 50);
        }
      };
      tryScroll();
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [pathname, hash]);

  return null;
};

export default HashScroll;
