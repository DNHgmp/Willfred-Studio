"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { ArrowDown, Smartphone } from "lucide-react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function Hero() {
  const backgroundRef = useRef<HTMLImageElement>(null);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [flashActive, setFlashActive] = useState(false);

  useEffect(() => {
    const background = backgroundRef.current;
    if (background?.complete && background.naturalWidth > 0) setFlashActive(true);
  }, []);

  useEffect(() => {
    const updateCover = () => {
      const progress = clamp(window.scrollY / (window.innerHeight * 0.72), 0, 1);
      document.documentElement.style.setProperty("--cover-progress", String(progress));
    };

    updateCover();
    window.addEventListener("scroll", updateCover, { passive: true });
    return () => window.removeEventListener("scroll", updateCover);
  }, []);

  useEffect(() => {
    if (!motionEnabled) return;

    const handleOrientation = (event: DeviceOrientationEvent) => {
      const background = backgroundRef.current;
      if (!background || event.beta === null || event.gamma === null) return;

      background.style.setProperty("--camera-tilt-x", `${clamp(event.beta / 35, -1.4, 1.4)}deg`);
      background.style.setProperty("--camera-tilt-y", `${clamp(event.gamma / 35, -1.4, 1.4)}deg`);
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, [motionEnabled]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || motionEnabled) return;
    const background = backgroundRef.current;
    if (!background) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    background.style.setProperty("--camera-tilt-x", `${-vertical * 1.4}deg`);
    background.style.setProperty("--camera-tilt-y", `${horizontal * 1.4}deg`);
  };

  const resetPointer = () => {
    if (motionEnabled) return;
    backgroundRef.current?.style.setProperty("--camera-tilt-x", "0deg");
    backgroundRef.current?.style.setProperty("--camera-tilt-y", "0deg");
  };

  const enableMotion = async () => {
    try {
      const orientation = DeviceOrientationEvent as typeof DeviceOrientationEvent & {
        requestPermission?: () => Promise<"granted" | "denied">;
      };
      if (orientation.requestPermission && await orientation.requestPermission() !== "granted") return;
      setMotionEnabled((enabled) => !enabled);
    } catch {
      setMotionEnabled(false);
    }
  };

  return (
    <section
      className="hero"
      id="inicio"
      aria-label="Willfred Studio Photography"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <img
        className="hero-backdrop"
        ref={backgroundRef}
        src="/hero-photo.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        onLoad={() => setFlashActive(true)}
      />
      <div className={`hero-flash${flashActive ? " is-active" : ""}`} aria-hidden="true" />
      <div className="hero-topline">
        <div className="hero-topline-left">
          <span>ESTUDIO FOTOGRÁFICO</span>
          <span className="hero-services">BODAS <i>·</i> EVENTOS <i>·</i> RETRATOS</span>
        </div>
        <a href="#contacto">RESERVAS <span aria-hidden="true">↗</span></a>
      </div>

      <div className="hero-logo">
        <h1 className="hero-title">Willfred Studio</h1>
        <p className="hero-subtitle">P H O T O G R A P H Y</p>
      </div>

      <button
        className="camera-motion-button"
        type="button"
        onClick={enableMotion}
        aria-label={motionEnabled ? "Desactivar movimiento del fondo" : "Activar movimiento del fondo"}
        aria-pressed={motionEnabled}
        title="Activar movimiento con el teléfono"
      >
        <Smartphone size={15} strokeWidth={1.5} aria-hidden="true" />
      </button>

      <a className="scroll-cue" href="#portafolio">
        <span>DESLIZA PARA DESCUBRIR</span>
        <ArrowDown size={16} strokeWidth={1.4} aria-hidden="true" />
      </a>
    </section>
  );
}