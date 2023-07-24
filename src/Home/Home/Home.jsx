import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import HomeCard from '../HomeCard/HomeCard';
import GraduateGallery from '../../Pages/Gallery/GraduateGallery';
import ResearchPapers from '../ReserachPapers/ResearchPapers';
import Review from '../../Pages/Review/Review';

const Home = () => {
    return (
        <div>
            <SearchBar></SearchBar>
            <HomeCard></HomeCard>
            <GraduateGallery></GraduateGallery>
            <ResearchPapers></ResearchPapers>
            <Review></Review>
            
        </div>
    );
};

export default Home;