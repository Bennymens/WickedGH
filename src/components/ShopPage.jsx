import React, { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";
import LargeBanner from "./LargeBanner";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(products.map((p) => p.category))),
];

const TICKER_TEXT =
  "WICKED GH / NEW SEASON / SHOP NOW / WICKED GH / NEW SEASON / SHOP NOW / WICKED GH / NEW SEASON / SHOP NOW / WICKED GH / NEW SEASON / SHOP NOW /\u00A0";

export default function ShopPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="wg-shop">
      {/* Sticky category filter bar */}
      <div className="wg-shop-filterbar">
        <div className="wg-shop-cats">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`wg-shop-cat-btn${active === cat ? " active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="wg-shop-count">{filtered.length} items</span>
      </div>

      {/* Scrolling marquee ticker */}
      <div className="wg-shop-ticker" aria-hidden="true">
        <div className="wg-shop-ticker-track">
          <span>{TICKER_TEXT}</span>
          <span>{TICKER_TEXT}</span>
        </div>
      </div>

      {/* Product grid */}
      <div className="wg-shop-grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} shopView />
        ))}
      </div>

      <LargeBanner />
    </div>
  );
}
