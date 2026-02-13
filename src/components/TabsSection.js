import React from 'react';
import './TabsSection.css';

function TabsSection() {
  return (
    <div className="tabs-section">
      <a href="/" className="tab">Home</a>
      <a href="/buy" className="tab">Buy</a>
      <a href="/lend" className="tab">Lend</a>
      <a href="/borrow" className="tab">Borrow</a>
      <a href="/sell" className="tab">Sell</a>
    </div>
  );
}

export default TabsSection;
