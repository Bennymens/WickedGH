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

      {/* 5-column product scroll */}
      <div className="wg-arrivals-scroll">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
