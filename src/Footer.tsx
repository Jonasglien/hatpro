import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <p>&copy; 2024 HatPro. All rights reserved.</p>
          </div>
          <div className="footer-section">
            <p>Contact us: <a href="mailto:info@hatpro.com" className="footer-email">info@hatpro.com</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 