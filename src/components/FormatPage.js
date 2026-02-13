// src/pages/FormatPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Use useParams instead of useLocation
import './Buy.css'; // Reuse Buy.css
import { FaStar } from 'react-icons/fa';
import ReactSlider from 'react-slider';

function FormatPage() {
  const { option } = useParams(); // Retrieve the option (format) from URL params
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(7000);

  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', price: 20, image: 'https://via.placeholder.com/150x200', rating: 4, type: 'Paperback' },
    { id: 2, title: 'Book 2', author: 'Author 2', price: 25, image: 'https://via.placeholder.com/150x200', rating: 5, type: 'Hardcover' },
    { id: 3, title: 'Book 3', author: 'Author 3', price: 30, image: 'https://via.placeholder.com/150x200', rating: 3, type: 'Paperback' },
    { id: 4, title: 'Book 4', author: 'Author 4', price: 35, image: 'https://via.placeholder.com/150x200', rating: 4, type: 'Hardcover' },
    { id: 5, title: 'Book 5', author: 'Author 5', price: 20, image: 'https://via.placeholder.com/150x200', rating: 4, type: 'Paperback' },
    { id: 6, title: 'Book 6', author: 'Author 6', price: 25, image: 'https://via.placeholder.com/150x200', rating: 5, type: 'Hardcover' },
    { id: 7, title: 'Book 7', author: 'Author 7', price: 30, image: 'https://via.placeholder.com/150x200', rating: 3, type: 'Paperback' },
    { id: 8, title: 'Book 8', author: 'Author 8', price: 35, image: 'https://via.placeholder.com/150x200', rating: 4, type: 'Hardcover' },
    // Add more books as needed
  ];

  const filteredBooks = books.filter(book => book.price >= minPrice && book.price <= maxPrice); // Filter by price

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
              {/* Add more categories as needed */}
            </ul>
          </div>
          <div className="filters">
            <h2>Condition</h2>
            <div className="filter-options">
              <label><input type="checkbox" /> New</label>
              <label><input type="checkbox" /> Used</label>
            </div>
            <h2>Price Filter</h2>
            <div className="price-filter">
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="thumb"
                trackClassName="track"
                defaultValue={[0, 7000]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                min={0}
                max={7000}
                step={50}
                onChange={([min, max]) => {
                    setMinPrice(min);
                    setMaxPrice(max);
                }}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
              />
            </div>
          </div>
        </div>
        <div className="book-section">
        <h1>{option ? option : 'Loading'} Books</h1> {/* Display the option (category) in the title */}
          <div className="books-container">
            {filteredBooks.map(book => (
              <div key={book.id} className="book-item">
                <img src={book.image} alt={book.title} />
                <div className="book-info">
                  <p className="book-title">{book.title}</p>
                  <p className="book-author">{book.author}</p>
                  <div className="book-rating">
                    {Array.from({ length: 5 }, (_, index) => (
                      <FaStar key={index} color={index < book.rating ? '#ffc107' : '#e4e5e9'} />
                    ))}
                  </div>
                  <p className="book-type">{option}</p>
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

export default FormatPage;
