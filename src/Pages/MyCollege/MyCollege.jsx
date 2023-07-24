import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const MyCollege = () => {
    const { user } = useAuth();
    const userEmail = user?.email;

    const [reviews, setReviews] = useState([]);
    const [candidates, setCandidates] = useState([]);

    console.log(candidates);

    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        fetch('https://campus-connect-server-toushik018.vercel.app/candidates')
            .then((response) => response.json())
            .then((data) => {
                // Filter candidates based on the user's email
                const userCandidates = data.filter(candidate => candidate.candidateEmail === userEmail);
                setCandidates(userCandidates);
            })
            .catch((error) => {
                console.error('Error fetching candidates:', error);
            });
    }, [userEmail]);

    const handleReviewSubmit = (data) => {
        const reviewData = {
            rating: parseInt(data.rating),
            review: data.review,
            collegeName: candidates.map(candidate => candidate.collegeName),
        };

        // Send the review data to the server
        fetch(`https://campus-connect-server-toushik018.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
            .then((res) => res.json())
            .then((data) => {
                // Assuming the server returns the updated list of reviews
                setReviews(data.reviews);

                // Show success message to the user
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your review was submitted successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                console.log('Error submitting review:', error);
            });
    };

    return (
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-4/5 mx-auto">
            {candidates.map((candidate) => (
                <div key={candidate._id} className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold mb-2"> College: <span className='text-blue-400'>{candidate.collegeName}</span></h2>
                    <h2 className="text-xl font-semibold mb-2">{candidate.candidateName}</h2>
                    <p className="text-sm mb-2">Subject: {candidate.subject}</p>
                    <p className="text-sm mb-2">Email: {candidate.candidateEmail}</p>
                    <p className="text-sm mb-2">Phone: {candidate.candidatePhone}</p>
                    <p className="text-sm mb-2">Address: {candidate.address}</p>
                    <p className="text-sm mb-2">Date of Birth: {candidate.dateOfBirth}</p>

                </div>
            ))}

            {/* Review form */}



            <div className="w-full mx-auto mt-8 bg-white rounded-lg">
                <h3 className="text-xl font-semibold mt-4 mb-2">Add a Review</h3>
                <form onSubmit={handleSubmit(handleReviewSubmit)}>

                    <div className="mb-4">
                        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                            Rating
                        </label>
                        <input
                            id="rating"
                            {...register('rating', { required: true })}
                            type="number"
                            autoComplete="off"
                            required
                            className="appearance-none block w-full px-2 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.rating && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                            Review
                        </label>
                        <textarea
                            id="review"
                            {...register('review', { required: true })}
                            type="text"
                            autoComplete="off"
                            required
                            className="appearance-none block w-full h-20 px-2 py-2 border border-gray-300 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.review && <span className="text-red-500">This field is required</span>}
                    </div>
                    {/* Add other review input fields as needed */}
                    <div className="text-center mt-2">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default MyCollege;
