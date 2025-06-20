import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hat Profile Optimization
          </h1>
          <p className="hero-subtitle">
            Reduce costs and CO2 footprint by optimizing steel usage
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Get Started
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <div className="features-container">
          <h2 className="features-title">Why Choose Hat Profile Optimization?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Cost Reduction</h3>
              <p>Optimize material usage to significantly reduce production costs and waste.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Environmental Impact</h3>
              <p>Lower your CO2 footprint through efficient steel usage and sustainable practices.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Smart Analytics</h3>
              <p>Advanced algorithms analyze your production patterns for maximum efficiency.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 