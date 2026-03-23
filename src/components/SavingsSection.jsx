import React from 'react';
import manImg from '../assets/images/man2fbe4333-1784-4b.jpg';

const SavingsSection = () => {
  return (
    <section className="content-section alt">
      <div className="container">
        <div className="row align-items-center justify-content-between gy-4 flex-md-row-reverse flex-column-reverse">
          {/* Right: Text (appears right on desktop) */}
          <div className="col-lg-5 col-md-6 text-md-start text-center">
            <h2 className="section-heading">Earn up to 20% on<br />your savings</h2>
            <p className="section-body">
              You work hard for your money. We work just as hard for you. Pick from{' '}
              <span className="highlight">flexible and fixed plans</span>
              {' '}to help you reach your goals faster.
            </p>
            <a href="#" className="cta-btn">
              Interest paid daily. Withdraw anytime.
            </a>
          </div>

          {/* Left: Image */}
          <div className="col-lg-6 col-md-6">
            <img
              src={manImg}
              alt="Man checking savings on phone"
              className="content-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsSection;
