import React from 'react';
import phoneImg from '../assets/images/test14cd7c07-4b3b-45.png';

const AppDownloadSection = () => {
  return (
    <section className="app-download-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Left: Phone Image */}
          <div className="col-lg-5 col-md-6 text-center">
            <img
              src={phoneImg}
              alt="Hand holding phone with PalmPay app"
              className="app-download-phone"
            />
          </div>

          {/* Right: Text & Buttons */}
          <div className="col-lg-5 col-md-6 text-md-start text-center">
            <h2 className="app-download-heading">
              Download the PalmPay app now and discover a smarter way to bank
            </h2>
            <div className="app-download-btns">
              <a href="#" className="app-dl-btn black-btn">
                <span className="app-dl-icon">▶</span>
                <span className="app-dl-text">
                  <span className="app-dl-label">GET IT ON</span>
                  <span className="app-dl-store">Google Play</span>
                </span>
              </a>
              <a href="#" className="app-dl-btn black-btn">
                <span className="app-dl-icon apple">⌘</span>
                <span className="app-dl-text">
                  <span className="app-dl-label">Download on the</span>
                  <span className="app-dl-store">App Store</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
