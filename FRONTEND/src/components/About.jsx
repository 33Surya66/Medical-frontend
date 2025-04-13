import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <img 
              src="/api/placeholder/600/450" 
              alt="Medical professionals reviewing health information" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About HealthFact Finder
            </h2>
            
            <p className="text-gray-600 mb-4">
              HealthFact Finder was created by a team of healthcare professionals, medical researchers, and technology experts with a shared mission: to combat health misinformation and provide everyone with access to reliable, evidence-based health information.
            </p>
            
            <p className="text-gray-600 mb-4">
              In today's digital world, finding accurate health information can be challenging. Our platform bridges this gap by curating and verifying health facts from reputable sources, including medical journals, health organizations, and research institutions.
            </p>
            
            <p className="text-gray-600 mb-6">
              Every piece of information in our database undergoes a rigorous verification process by our team of medical experts to ensure accuracy and reliability. We're committed to helping you make informed decisions about your health.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2 text-gray-700">Medical Professional Review</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2 text-gray-700">Evidence-Based Content</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2 text-gray-700">Regular Updates</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2 text-gray-700">Plain Language Explanations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
