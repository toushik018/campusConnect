import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CollegeDetails = () => {
  const { collegeName } = useParams();

  const [colleges, setColleges] = useState([]);
  


  useEffect(() => {
    fetch('https://campus-connect-server-toushik018.vercel.app/colleges')
      .then((response) => response.json())
      .then((data) => setColleges(data))
      .catch((error) => {
        console.error('Error fetching colleges:', error);
      });
  }, []);

  const formattedCollegeName = collegeName.replace(/-/g, ' ').toLowerCase();

  const selectedCollege = colleges.find(
    (college) => college.collegeName.toLowerCase() === formattedCollegeName
  );

  if (!selectedCollege) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  const {
    collegeName: name,
    admissionProcess,
    admissionDate,
    eventsDetails,
    researchWorks,
    NumResearchWorks,
    sportsCategories,
    location,
    image,
    about,
    website,
  } = selectedCollege;

  return (
    <div className="container mx-auto py-8">
    <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h1 className="text-3xl font-semibold mb-4">{name}</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Admission Process:</h2>
          <p>{admissionProcess}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Admission Date:</h2>
          <p>{admissionDate}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Events Details:</h2>
          <p>{eventsDetails}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Research Works:</h2>
          <p>{researchWorks}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Number of Research Works:</h2>
          <p>{NumResearchWorks}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Sports Categories:</h2>
          <p>{sportsCategories}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Location:</h2>
          <p>{location}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">About:</h2>
          <p>{about}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Website:</h2>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {website}
          </a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CollegeDetails;
