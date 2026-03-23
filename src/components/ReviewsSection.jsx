import React from 'react';
import friendImg from '../assets/images/friendde28b7a3-ba24-40.jpg';

const reviews = [
  {
    avatar: friendImg,
    avatarType: 'img',
    name: 'Olamide Michael Olatunji',
    date: '8/18/25',
    text: 'PalmPay has been a game changer for me. Transactions are always fast and reliable, and I love the convenience of paying bills and sending money instantly without stress. The app is very easy to use, and the cashback rewards make it even better. Their loan and savings options are also quite helpful. Overall, PalmPay makes digital banking simple, quick, and rewarding. I highly recommend it!',
    highlights: ['game changer', 'convenience of paying bills and sending money instantly', 'cashback rewards', 'banking simple, quick, and rewarding', 'highly recommend'],
  },
  {
    avatarType: 'initial',
    initial: 'A',
    name: 'Anna',
    date: '8/19/25',
    text: "One of the best banking apps at the moment. Quick transactions, PalmPoints, betting discounts, and Coupon that reward users. In fact, it's the only banking app with so many benefits for its users. For me, it's PalmPay forever. Highly recommended for an amazing banking experience.",
    highlights: ['Quick transactions', 'PalmPoints', 'betting discounts', 'Coupon', 'Highly recommended'],
  },
];

const ReviewsSection = () => {
  return (
    <section className="reviews-section">
      <div className="container">
        <h2 className="reviews-title">Loved by 40 Million Users</h2>
        <p className="reviews-subtitle">
          We are the highest-rated fintech app in Africa, with a 4.6*<br />
          rating on the Google Play Store across 1.09 million reviews.
        </p>

        <div className="row reviews-cards-row gy-4">
          {reviews.map((r, i) => (
            <div className="col-md-6" key={i}>
              <div className="review-card">
                {/* Header */}
                <div className="review-header">
                  {r.avatarType === 'img' ? (
                    <img src={r.avatar} alt={r.name} className="review-avatar-img" />
                  ) : (
                    <div className="review-avatar-initial">{r.initial}</div>
                  )}
                  <div className="review-meta">
                    <div className="review-name">{r.name}</div>
                    <div className="review-stars-row">
                      <span className="review-stars">★★★★★</span>
                      <span className="review-date">{r.date}</span>
                    </div>
                  </div>
                </div>
                {/* Body */}
                <p className="review-text">{r.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* App Store Buttons */}
        <div className="reviews-app-btns">
          <a href="#" className="reviews-store-btn black-btn">
            <span className="store-icon">▶</span>
            <span className="store-btn-text">
              <span className="store-label">GET IT ON</span>
              <span className="store-name">Google Play</span>
            </span>
          </a>
          <a href="#" className="reviews-store-btn black-btn">
            <span className="store-icon apple-icon">⌘</span>
            <span className="store-btn-text">
              <span className="store-label">Download on the</span>
              <span className="store-name">App Store</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
