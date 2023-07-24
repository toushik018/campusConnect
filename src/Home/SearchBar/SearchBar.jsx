import React, { useEffect, useState } from 'react';
import CollegeCard from '../CollegeCard/CollegeCard';
import AdmissionSubmit from '../../Pages/AdmissionSubmit/AdmissionSubmit';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [collegeData, setCollegeData] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);

  useEffect(() => {
    
    fetch('https://campus-connect-server-toushik018.vercel.app/colleges') 
      .then((response) => response.json())
      .then((data) => setCollegeData(data))
      .catch((error) => {
        console.error('Error fetching colleges:', error);
      });
  }, []);

  const handleSearch = () => {
    // Convert the searchQuery to lowercase for case-insensitive search
    const formattedQuery = searchQuery.toLowerCase();

    // Filter the colleges whose names match the search query
    const filteredColleges = collegeData.filter((college) =>
      college.collegeName.toLowerCase().includes(formattedQuery)
    );

    // Update the filtered colleges state
    setFilteredColleges(filteredColleges);
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center py-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-64"
          placeholder="Search for a college name..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 ml-2 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Render the filtered colleges */}
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college, index) => (
            <CollegeCard key={index} college={college} />
          ))
        ) : (
          <p className="text-center text-gray-500">Search for the college you looking for</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
