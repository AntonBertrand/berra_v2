import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Routes render at whatever scroll offset the previous page was left at, so
 * reset to the top on every navigation (in-page #anchors are left alone).
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
