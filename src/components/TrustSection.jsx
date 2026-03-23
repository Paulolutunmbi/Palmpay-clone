import React from 'react';
import cbnImg from '../assets/images/cb72964df6-4054-47.png';
import ndicImg from '../assets/images/ndic9117b2cc-810a-44.png';

const trustPillars = [
  {
    title: 'Licenced by the CBN',
    desc: 'We are fully licensed by the Central Bank of Nigeria, so you can bank with confidence knowing your money is always in safe hands.',
  },
  {
    title: 'Reliable',
    desc: 'We safeguard your data and funds with advanced encryption, fraud detection, and multiple authentication layers.',
  },
  {
    title: '24/7 Support',
    desc: 'Our customer care and fraud desk are available 24/7, with in-app reporting tools for instant support whenever you need it.',
  },
];

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="container">
        {/* Title */}
        <h2 className="trust-title">Your money's safe space</h2>

        {/* Badges row */}
        <div className="trust-badges-row">
          <div className="trust-badge-item">
            <div className="trust-badge-label">
              Licenced by<br />the CBN
            </div>
            <img src={cbnImg} alt="Central Bank of Nigeria" className="trust-badge-img" />
          </div>
          <div className="trust-badge-divider" />
          <div className="trust-badge-item">
            <div className="trust-badge-label">
              Deposits<br />insured by
            </div>
            <img src={ndicImg} alt="NDIC" className="trust-badge-img ndic-img" />
          </div>
        </div>

        {/* Three pillars */}
        <div className="row trust-pillars-row">
          {trustPillars.map((p, i) => (
            <div className="col-md-4 trust-pillar" key={i}>
              {i > 0 && <div className="trust-pillar-divider" />}
              <h4 className="trust-pillar-title">{p.title}</h4>
              <p className="trust-pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
