import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeSection.css';

function WelcomeSection() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/explore'); // This navigates to the Explore page
  };

  return (
    <div className="welcome-section">
      <h1>Welcome to WingReads7</h1>
      <p>The inquisitive platform for inquisitive minds</p>
      <button className="explore-button" onClick={handleExploreClick}>
        Explore
      </button>
    </div>
  );
}

export default WelcomeSection;
