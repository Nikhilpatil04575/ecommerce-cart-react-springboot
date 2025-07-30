import React, { useState } from "react";
import items from "./Items";
import "../styles/product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HeroSection = () => {



  const dispatch = useDispatch();









  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from items
  const categories = ["All", ...new Set(items.map((item) => item.category))];

  // Filter items based on the selected category
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>

          <div className="hero-btn">
            <button>
              <a href="products">Shop Now </a>
            </button>
            <p>
              NEW <br />
              LAUNCH...
            </p>
          </div>

          <div className="shopping">
            <p>Also Available On</p>

            <div className="brand-icons">
              <img src="/images/amazon.png" alt="amazon-logo" />
              <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.png" alt="hero-image" />
        </div>
      </main>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Categories</h2>
        <div className="categories">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Filtered Items Section */}
      <section className="filtered-items">
        <h2>Products</h2>
        <div className="product-grid">
          {filteredItems.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <p>Rs:{item.price}</p>
              
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSection;