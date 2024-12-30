import React, { useState } from "react";
import "./LandingPage.css";
import background1 from "../assets/landingpage.jpg";
import background2 from "../assets/landingpage2.jpg";
import Nav from "../nav/nav.jsx";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

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
          onChange={handleSlideChange}
          className="header-carousel"
        >
          <div>
            <img src={background1} alt="Background1" />
          </div>
          <div>
            <img src={background2} alt="Background2" />
          </div>
        </Carousel>
        {currentSlide === 0 && (
          <div className="header-content">
            <h2>Our Vision</h2>
            <p>
              To create a <b>global online town square for superheroes </b>
              <br />
              - a space where <b>success is measured by the good you <br />
              do,</b> not by fame, wealth, or power.
            </p>
            <h2>Our Belief</h2>
            <p>
              In our world, <b>People are valued for their purpose and<br />
              positive contributions, and communities are built <br />
              around shared causes,</b> not superficial connections.
            </p>
            <button className="about-us-btn">About Us</button>
          </div>
        )}
        {currentSlide === 1 && (
          <div className="header-content">
            <button className="fiction-btn">Fiction</button>
            <h2>Reclamation</h2>
            <p>
              Emile scowled theatrically at the mirror. His <br />
              imagination ran wild with unearned pride. That's how
              <br />
              I'll look, he thought. That's how I'll look when I march
              <br />
              up to receive that shiny, new badge. He could see it
              <br />
              in his mind so clearly.
            </p>
            <div className="author-info">
              <span className="contact-symbol">👤</span> Wopicho Tony
              <span className="location-symbol">📍</span> USA
            </div>
            <br />
            <button className="learn-more-btn">Read More</button>
          </div>
        )}
      </header>

      {/* Platform Section */}
      <section className="platform">
        <h2>
          Yuvoice <span className="highlight">Platform</span>
        </h2>
        <p>Yuvoice is creating an AI-Backed platform that will disrupt the modern internet.</p>

        <div className="platform-content">
          <div className="platform-box">
            <h3>We are actually <span className="highlight-social">"social"</span></h3>
            <ul>
              <li>We connect real people to real causes</li>
              <li>We focus on genuine friendships in action-oriented communities</li>
              <li>Our game-changing algorithm rewards users for impact</li>
            </ul>
            <img src="/path/to/social-image.jpg" alt="Social Image" />
          </div>
          <div className="platform-box">
            <h3>We are actually <span className="highlight-media">"media"</span></h3>
            <ul>
              <li>Our feed prioritizes high-quality global stories and posts from real friends</li>
              <li>We are an activism incubator, not an outrage incubator</li>
            </ul>
            <div className="media-images">
              <img src="/path/to/image1.jpg" alt="Media Image 1" />
              <img src="/path/to/image2.jpg" alt="Media Image 2" />
              <img src="/path/to/image3.jpg" alt="Media Image 3" />
            </div>
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
