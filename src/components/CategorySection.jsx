import React from "react";
import { Link } from "react-router-dom";

const CATEGORIES = [
    {
        id: 1,
        label: "Kente",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
    },
    {
        id: 2,
        label: "Jewellery",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80&fit=crop",
    },
    {
        id: 3,
        label: "Home & Art",
        image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600&q=80&fit=crop",
    },
    {
        id: 4,
        label: "Accessories",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80&fit=crop",
    },
];

export default function CategorySection() {
    return (
        <section className="wg-category">
            <div className="wg-category-header">
                <p className="wg-category-eyebrow">Shop by</p>
                <h2 className="wg-category-title">category</h2>
            </div>
            <div className="wg-cat-grid">
                {CATEGORIES.map((cat) => (
                    <Link to="/shop" key={cat.id} className="wg-cat-tile">
                        <img src={cat.image} alt={cat.label} loading="lazy" />
                        <span className="wg-cat-tile-label">{cat.label}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
