import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="wg-hero">
            {/* Full-bleed editorial image */}
            <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=85&fit=crop&crop=top"
                alt="Wicked GH Collection"
            />

            {/* Bottom text overlay — exact J&J layout */}
            <div className="wg-hero-text-overlay">
                <h1 className="wg-hero-headline">
                    New<br />Season<br />/ Collection
                </h1>
                <div className="wg-hero-meta">
                    <span className="wg-hero-credit">Wicked GH · FW 2025</span>
                    <Link to="/shop" className="wg-hero-cta">Shop Now</Link>
                </div>
            </div>
        </section>
    );
}
