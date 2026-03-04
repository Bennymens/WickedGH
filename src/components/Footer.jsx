import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="wg-footer">
      {/* Newsletter */}
      <div className="wg-footer-newsletter">
        <p className="wg-newsletter-label">Subscribe to our newsletter</p>
        <form
          className="wg-newsletter-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="wg-newsletter-input"
            type="email"
            placeholder="Your email address"
          />
          <button className="wg-newsletter-submit" type="submit">
            →
          </button>
        </form>
      </div>

      {/* 4-column links */}
      <div className="wg-footer-body">
        <div className="wg-footer-col">
          <p className="wg-footer-col-title">Information</p>
          <Link to="/">About Wicked GH</Link>
          <Link to="/">Our Story</Link>
          <Link to="/">Sustainability</Link>
          <Link to="/">Careers</Link>
        </div>
        <div className="wg-footer-col">
          <p className="wg-footer-col-title">Customer Care</p>
          <Link to="/">Contact Us</Link>
          <Link to="/">Size Guide</Link>
          <Link to="/">Shipping & Returns</Link>
          <Link to="/">FAQ</Link>
        </div>
        <div className="wg-footer-col">
          <p className="wg-footer-col-title">Follow Us</p>
          <a
            href="https://www.instagram.com/wicked.gh?igsh=MTZuemYyam5qdTk4Nw=="
            target="_blank"
            rel="noopener"
          >
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener">
            Facebook
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener">
            TikTok
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener">
            Pinterest
          </a>
        </div>
        <div className="wg-footer-col">
          <p className="wg-footer-col-title">Legal</p>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Cookie Policy</Link>
          <Link to="/">Terms & Conditions</Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="wg-footer-bottom">
        <p className="wg-footer-copy">
          © {new Date().getFullYear()} Wicked GH — Made in Ghana 🇬🇭
        </p>
        <p className="wg-footer-copy">Premium Ghanaian Craft</p>
      </div>
    </footer>
  );
}
