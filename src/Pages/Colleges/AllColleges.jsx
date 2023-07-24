import React, { useEffect, useState } from 'react';

const AllColleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    // Fetch colleges data from the API endpoint
    fetch('https://campus-connect-server-toushik018.vercel.app/colleges')
      .then((response) => response.json())
      .then((data) => setColleges(data))
      .catch((error) => {
        console.error('Error fetching colleges:', error);
      });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-6">All Colleges</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <div key={college._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={college.image} alt={college.collegeName} className="w-full h-44 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">{college.collegeName}</h2>
              <p className="mb-2"><strong>Admission Date:</strong> {college.admissionDate}</p>
              <p className="mb-2"><strong>Number of Research Works:</strong> {college.NumResearchWorks}</p>
              <p className="mb-2"><strong>Sports Categories:</strong> {college.sportsCategories}</p>
              <div className="flex items-center justify-between mt-6">
                <a
                  href={`/colleges/${college.collegeName.replace(/\s+/g, '-').toLowerCase()}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllColleges;
