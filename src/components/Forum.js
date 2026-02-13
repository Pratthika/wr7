import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Forum.css';

function Forum() {
  const navigate = useNavigate();

  const goToAskQuestion = () => {
    navigate('/ask');
  };

  const goToPost = () => {
    navigate('/post');
  };

  return (
    <div className="forum">
      <h1>Fictopia</h1>
      <div className="options-container">
        <h3>What do you want to share or ask?</h3>
        <button className="forum-button" onClick={goToAskQuestion}>Ask a Question</button>
        <button className="forum-button" onClick={goToPost}>Create a Post</button>
      </div>
      <div className="posts">
        <h2>Recent Posts</h2>
        <div className="post">
          <h3>Post Title</h3>
          <p>Post content preview...</p>
        </div>
        {/* Add more posts as needed */}
      </div>
    </div>
  );
}

export default Forum;
