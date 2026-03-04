import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, shopView = false }) {
  const navigate = useNavigate();

  return (
    <article
      className={`wg-card${shopView ? " wg-card--shop" : ""}`}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {shopView ? (
        <div className="wg-card-shop-inner">
          <div className="wg-card-img-wrap">
            <img src={product.image} alt={product.name} loading="lazy" />
          </div>
          <div className="wg-card-shop-meta">
            <p className="wg-card-shop-name">{product.name}</p>
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
        </div>
      ) : (
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
      )}
    </article>
  );
}
