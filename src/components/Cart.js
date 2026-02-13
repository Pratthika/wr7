import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleProceedToBuy = () => {
    alert('Proceeding to buy');
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, book) => total + book.price * (book.quantity || 1), 0);
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDelete = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDropdownChange = (index, event) => {
    const updatedCart = [...cart];
    updatedCart[index].source = event.target.value;
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const recommendedBooks = [
    // Sample recommended books
    { id: 1, title: 'Book 1', author: 'Author 1', price: 20, image: 'https://via.placeholder.com/150x200' },
    { id: 2, title: 'Book 2', author: 'Author 2', price: 25, image: 'https://via.placeholder.com/150x200' },
    { id: 3, title: 'Book 3', author: 'Author 3', price: 30, image: 'https://via.placeholder.com/150x200' },
    { id: 4, title: 'Book 4', author: 'Author 4', price: 25, image: 'https://via.placeholder.com/150x200' },
    { id: 5, title: 'Book 5', author: 'Author 5', price: 30, image: 'https://via.placeholder.com/150x200' },
  ];

  return (
    <div className="cart">
      <div className="cart-content">
        <div className="cart-main">
          <h1 style={{ textAlign: 'left' }}>Your Cart</h1>
          {cart.length > 0 ? (
            <>
              <ul className="cart-items">
                {cart.map((book, index) => (
                  <li key={index} className="cart-item">
                    <img src={book.image} alt={book.title} />
                    <div className="cart-item-info">
                      <h2>{book.title}</h2>
                      <p style={{ color: '#9F7651' }}>{book.author}</p>
                      <p style={{ color: 'goldenrod' }}>${book.price}</p>
                      <div className="quantity-controls">
                        <button onClick={() => handleQuantityChange(index, (book.quantity || 1) - 1)}>-</button>
                        <span>{book.quantity || 1}</span>
                        <button onClick={() => handleQuantityChange(index, (book.quantity || 1) + 1)}>+</button>
                        <select 
                          value={book.source || 'Buy'}
                          onChange={(event) => handleDropdownChange(index, event)}
                          className="dropdown"
                        >
                          <option value="Buy">Buy</option>
                          <option value="Borrow">Borrow</option>
                        </select>
                        <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cost-summary">
                <h2>Total: ${calculateTotalPrice().toFixed(2)}</h2>
                <button className="proceed-button" onClick={handleProceedToBuy}>Proceed to Buy</button>
              </div>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="recommended-books">
          <h2>Recommended Books</h2>
          <div className="recommended-books-container">
            {recommendedBooks.map(book => (
              <div key={book.id} className="book-item">
                <img src={book.image} alt={book.title} />
                <div className="book-info">
                  <p className="book-title">{book.title}</p>
                  <p className="book-author">{book.author}</p>
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

export default Cart;
