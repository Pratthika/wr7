import React, { useState } from 'react';
import './Ask.css';

function Ask() {
  const [question, setQuestion] = useState('');
  const [media, setMedia] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    alert('Question submitted!');
  };

  return (
    <div className="ask">
      <h1>Ask a Question</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
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

export default Ask;
