import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({college}) => {
  
  const {
    collegeName: name,
    admissionDate,
    eventsDetails,
    researchWorks,
    sportsCategories,
    image,
  } = college;
console.log(college);

  return (
    <div>
        <div key={college._id} className="rounded-lg overflow-hidden shadow-lg bg-white my-4">
          <img src={image} alt={name} className="w-full h-44 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="mb-2"><strong>Admission Dates:</strong> {admissionDate}</p>
            <p className="mb-2"><strong>Events:</strong> {eventsDetails}</p>
            <p className="mb-2"><strong>Research History:</strong> {researchWorks}</p>
            <p className="mb-2"><strong>Sports:</strong> {sportsCategories}</p>
          </div>
          <div className="bg-blue-500 text-white text-center py-2">
            <Link
              to={`/colleges/${college.collegeName.replace(/\s+/g, '-').toLowerCase()}`}
              className="rounded-full px-6 py-2 bg-white text-blue-500 font-semibold shadow-md hover:bg-blue-600 hover:text-white transition"
            >
              Details
            </Link>
          </div>
        </div>
      
    </div>
  );
};

export default CollegeCard;
