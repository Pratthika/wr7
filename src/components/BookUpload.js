import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookUpload.css';

function BookUpload() {
    const { bookId } = useParams();
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [pickupAddress, setPickupAddress] = useState('');
    const [landmark, setLandmark] = useState('');
    const [bookName, setBookName] = useState('');
    const [isAccepted, setIsAccepted] = useState(null);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (e.target.name === 'images') {
            setImages(files);
        } else if (e.target.name === 'videos') {
            setVideos(files);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate admin review
        const randomAcceptance = Math.random() > 0.5; // Random acceptance for demo
        setIsAccepted(randomAcceptance);
    };

    return (
        <div className="book-upload-container">
            <h1>Upload Book Details</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="pickup-address">Pickup Address:</label>
                    <input
                        type="text"
                        id="pickup-address"
                        value={pickupAddress}
                        onChange={(e) => setPickupAddress(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="landmark">Landmark:</label>
                    <input
                        type="text"
                        id="landmark"
                        value={landmark}
                        onChange={(e) => setLandmark(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="book-name">Book Name:</label>
                    <input
                        type="text"
                        id="book-name"
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="book-images">Upload Photos:</label>
                    <input
                        type="file"
                        id="book-images"
                        name="images"
                        multiple
                        onChange={handleFileChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="book-videos">Upload Video:</label>
                    <input
                        type="file"
                        id="book-videos"
                        name="videos"
                        accept="video/*"
                        onChange={handleFileChange}
                        required
                    />
                </div>

                <button type="submit">Submit for Review</button>
            </form>

            {isAccepted !== null && (
                <div className="review-status">
                    {isAccepted ? (
                        <div className="status accepted">
                            <span role="img" aria-label="tick">✔️</span> Accepted
                            <button onClick={() => alert('Proceed to Lend')}>Proceed to Lend</button>
                        </div>
                    ) : (
                        <div className="status rejected">
                            <span role="img" aria-label="cross">❌</span> Not Accepted
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default BookUpload;