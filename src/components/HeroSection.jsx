import React from 'react';
import heroImg from '../assets/images/GroupHero4d45664d-962a-45.png';
import ndic from '../assets/images/ndic9117b2cc-810a-44.png';
import cbnBadge from '../assets/images/cb72964df6-4054-47.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-end">
          {/* Left: Content */}
          <div className="col-lg-6 col-md-7 hero-content">
            <h1>The Smarter Way<br />to Bank is Here</h1>
            <p className="hero-subtitle">
              Tools to help you pay, earn, save and<br />
              grow - all in one app
            </p>

            {/* App Store Buttons */}
            <div className="app-buttons">
              {/* Google Play */}
              <a href="#" className="app-btn">
                {/* Google Play SVG icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#4CAF50" d="M1.22 0C.884.184.667.566.667 1.053v21.894c0 .487.217.869.553 1.053l.107.068L12.48 12.93v-.244L1.327.068z"/>
                  <path fill="#FFC107" d="M16.3 16.857l-3.82-3.928v-.244l3.82-3.928.086.05 4.523 2.609c1.292.742 1.292 1.954 0 2.696l-4.523 2.61z"/>
                  <path fill="#FF3D00" d="M16.386 16.806L12.48 12.807 1.22 24.054c.424.448 1.13.5 1.915.05l13.25-7.298"/>
                  <path fill="#4CAF50" d="M16.386 7.194L3.136.05C2.351-.4 1.644-.35 1.22.1L12.48 11.192z"/>
                </svg>
                <div className="btn-text">
                  <span>GET IT ON</span>
                  <span>Google Play</span>
                </div>
              </a>

              {/* App Store */}
              <a href="#" className="app-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 814 1000">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.4-56.8-163.4-123.1C68.9 785.9 16 685.5 16 583.7 16 443.8 106.2 361 194.1 361c65 0 119.2 43.4 160.1 43.4 39.3 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
                </svg>
                <div className="btn-text">
                  <span>Download on the</span>
                  <span>App Store</span>
                </div>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="trust-badge">
                <div className="badge-label">Licensed by<br />the CBN</div>
                <img src={cbnBadge} alt="CBN" />
              </div>
              <div className="trust-badge">
                <div className="badge-label">Deposits<br />Insured by</div>
                <img src={ndic} alt="NDIC" />
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="col-lg-6 col-md-5 hero-image-col d-none d-md-flex">
            <img
              src={heroImg}
              alt="PalmPay App"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
