import React from 'react';
import cardPayImg from '../assets/images/cardc0446b7c-0f0a-49.png';

const DebitCardSection = () => {
  return (
    <section className="content-section">
      <div className="container">
        <div className="row align-items-center justify-content-between gy-4">
          {/* Left: Text */}
          <div className="col-lg-5 col-md-6">
            <h2 className="section-heading">A debit card that<br />works</h2>
            <p className="section-body">
              Shop online &amp; in-store. Enjoy lower fees and exclusive merchant offers.
            </p>
            <a href="#" className="cta-btn">
              Transact &amp; earn rewards daily!
            </a>
          </div>

          {/* Right: Image */}
          <div className="col-lg-6 col-md-6">
            <img
              src={cardPayImg}
              alt="PalmPay debit card in use"
              className="content-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DebitCardSection;
