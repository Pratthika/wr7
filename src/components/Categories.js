// src/components/Categories.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleOptionClick = (option) => {
    if (selectedCategory === 'Formats') {
      navigate(`/formats/${option}`); // Navigate to FormatPage with format option
    } else if (selectedCategory === 'Genres') {
      navigate(`/genres/${option}`); // Navigate to GenrePage with genre option
    }
  };

  const formatOptions = [
    'Hardcover',
    'Paperback',
    'Mass market paperback',
    'Audiobook',
    'Large print',
    'Box set',
    'Comic',
    'Braille Books',
  ];

  const genreOptions = [
    'Fiction',
    'Non-Fiction',
    'Children’s',
    'Reference',
    'Academic Textbooks',
    'Speciality',
  ];

  return (
    <div className="categories-box">
      <h3>Categories</h3>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        <option value="Formats">Formats</option>
        <option value="Genres">Genres</option>
      </select>

      <ul className="options-list">
        {selectedCategory === 'Formats' &&
          formatOptions.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}

        {selectedCategory === 'Genres' &&
          genreOptions.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
