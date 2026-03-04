import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <article
      className="wg-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="wg-card-img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="wg-card-info-wrap">
          <div className="wg-card-info">
            <p className="wg-card-name">{product.name}</p>
            <div className="wg-card-price-col">
              {product.originalPrice && (
                <span className="wg-card-orig">{product.originalPrice}</span>
              )}
              <span
                className={`wg-card-price${product.originalPrice ? " sale" : ""}`}
              >
                {product.price}
              </span>
            </div>
          </div>
          <button
            className="wg-buy-btn"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id}`);
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </article>
  );
}
