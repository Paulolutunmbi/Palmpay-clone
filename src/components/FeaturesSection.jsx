import React from 'react';
import manImg from '../assets/images/skatedc7a5674-a34a-4e.png';

const features = [
  {
    title: 'Unlimited Free Transfers',
    desc: 'Fast, free & reliable transfers to other PalmPay users and banks',
  },
  {
    title: 'Up to 20% Savings Interest',
    desc: 'Earn interest daily, withdraw anytime',
  },
  {
    title: 'Cashback on bills & more',
    desc: 'Get rewarded for your everyday spending',
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        {/* Title */}
        <h2 className="section-title">Built For People Going Places</h2>
        <p className="section-subtitle">Earn more, save smarter, and level up your life</p>

        <div className="row align-items-center justify-content-between">
          {/* Left: Feature Cards */}
          <div className="col-lg-5 col-md-6">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-title">{f.title}</div>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Right: Man with card image */}
          <div className="col-lg-6 col-md-6 text-center mt-4 mt-md-0">
            <img
              src={manImg}
              alt="Man holding PalmPay card"
              className="features-img"
              style={{ borderRadius: '0', background: 'transparent' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
