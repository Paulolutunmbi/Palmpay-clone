import React from 'react';
import girlImg from '../assets/images/girl8d8a28aa-9ae2-47.jpg';

const CreditSection = () => {
  return (
    <section className="content-section">
      <div className="container">
        <div className="row align-items-center justify-content-between gy-4">
          {/* Left: Image */}
          <div className="col-lg-6 col-md-6">
            <img
              src={girlImg}
              alt="Woman at market using PalmPay"
              className="content-img"
            />
          </div>

          {/* Right: Text */}
          <div className="col-lg-5 col-md-6 text-md-end text-center">
            <h2 className="section-heading text-md-end">Get credit when you<br />need it</h2>
            <p className="section-body text-md-end">
              With instant approval and transparent pricing, credit on PalmPay helps you move forward.
            </p>
            <div className="text-md-end">
              <a href="#" className="cta-btn">
                Fuel your next move
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditSection;
