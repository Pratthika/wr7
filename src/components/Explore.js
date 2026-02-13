import React, { useState } from 'react';
import './Explore.css'; // Assuming Explore.css is for your specific styling

function Explore() {
  const [readingGoals] = useState([{ goal: 'Read 10 books this month', progress: '6/10' }]);
  const [communityPicks] = useState([
    { title: 'Book 1', author: 'Author 1', image: 'https://via.placeholder.com/150x200' },
    { title: 'Book 2', author: 'Author 2', image: 'https://via.placeholder.com/150x200' },
    { title: 'Book 3', author: 'Author 3', image: 'https://via.placeholder.com/150x200' },
  ]);
  const [exclusiveContent] = useState([
    { title: 'Exclusive Article 1', description: 'Special interview with an author.', link: '#' },
    { title: 'Exclusive Article 2', description: 'A guide to writing better fiction.', link: '#' },
  ]);

  return (
    <div className="explore-page">
      {/* Reading Goals & Challenges */}
      <section className="reading-goals">
        <h2>Reading Goals & Challenges</h2>
        {readingGoals.map((goal, index) => (
          <div key={index} className="goal-item">
            <p>{goal.goal}</p>
            <p>Progress: {goal.progress}</p>
          </div>
        ))}
      </section>

      {/* Community Picks */}
      <section className="community-picks">
        <h2>Community Picks</h2>
        <div className="picks-grid">
          {communityPicks.map((pick, index) => (
            <div key={index} className="pick-item">
              <img src={pick.image} alt={pick.title} />
              <p className="pick-title">{pick.title}</p>
              <p className="pick-author">{pick.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive Content */}
      <section className="exclusive-content">
        <h2>Exclusive Content</h2>
        <div className="exclusive-list">
          {exclusiveContent.map((content, index) => (
            <div key={index} className="exclusive-item">
              <h3>{content.title}</h3>
              <p>{content.description}</p>
              <a href={content.link} className="exclusive-link">Read more</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Explore;
