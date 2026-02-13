import React from 'react';
import './DiscoverSection.css';

function DiscoverSection() {
  return (
    <div className="discover-section">
      <h2>Discover our services!</h2>
      <div className="button-container">
        <button className="service-button">Buy new & used books</button>
        <button className="service-button">Lend your books for others</button>
        <button className="service-button">Borrow books & return</button>
        <button className="service-button">Sell new & used books</button>
      </div>
    </div>
  );
}

export default DiscoverSection;
