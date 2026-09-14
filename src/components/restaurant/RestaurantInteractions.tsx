"use client";
import { useEffect } from "react";
declare global {
  interface Window {
    initSanMarino?: () => () => void;
    sanMarinoScripts?: Promise<void>;
  }
}
function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => { script.remove(); reject(new Error(`Unable to load ${src}`)); };
    document.head.appendChild(script);
  });
}
export default function RestaurantInteractions() {
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    window.sanMarinoScripts ??= (async () => {
      await loadScript("/restaurant/gsap.min.js").catch(() => {});
      await loadScript("/restaurant/opening-hours.js");
      await loadScript("/restaurant/app.js");
    })().catch((error) => { window.sanMarinoScripts = undefined; throw error; });
    window.sanMarinoScripts.then(() => {
      if (!disposed) cleanup = window.initSanMarino?.();
    }).catch((error) => console.error("Restaurant controls could not be loaded", error));
    return () => { disposed = true; cleanup?.(); };
  }, []);
  return null;
}
