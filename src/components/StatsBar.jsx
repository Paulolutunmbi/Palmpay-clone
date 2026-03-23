import React from 'react';

const stats = [
  {
    icon: '⭐',
    main: '4.6★★★★★',
    sub: '1.08 million reviews',
    prefix: 'Google Play',
  },
  {
    icon: '🏆',
    main: 'Trusted by over',
    sub: '40 million users',
  },
  {
    icon: '⚡',
    main: '15 million',
    sub: 'transactions per day',
  },
  {
    icon: '✅',
    main: '99.95% success',
    sub: 'rate within 10 seconds',
  },
];

const StatsBar = () => {
  return (
    <section className="stats-bar">
      <div className="stats-bar-inner">
        <div className="container">
          <div className="row g-3 justify-content-center">
            {stats.map((stat, i) => (
              <div className="col-lg-3 col-md-6 col-12" key={i}>
                <div className="stats-card">
                  <div className="stats-icon">{stat.icon}</div>
                  <div className="stats-text-block">
                    {stat.prefix && (
                      <div className="stat-sub">{stat.prefix}</div>
                    )}
                    <div className="stat-main">{stat.main}</div>
                    <div className="stat-sub">{stat.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
