import React, { useState, useEffect } from 'react';
import bg from '../../../src/assets/bg.jpg'

const HomeCard = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch('https://campus-connect-server-toushik018.vercel.app/colleges')
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of colleges
        // Slice the first 3 colleges to display only 3 cards
        setColleges(data.slice(0, 3));
      })
      .catch((error) => {
        console.error('Error fetching colleges:', error);
      });
  }, []);

  console.log(colleges);
  return (
    <div className="pb-8 mt-4 relative" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backdropFilter: 'blur(8px)', backgroundAttachment: 'fixed' }}>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-3/5 mx-auto">
    {colleges.map((college) => (
      <div key={college._id} className="max-w-md w-80 mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
        {/* Display college information here */}
        <div className="relative">
          <img
            src={college.image}
            alt={college.collegeName}
            className="w-full h-40 object-cover mb-4 rounded-lg transition-transform transform hover:scale-105"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">{college.collegeName}</h2>
        <p className="text-gray-600 mb-4"><span className='font-semibold'>Admission Dates:</span> {college?.admissionDate}</p>
        <p className="text-gray-600 mb-4"><span className='font-semibold'>Events:</span> {college.eventsDetails}</p>
        <p className="text-gray-600 mb-4"><span className='font-semibold'>Research History:</span> {college.researchWorks}</p>
        <p className="text-gray-600 mb-4"><span className='font-semibold'>Sports:</span> {college.sportsCategories}</p>
      </div>
    ))}
  </div>
   </div>
  );
};

export default HomeCard;
