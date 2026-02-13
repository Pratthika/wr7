import React from 'react';
import { Link } from 'react-router-dom';
import './ForumSection.css';

function ForumSection() {
  return (
    <div className="forum-section">
      <h2>Forum: Fictopia</h2>
      <p>Join our community and discuss your favorite books, authors, and more!</p>
      <Link to="/forum" className="forum-link">Go to Forum</Link>
    </div>
  );
}

export default ForumSection;
