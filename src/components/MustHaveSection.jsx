import React from "react";
import { Link } from "react-router-dom";
import MustImage from "../assets/images/products/WhatsApp Image 2026-03-04 at 4.40.36 AM.jpeg";
import HaveImage from "../assets/images/products/WhatsApp Image 2026-03-04 at 4.43.55 AM.jpeg";

const mustHaveItems = [
  {
    id: "prod-1",
    image: MustImage,
    label: "Must",
    name: "Alter Ego Cherry Top",
    price: "€110.00",
    path: "/product/j-432-cognac",
  },
  {
    id: "prod-2",
    image: HaveImage,
    label: "Have",
    name: "Orphic Set",
    price: "€169.00",
    salePrice: "€118.30",
    path: "/product/j-513-ebony",
  },
];

const MustHaveSection = () => {
  return (
    <section className="wg-must-have-section">
      {mustHaveItems.map((item) => (
        <div key={item.id} className="wg-must-have-item">
          <Link to={item.path} className="wg-must-have-img-wrap">
            <img src={item.image} alt={item.name} />
            <span className="wg-must-have-label">{item.label}</span>
          </Link>
          <div className="wg-must-have-details">
            <h3 className="wg-must-have-name">{item.name}</h3>
            <p className="wg-must-have-price">
              {item.salePrice && (
                <span className="wg-pdp-orig">{item.price}</span>
              )}
              {item.salePrice || item.price}
            </p>
            <Link to={item.path} className="wg-must-have-buy-btn">
              Buy
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MustHaveSection;
