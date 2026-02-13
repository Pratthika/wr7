import React, { useState } from 'react';
import './Post.css';

function Post() {
  const [postContent, setPostContent] = useState('');
  const [media, setMedia] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    alert('Post submitted!');
  };

  return (
    <div className="post">
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="Type your post here..."
        ></textarea>
        <input
          type="file"
          onChange={(e) => setMedia(e.target.files[0])}
          accept="image/*,video/*"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Post;
