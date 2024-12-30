import React from "react";
import "./LandingPage.css";

import Nav from "../nav/nav.jsx";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <Nav />
      <header className="header">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={5000}
          className="header-carousel"
        >
          <div>
            <img src=""alt="Background1" />
          </div>
          <div>
            <img src=" " alt="Background2" />
          </div>
        </Carousel>
        <div className="header-content">
          <h1>Our Vision</h1>
          <p>
            To create a global online space for opportunities and the betterment of
            individuals and society. Empower and inspire for the greater good of
            humanity.
          </p>
          <button className="about-us-btn">About Us</button>
        </div>
      </header>

      {/* Editorial Section */}
      <section className="editorial">
        <h2>Yuvoice Editorial</h2>
        <p>Bringing you stories around the world</p>
        <div className="editorial-cards">
          <div className="card">
            <img src="/path/to/image1.jpg" alt="Editorial 1" />
            <h3>Story 1</h3>
          </div>
          <div className="card">
            <img src="/path/to/image2.jpg" alt="Editorial 2" />
            <h3>Story 2</h3>
          </div>
          <div className="card">
            <img src="/path/to/image3.jpg" alt="Editorial 3" />
            <h3>Story 3</h3>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="platform">
        <h2>Yuvoice Platform</h2>
        <p>Social Media for a directed net positive</p>
        <div className="platform-content">
          <div className="platform-text">
            <h3>We are actually "social"</h3>
            <ul>
              <li>Designed for connection</li>
              <li>Built for sustainability</li>
              <li>For a net positive impact</li>
            </ul>
          </div>
          <div className="platform-images">
            <img src="/path/to/image4.jpg" alt="Social" />
            <img src="/path/to/image5.jpg" alt="Positive Impact" />
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe">
        <h2>Yuvoice Platform: Social Media for Social Good – Coming Soon in 2025</h2>
        <form>
          <input type="email" placeholder="Enter Email Address" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;