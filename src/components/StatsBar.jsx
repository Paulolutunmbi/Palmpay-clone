import React from 'react';

const StatsBar = () => {
  return (
    <section className="stats-bar">
      <div className="stats-bar-inner">
        <div className="container">
          <div className="row g-3 justify-content-center">
            
            {/* Card 1: Reviews */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="stats-card">
                <div className="stats-icon">
                  {/* Approximate Google Play logo SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 3.5L16 12L4 20.5V3.5Z" fill="#32CD32"/>
                    <path d="M4 3.5L18 13.5L16 12L4 3.5Z" fill="#FF4500"/>
                    <path d="M16 12L18 13.5L20 12L16 12Z" fill="#FFD700"/>
                    <path d="M4 20.5L18 10.5L16 12L4 20.5Z" fill="#1E90FF"/>
                  </svg>
                </div>
                <div className="stats-text-block">
                  <div className="stat-sub" style={{ fontSize: '0.65rem' }}>GET IT ON<br/>Google Play</div>
                  <div className="stat-main">
                    <div className="google-play-text">
                      4.6* <span>★★★★☆</span>
                    </div>
                  </div>
                  <div className="reviews-text">1.08 million reviews</div>
                </div>
              </div>
            </div>

            {/* Card 2: 40 million users */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="stats-card">
                <div className="stats-icon" style={{ fontSize: '1.6rem' }}>🤝</div>
                <div className="stats-text-block">
                  <div className="stat-main">Trusted by over<br/>40 million users</div>
                </div>
              </div>
            </div>

            {/* Card 3: 15 million transactions */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="stats-card">
                <div className="stats-icon" style={{ fontSize: '1.6rem', color: '#F5A623' }}>⚡</div>
                <div className="stats-text-block">
                  <div className="stat-main">15 million<br/>transactions<br/>per day</div>
                </div>
              </div>
            </div>

            {/* Card 4: 99.95% success */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="stats-card">
                <div className="stats-icon">
                  <div style={{ background: '#00D13B', color: 'white', borderRadius: '4px', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold' }}>✓</div>
                </div>
                <div className="stats-text-block">
                  <div className="stat-main">99.95% success<br/>rate within 10<br/>seconds</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
