import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <div className="landing-content">
        <div className="left-section">
          <h1>Welcome To <br /> Verdant Roots</h1>
          <p className="subtitle">Where Green Meets Serenity</p>
          <button onClick={() => navigate("/products")}>Get Started</button>
        </div>
        <div className="right-section">
          <h2>Welcome to Verdant Roots, where green meets serenity!</h2>
          <p>
            At Verdant Roots, we are passionate about bringing nature closer to you.
            Our mission is to provide a wide range of high-quality plants that
            not only enhance the beauty of your surroundings but also contribute to
            a healthier and more sustainable lifestyle.
          </p>
          <p>
            From air-purifying plants to aromatic fragrant ones, we have something
            for every plant enthusiast. Our expert team ensures every plant meets
            strict standards of quality and care.
          </p>
          <p>
            Whether you're a seasoned gardener or just starting your green journey,
            we're here to support you. Explore our collection, ask questions, and
            let us help you find the perfect plant for your space.
          </p>
          <p>
            Join us in our mission to create a greener, healthier world. Discover
            the beauty of nature right at your doorstep!
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
