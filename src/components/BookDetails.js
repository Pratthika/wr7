import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './BookDetails.css';

function BookDetails() {
  const initialBooks = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      price: 20,
      image: 'https://via.placeholder.com/150x200',
      rating: 4,
      type: 'Paperback',
      reviews: [
        { username: 'User1', rating: 4, comment: 'Great book!' },
        { username: 'User2', rating: 5, comment: 'Loved it!' },
      ],
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: 25,
      image: 'https://via.placeholder.com/150x200',
      rating: 5,
      type: 'Hardcover',
      reviews: [
        { username: 'User3', rating: 5, comment: 'Amazing story!' },
        { username: 'User4', rating: 4, comment: 'Very interesting.' },
      ],
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
      price: 30,
      image: 'https://via.placeholder.com/150x200',
      rating: 3,
      type: 'Paperback',
      reviews: [
        { username: 'User5', rating: 3, comment: 'Good read.' },
        { username: 'User6', rating: 2, comment: 'Not bad.' },
      ],
    },
    {
      id: 4,
      title: 'Book 4',
      author: 'Author 4',
      price: 35,
      image: 'https://via.placeholder.com/150x200',
      rating: 4,
      type: 'Hardcover',
      reviews: [
        { username: 'User7', rating: 4, comment: 'Enjoyed it a lot!' },
        { username: 'User8', rating: 5, comment: 'Fantastic!' },
      ],
    },
    {
      id: 5,
      title: 'Book 5',
      author: 'Author 5',
      price: 20,
      image: 'https://via.placeholder.com/150x200',
      rating: 4,
      type: 'Paperback',
      reviews: [
        { username: 'User9', rating: 4, comment: 'Quite good.' },
        { username: 'User10', rating: 3, comment: 'Worth a read.' },
      ],
    },
    {
      id: 6,
      title: 'Book 6',
      author: 'Author 6',
      price: 25,
      image: 'https://via.placeholder.com/150x200',
      rating: 5,
      type: 'Hardcover',
      reviews: [
        { username: 'User11', rating: 5, comment: 'Exceptional!' },
        { username: 'User12', rating: 4, comment: 'Very engaging.' },
      ],
    },
    {
      id: 7,
      title: 'Book 7',
      author: 'Author 7',
      price: 30,
      image: 'https://via.placeholder.com/150x200',
      rating: 3,
      type: 'Paperback',
      reviews: [
        { username: 'User13', rating: 3, comment: 'Average read.' },
        { username: 'User14', rating: 2, comment: 'Could be better.' },
      ],
    },
    {
      id: 8,
      title: 'Book 8',
      author: 'Author 8',
      price: 35,
      image: 'https://via.placeholder.com/150x200',
      rating: 4,
      type: 'Hardcover',
      reviews: [
        { username: 'User15', rating: 4, comment: 'Really good!' },
        { username: 'User16', rating: 5, comment: 'Highly recommend!' },
      ],
    },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(initialBooks[0].price);
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));
  const navigate = useNavigate();
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      username: 'CurrentUser', // Replace with the actual username from your authentication system
      rating,
      comment: reviewText,
    };

    const updatedBooks = books.map(b => {
      if (b.id === book.id) {
        return {
          ...b,
          reviews: [...b.reviews, newReview],
        };
      }
      return b;
    });

    setBooks(updatedBooks);
    setReviewText('');
    setRating(0);
  };

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingBookIndex = cart.findIndex(b => b.id === book.id);

    if (existingBookIndex === -1) {
      cart.push({ ...book, quantity: selectedQuantity }); // Use selectedQuantity
    } else {
      cart[existingBookIndex].quantity += selectedQuantity; // Increment quantity if book already in cart
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  };
  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === 'custom') {
      setSelectedQuantity('custom');
    } else {
      setSelectedQuantity(parseInt(value));
      setTotalPrice(parseInt(value) * book.price);
    }
  };
  const handleCustomQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setSelectedQuantity(value);
    setTotalPrice(value * book.price);
  };


  if (!book) {
    return <div>Book not found</div>;
  }

  const similarBooks = books.filter(b => b.type === book.type && b.id !== book.id);

  return (
    <div className="book-details">
      <div className="upper-section">
        <div className="left-section">
          <img src={book.image} alt={book.title} />
        </div>
        <div className="middle-section">
          <h1>{book.title}</h1>
          <p className="author">{book.author}</p>
          <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar key={index} color={index < book.rating ? '#ffc107' : '#e4e5e9'} />
            ))}
          </div>
          <p className="description">This is a short description of the book's story.</p>
        </div>
        <div className="right-section">
          <div className="cost-area">
            <p className="price">${totalPrice}</p>
            <p className="delivery-details">Delivery details</p>
            <p className="delivery-address">Delivery address</p>
            <div className="quantity-container">
            <label htmlFor="quantity">Quantity:</label>
            <select
              id="quantity"
              value={selectedQuantity === 'custom' ? 'custom' : selectedQuantity}
              onChange={handleQuantityChange}
              className="quantity-dropdown"
            >
              {[...Array(10).keys()].map(num => (
                <option key={num + 1} value={num + 1}>{num + 1}</option>
              ))}
              <option value="custom">10+</option>
            </select>
            {selectedQuantity === 'custom' && (
              <input
                type="number"
                min="1"
                value={selectedQuantity}
                onChange={handleCustomQuantityChange}
                className="custom-quantity-input"
              />
            )}
        </div>
            <button className="buy-button">Buy Now</button>
            <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="lower-section">
        <div className="write-review">
          <h2>Product Review</h2>
          <div className="rating-input">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                color={index < rating ? '#ffc107' : '#e4e5e9'}
                onClick={() => setRating(index + 1)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
          <form onSubmit={handleReviewSubmit}>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here"
              required
            />
            <button type="submit">Submit Review</button>
          </form>
        </div>
        <div className="reviews-section">
          <h2>Customer Reviews</h2>
          {book.reviews && book.reviews.length > 0 ? (
            book.reviews.map((review, index) => (
              <div key={index} className="review">
                <p><strong>{review.username}</strong></p>
                <div className="rating">
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <FaStar key={starIndex} color={starIndex < review.rating ? '#ffc107' : '#e4e5e9'} />
                  ))}
                </div>
                <p>{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
      <div className="similar-books-section">
        <h2>Similar Books</h2>
        <div className="similar-books-container">
          {similarBooks.map(similarBook => (
            <div key={similarBook.id} className="book-item">
              <img src={similarBook.image} alt={similarBook.title} />
              <div className="book-info">
                <p className="book-title">{similarBook.title}</p>
                <p className="book-author">{similarBook.author}</p>
                <div className="book-rating">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar key={index} color={index < similarBook.rating ? '#ffc107' : '#e4e5e9'} />
                  ))}
                </div>
                <p className="book-type">{similarBook.type}</p>
                <p className="book-price">${similarBook.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookDetails;