import React from "react";

const recommendedPapers = [
  {
    title: "Advancements in Artificial Intelligence",
    link: "https://example.com/paper1.pdf",
  },
  {
    title: "Impact of Climate Change on Biodiversity",
    link: "https://example.com/paper2.pdf",
  },
  {
    title: "Impacts of E-Commerce on Traditional Retail Business",
    link: "https://example.com/paper2.pdf",
  },
  {
    title: "Challenges and Opportunities in Cybersecurity",
    link: "https://example.com/paper2.pdf",
  },

];

const ResearchPapers = () => {
  return (
   <div className="border-2">
     <div className="max-w-3xl mx-auto mt-16 mb-16">
      <h2 className="text-3xl font-semibold mb-4">Recommended Research Papers</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {recommendedPapers.map((paper, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Research Paper
            </a>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default ResearchPapers;
