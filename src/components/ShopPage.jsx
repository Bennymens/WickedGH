import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

export default function ShopPage() {
    return (
        <div className="wg-shop">
            {/* Toolbar */}
            <div className="wg-shop-toolbar">
                <p className="wg-shop-title">All Products</p>
                <p className="wg-shop-count">{products.length} items</p>
            </div>

            {/* 3-col product grid */}
            <div className="wg-shop-grid">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
}
