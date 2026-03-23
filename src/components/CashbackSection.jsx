import React from 'react';
import boyImg from '../assets/images/boy7507e911-efb3-48.jpg';

const CashbackSection = () => {
  return (
    <section className="content-section alt">
      <div className="container">
        <div className="row align-items-center justify-content-between gy-4 flex-md-row-reverse flex-column-reverse">
          {/* Right: Image (appears right on desktop) */}
          <div className="col-lg-6 col-md-6">
            <img
              src={boyImg}
              alt="Man enjoying cashback rewards"
              className="content-img"
            />
          </div>

          {/* Left: Text */}
          <div className="col-lg-5 col-md-6 text-md-start text-center">
            <h2 className="section-heading">Cashback on bills &amp;<br />more</h2>
            <p className="section-body">
              From airtime and bills to shopping, get extra value when paying with PalmPay.
            </p>
            <a href="#" className="cta-btn">
              Transact &amp; earn rewards daily!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashbackSection;
