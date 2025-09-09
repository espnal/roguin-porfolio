import { useEffect, useRef } from "react";

/**
 * Spotlight wrapper (React, JS)
 * - size: string (ej. "360px", "30vw")
 * - disableOnTouch: si true, desactiva y añade la clase .no-spotlight al detectar touch
 *
 * Uso: envolver tu <Component /> en _app.js o en layout:
 * <Spotlight size="420px"><App /></Spotlight>
 */
export default function Spotlight({
  children,
  size = "360px",
  disableOnTouch = true,
}) {
  const rafRef = useRef(null);

  useEffect(() => {
    // set size inicial
    document.documentElement.style.setProperty("--spotlight-size", size);

    let touchDetected = false;

    const handleMove = (e) => {
      if (touchDetected && disableOnTouch) return; // si ya detectamos touch, ignoramos mouse
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;

      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mouse-x", x);
        document.documentElement.style.setProperty("--mouse-y", y);
      });
    };

    const handleTouch = (e) => {
      touchDetected = true;
      if (disableOnTouch) {
        // añade clase para ocultar el spotlight
        document.documentElement.classList.add("no-spotlight");
      } else {
        // actualizar coordenadas con el primer touch
        if (!e.touches || e.touches.length === 0) return;
        const t = e.touches[0];
        const x = `${t.clientX}px`;
        const y = `${t.clientY}px`;
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          document.documentElement.style.setProperty("--mouse-x", x);
          document.documentElement.style.setProperty("--mouse-y", y);
        });
      }
    };

    const handleLeave = () => {
      // opcional: centrar el spotlight cuando el cursor sale
      document.documentElement.style.setProperty("--mouse-x", "50%");
      document.documentElement.style.setProperty("--mouse-y", "50%");
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("touchend", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchend", handleLeave);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [size, disableOnTouch]);

  return <div className="spotlight">{children}</div>;
}
