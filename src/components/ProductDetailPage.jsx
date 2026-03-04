import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

function AccordionItem({ title, children }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`wg-pdp-accordion${open ? " open" : ""}`}>
            <button
                className="wg-pdp-accordion-btn"
                onClick={() => setOpen(!open)}
            >
                {title}
            </button>
            <div className="wg-pdp-accordion-body">{children}</div>
        </div>
    );
}

export default function ProductDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((p) => String(p.id) === id);
    const [selectedSize, setSelectedSize] = useState(null);
    const [added, setAdded] = useState(false);

    if (!product) {
        return (
            <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
                <p style={{ color: "#999", fontSize: "0.85rem" }}>Product not found.</p>
                <button
                    className="wg-pdp-back"
                    style={{ marginTop: "1.5rem" }}
                    onClick={() => navigate(-1)}
                >
                    ← Back
                </button>
            </div>
        );
    }

    const handleAddToCart = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="wg-pdp">
            {/* LEFT: Description accordion */}
            <div className="wg-pdp-left">
                <button
                    className="wg-pdp-back"
                    onClick={() => navigate(-1)}
                    style={{ marginBottom: "2rem" }}
                >
                    ← Back
                </button>

                <AccordionItem title="Description">
                    {product.description || "Handcrafted with care by Ghanaian artisans using traditional techniques passed down through generations. Each piece is unique and made with premium materials."}
                </AccordionItem>

                <AccordionItem title="Details">
                    <ul style={{ paddingLeft: "1rem", lineHeight: 2 }}>
                        <li>Material: {product.material || "Premium Ghanaian fabric"}</li>
                        <li>Origin: Ghana 🇬🇭</li>
                        <li>Handmade: Yes</li>
                        <li>Category: {product.category || "Craft"}</li>
                    </ul>
                </AccordionItem>

                <AccordionItem title="Shipping & Returns">
                    Free shipping on orders over GHS 300. Returns accepted within 14 days in original condition.
                </AccordionItem>
            </div>

            {/* CENTER: Product image */}
            <div className="wg-pdp-center">
                {/* Giant name text behind image */}
                <span className="wg-pdp-bg-text" aria-hidden="true">
                    {product.name.split(" ")[0]}
                </span>
                <img src={product.image} alt={product.name} />
            </div>

            {/* RIGHT: Buy panel */}
            <div className="wg-pdp-right">
                <p className="wg-pdp-brand">Wicked GH</p>
                <h1 className="wg-pdp-name">{product.name}</h1>

                <div className="wg-pdp-prices">
                    {product.originalPrice && (
                        <span className="wg-pdp-orig">{product.originalPrice}</span>
                    )}
                    <span className={`wg-pdp-current${product.originalPrice ? " sale" : ""}`}>
                        {product.price}
                    </span>
                </div>

                {/* Size selector */}
                {product.sizes && product.sizes.length > 0 && (
                    <div>
                        <p className="wg-pdp-section-label">Select Size</p>
                        <div className="wg-size-grid">
                            {product.sizes.map((sz) => (
                                <button
                                    key={sz.label}
                                    className={`wg-size-btn${selectedSize === sz.label ? " selected" : ""}${!sz.available ? " oos" : ""}`}
                                    onClick={() => sz.available && setSelectedSize(sz.label)}
                                    title={!sz.available ? "Out of stock" : ""}
                                >
                                    {sz.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Add to cart */}
                <button className="wg-atc-btn" onClick={handleAddToCart}>
                    {added ? "✓ Added!" : "Add to Bag"}
                </button>

                {/* Related links */}
                <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <button
                        className="wg-pdp-back"
                        onClick={() => navigate("/shop")}
                    >
                        ← Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
}
