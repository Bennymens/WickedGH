import React from "react";
import EvaBanner from "../assets/images/banners/Eva.jpeg";

const LargeBanner = () => {
  return (
    <section className="wg-large-banner">
      <img src={EvaBanner} alt="Large promotional banner" />
      <div className="wg-large-banner-text">
        <span className="wg-large-banner-line">WICKED</span>
        <span className="wg-large-banner-line">GH</span>
      </div>
    </section>
  );
};

export default LargeBanner;
