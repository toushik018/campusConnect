import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
    const { collegeName } = useParams();
    const [reviews, setReviews] = useState([]);

    console.log(collegeName);

    useEffect(() => {
        // Fetch reviews for the specific college from the server
        fetch('https://campus-connect-server-toushik018.vercel.app/reviews')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Assuming the response data is an array of reviews
                setReviews(data);
            })
            .catch((error) => {
                console.error('Error fetching reviews:', error);
            });
    }, [collegeName]);

    console.log(reviews);

    return (
        <div className='mt-16 container mx-auto mb-20'>
            <h2 className="text-2xl font-semibold mb-4 md:col-span-2 text-center"> Students Reviews {collegeName}</h2>
            <div className="max-w-3xl mx-auto mt-8 grid gap-4 grid-cols-1 md:grid-cols-3">
                {reviews.length === 0 ? (
                    <p className="md:col-span-2">No reviews available for {collegeName}</p>
                ) : (
                    reviews.map((review) => (
                        <div key={review._id} className="border border-gray-300 bg-gray-200 hover:bg-white duration-500 rounded-lg p-4">
                             <p className="text-gray-600">College Name: {review[0]?.collegeName}</p>
                            <p className="text-lg font-semibold mb-2">Rating: {review.rating}</p>
                            <p className="text-gray-600">{review.review}</p>
                            {/* Add other review fields here */}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Review;
