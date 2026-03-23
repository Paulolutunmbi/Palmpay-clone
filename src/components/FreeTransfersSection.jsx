import React from 'react';
import friendImg from '../assets/images/friendde28b7a3-ba24-40.jpg';

const FreeTransfersSection = () => {
  return (
    <section className="content-section">
      <div className="container">
        <div className="row align-items-center justify-content-between gy-4">
          {/* Left: Text */}
          <div className="col-lg-5 col-md-6">
            <h2 className="section-heading">Stop paying to send<br />money</h2>
            <p className="section-body">
              PalmPay gives you{' '}
              <span className="highlight">unlimited free bank transfers</span>
              {' '}- no daily limits, no hidden fees.
            </p>
            <a href="#" className="cta-btn">
              99.95% success rate within 10 seconds!
            </a>
          </div>

          {/* Right: Image */}
          <div className="col-lg-6 col-md-6">
            <img
              src={friendImg}
              alt="Two friends using PalmPay"
              className="content-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTransfersSection;
