import React from 'react';

const JoinBannerSection = () => {
  return (
    <section className="join-banner-section">
      <div className="container">
        <div className="join-banner-inner">
          <div className="join-banner-text">
            Join <strong>40 million</strong> users who love PalmPay
          </div>
          <div className="join-banner-btns">
            <a href="#" className="join-store-btn outline-btn">
              <span className="join-store-icon">▶</span>
              <span className="join-store-text">
                <span className="join-store-label">GET IT ON</span>
                <span className="join-store-name">Google Play</span>
              </span>
            </a>
            <a href="#" className="join-store-btn outline-btn">
              <span className="join-store-icon apple">⌘</span>
              <span className="join-store-text">
                <span className="join-store-label">Download on the</span>
                <span className="join-store-name">App Store</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinBannerSection;
