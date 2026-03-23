import React from 'react';
import familyImg from '../assets/images/famlily4e071cff-a8b0-45.jpg';

const InsuranceSection = () => {
  return (
    <section className="content-section">
      <div className="container">
        <div className="row align-items-center justify-content-between gy-4">
          {/* Left: Image */}
          <div className="col-lg-6 col-md-6">
            <img
              src={familyImg}
              alt="Happy family at home"
              className="content-img"
            />
          </div>

          {/* Right: Text */}
          <div className="col-lg-5 col-md-6 text-md-start text-center">
            <h2 className="section-heading">Life happens. Be<br />covered.</h2>
            <p className="section-body">
              Get quick, reliable protection for health, phones, and more –
              no paperwork needed.
            </p>
            <a href="#" className="cta-btn">
              Interest paid daily. Withdraw anytime.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
