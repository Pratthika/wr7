import React from 'react';
import './CustomerReview.css';

function CustomerReview() {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Amazing bookstore! Found all the books I was looking for.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Great collection and quick delivery. Highly recommend!',
      rating: 4,
    },
    {
      id: 3,
      name: 'Sam Wilson',
      review: 'Loved the customer service. Very helpful and friendly.',
      rating: 5,
    },
  ];

  return (
    <div className="customer-review-section">
      <h2>Customer Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <p className="review-name">{review.name}</p>
            <p className="review-text">"{review.review}"</p>
            <p className="review-rating">Rating: {review.rating} / 5</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReview;
