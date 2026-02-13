import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Buy.css'; // Reuse the existing styles
import { FaStar } from 'react-icons/fa';

function Lend() {
  const navigate = useNavigate(); // Add useNavigate hook

  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', price: 20, image: 'https://via.placeholder.com/150x200', rating: 4, type: 'Paperback' },
    { id: 2, title: 'Book 2', author: 'Author 2', price: 25, image: 'https://via.placeholder.com/150x200', rating: 5, type: 'Hardcover' },
    // Add more books as needed
  ];

  const handleBookClick = (bookId) => {
    navigate(`/upload/${bookId}`); // Navigate to the lend details page
  };

  return (
    <div className="buy-page">
      <div className="content">
        <div className="side-section">
          <div className="categories">
            <h2>Categories</h2>
            <ul>
              <li>Fiction</li>
              <li>Non-Fiction</li>
              <li>Bestsellers</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="filters">
            <h2>Condition</h2>
            <div className="filter-options">
              <label><input type="checkbox" /> New</label>
              <label><input type="checkbox" /> Used</label>
            </div>
          </div>
        </div>
        <div className="book-section">
          <h1>Lend Books</h1>
          <div className="books-container">
            {books.map(book => (
              <div key={book.id} className="book-item" onClick={() => handleBookClick(book.id)}>
                <img src={book.image} alt={book.title} />
                <div className="book-info">
                  <p className="book-title">{book.title}</p>
                  <p className="book-author">{book.author}</p>
                  <div className="book-rating">
                    {Array.from({ length: 5 }, (_, index) => (
                      <FaStar key={index} color={index < book.rating ? '#ffc107' : '#e4e5e9'} />
                    ))}
                  </div>
                  <p className="book-type">{book.type}</p>
                  <p className="book-price">${book.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lend;
