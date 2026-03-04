import React from "react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  {
    id: 1,
    label: "Alter Ego",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
  },
  {
    id: 2,
    label: "Orphic Set",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80&fit=crop",
  },
  {
    id: 3,
    label: "Void",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80&fit=crop",
  },
];

export default function CategorySection() {
  return (
    <section className="wg-category">
      <div className="wg-category-header">
        <p className="wg-category-eyebrow">Explore our</p>
        <h2 className="wg-category-title">collection</h2>
      </div>
      <div className="wg-cat-grid">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="wg-cat-item">
            <Link to="/shop" className="wg-cat-tile">
              <img src={cat.image} alt={cat.label} loading="lazy" />
              <div className="wg-cat-tile-btn-wrap">
                <button className="wg-cat-tile-btn">Shop</button>
              </div>
            </Link>
            <span className="wg-cat-tile-label">{cat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
