import React, { useState } from 'react';

function FAQ() {
  const faqs = [
    {
      question: "Is the information on HealthFact Finder reviewed by medical professionals?",
      answer: "Yes, all health information on our platform is thoroughly reviewed by our team of medical professionals, including doctors, nurses, and specialists in various fields. We follow a rigorous verification process to ensure the accuracy and reliability of our content."
    },
    {
      question: "How often is the health information updated?",
      answer: "We continuously update our database as new research and guidelines become available. Most articles are reviewed at least every 6-12 months, while topics with rapidly evolving research (like COVID-19) are updated more frequently."
    },
    {
      question: "Can HealthFact Finder replace medical advice from my doctor?",
      answer: "No, the information provided on HealthFact Finder is for educational purposes only and should not replace professional medical advice. Always consult with your healthcare provider for personalized recommendations based on your specific health situation."
    },
    {
      question: "How do I know if a health article I found online is reliable?",
      answer: "You can use our 'Analyze' tool to check the reliability of health information you've found. Simply paste the text, and our system will evaluate it against our verified database. For general guidance, look for articles from reputable sources that cite recent research and are written or reviewed by medical professionals."
    },
    {
      question: "Is my search history private?",
      answer: "Yes, we take privacy seriously. Your search queries and browsing history on HealthFact Finder are private and not shared with third parties. For registered users, we securely store saved articles and preferences in accordance with our privacy policy."
    },
    {
      question: "How can I contribute to HealthFact Finder?",
      answer: "If you're a healthcare professional or medical researcher interested in contributing to our platform, please contact us through the 'Contact' page. We welcome expert reviewers to help us maintain and expand our database of verified health information."
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-16 px-4 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Find answers to common questions about HealthFact Finder and our approach to providing reliable health information.
        </p>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-4 rounded-lg flex justify-between items-center transition duration-300 ${
                  activeIndex === index 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-gray-800 shadow hover:bg-blue-100'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-6 w-6 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeIndex === index && (
                <div className="bg-white p-4 rounded-b-lg shadow-md -mt-1 border-t-2 border-blue-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center"
          >
            Contact our team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQ;