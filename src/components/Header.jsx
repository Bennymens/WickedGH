import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const handleNavClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Announcement ticker */}
      <div className="wg-ticker">
        New arrivals — Premium Ghanaian craft, handmade with love 🇬🇭
      </div>

      {/* Main header */}
      <header className="wg-header">
        {/* LEFT: Hamburger */}
        <button
          className={`wg-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* CENTER: Logo + desktop nav */}
        <div className="wg-header-center">
          <Link to="/" className="wg-logo" onClick={() => setMenuOpen(false)}>
            Wicked GH
          </Link>
          <nav className="wg-header-nav">
            <Link to="/shop">New Arrivals</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/">About</Link>
          </nav>
        </div>

        {/* RIGHT: account + bag */}
        <div className="wg-header-right">
          <Link to="/" className="wg-desktop-only">Login</Link>
          <Link to="/" className="wg-desktop-only">Register</Link>
          <Link to="/cart">Bag (0)</Link>
        </div>
      </header>

      {/* Full-screen mobile menu overlay */}
      <div className={`wg-menu-overlay${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}>
        {/* Mirror header row in overlay */}
        <div className="wg-overlay-header">
          <button
            className={`wg-hamburger open`}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span />
            <span />
            <span />
          </button>
          <Link to="/" className="wg-overlay-logo" onClick={() => setMenuOpen(false)}>
            Wicked GH
          </Link>
        </div>

        {/* Main nav links */}
        <nav className="wg-overlay-nav">
          <a onClick={() => handleNavClick("/shop")}>New Arrivals</a>
          <a onClick={() => handleNavClick("/shop")}>Shop</a>
          <a onClick={() => handleNavClick("/")}>About</a>
          <a onClick={() => handleNavClick("/")}>Campaign</a>
          <a onClick={() => handleNavClick("/")}>Contact</a>
        </nav>

        {/* Secondary links */}
        <div className="wg-overlay-secondary">
          <a onClick={() => handleNavClick("/")}>Login</a>
          <a onClick={() => handleNavClick("/")}>Register</a>
          <a onClick={() => handleNavClick("/cart")}>Bag (0)</a>
        </div>
      </div>
    </>
  );
}
