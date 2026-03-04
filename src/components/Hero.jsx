import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="wg-hero">
      {/* Full-bleed editorial video */}
      <video
        src="/videos/hero/WhatsApp Video 2026-03-03 at 2.40.33 PM (1).mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Bottom text overlay — exact J&J layout */}
      <div className="wg-hero-text-overlay">
        <h1 className="wg-hero-headline">
          New
          <br />
          Season
          <br />/ Collection
        </h1>
        <div className="wg-hero-meta">
          <span className="wg-hero-credit">Wicked GH · FW 2025</span>
          <Link to="/shop" className="wg-hero-cta">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
