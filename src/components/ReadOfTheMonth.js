import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ReadOfTheMonth.css';

function ReadOfTheMonth() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', rate: '$20', image: 'https://via.placeholder.com/200x300' },
    { id: 2, title: 'Book 2', author: 'Author 2', rate: '$25', image: 'https://via.placeholder.com/200x300' },
    { id: 3, title: 'Book 3', author: 'Author 3', rate: '$30', image: 'https://via.placeholder.com/200x300' },
    { id: 4, title: 'Book 4', author: 'Author 4', rate: '$35', image: 'https://via.placeholder.com/200x300' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? books.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === books.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="read-of-the-month">
      <div className="read-of-the-month-content">
        <h2>Read of the Month!</h2>
        <div className="arrow" onClick={handlePrev}>
          <FaChevronLeft />
        </div>
        <div className="book-container">
          {books.slice(currentIndex, currentIndex + 3).map(book => (
            <div key={book.id} className="book">
              <img src={book.image} alt={book.title} />
              <div className="book-info">
                <p className="book-title">{book.title}</p>
                <p className="book-author">{book.author}</p>
                <p className="book-rate">{book.rate}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="arrow" onClick={handleNext}>
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
}

export default ReadOfTheMonth;
