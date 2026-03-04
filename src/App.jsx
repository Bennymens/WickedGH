import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import CategorySection from "./components/CategorySection";
import ProductDetailPage from "./components/ProductDetailPage";
import ShopPage from "./components/ShopPage";
import Footer from "./components/Footer";
import products from "./data/products";

function Home() {
  return (
    <main>
      <Hero />
      <ProductList products={products} />
      <CategorySection />
    </main>
  );
}

function Cart() {
  return (
    <main>
      <div className="wg-cart-page">
        <h1>Your Bag</h1>
        <p className="wg-cart-empty">Your bag is empty — discover new arrivals.</p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
