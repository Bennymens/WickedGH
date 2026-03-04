import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <section className="wg-arrivals">
      {/* Section eyebrow + giant title bleeding into grid */}
      <div className="wg-arrivals-header">
        <p className="wg-arrivals-eyebrow">New</p>
        <h2 className="wg-arrivals-title">arrivals</h2>
      </div>

      {/* Seamless auto-scrolling row */}
      <div className="wg-arrivals-marquee">
        <div className="wg-arrivals-track">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
          {/* Duplicate for seamless effect */}
          {products.map((p) => (
            <ProductCard key={`${p.id}-dup`} product={p} aria-hidden="true" />
          ))}
        </div>
      </div>
    </section>
  );
}
