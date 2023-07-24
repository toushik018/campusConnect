import React from "react";
import LightGallery from "lightgallery/react";
import '../Gallery/gallery.css'
// Import styles


import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Import images
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";

// ... add more images as needed

const GraduateGallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="container mx-auto mt-16 mb-16">

      <h2 className="text-3xl font-semibold text-center mb-4 mt-4">Hats Off to Success: A Graduates' Journey</h2>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        mode="lg-fade" // This mode can improve responsiveness
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="lg:max-w-full mx-auto object-cover max-h-full">
            <a href={img1}>
              <img alt="img1" src={img1} className="w-full h-full object-cover" />
            </a>
          </div>
          <div className="lg:max-w-full mx-auto object-cover max-h-full">
            <a href={img2}>
              <img alt="img2" src={img2} className="w-full h-full object-cover" />
            </a>
          </div>
          <div className="lg:max-w-full mx-auto object-cover max-h-full">
            <a href={img3}>
              <img alt="img3" src={img3} className="w-full h-full object-cover" />
            </a>
          </div>
          <div className="lg:max-w-full mx-auto object-cover max-h-full">
            <a href={img4}>
              <img alt="img4" src={img4} className="w-full h-full object-cover" />
            </a>
          </div>
          <div className="lg:max-w-full mx-auto object-cover max-h-full">
            <a href={img5}>
              <img alt="img5" src={img5} className="w-full h-full object-cover" />
            </a>
          </div>
          <div className="lg:max-w-full mx-auto object-cover max-h-full">
            <a href={img6}>
              <img alt="img5" src={img6} className="w-full h-full object-cover" />
            </a>
          </div>
        </div>
      </LightGallery>
    </div>
  );
};

export default GraduateGallery;
