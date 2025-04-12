import React, { useState } from 'react';

function Analyze() {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const handleAnalyze = () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      setResults({
        reliability: 73,
        sources: 5,
        concerns: [
          "Contains some unverified claims",
          "Missing recent research context",
          "Limited source diversity"
        ],
        recommendations: [
          "Check primary research sources",
          "Cross-reference with medical guidelines",
          "Consult healthcare professional for personalized advice"
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };
  
  return (
    <section id="analyze" className="py-16 px-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Analyze Health Information
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-10 text-blue-100">
          Paste health information you've found online to check its reliability and accuracy against our verified database.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-6">
            <textarea
              className="w-full h-40 p-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Paste health information or claims here to analyze..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
            
            <div className="mt-4 flex justify-center">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center disabled:opacity-50"
                onClick={handleAnalyze}
                disabled={!inputText.trim() || isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </>
                ) : "Analyze Information"}
              </button>
            </div>
          </div>
          
          {results && (
            <div className="bg-gray-50 p-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Analysis Results</h3>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200 md:w-1/3">
                  <div className="text-center">
                    <h4 className="text-gray-600 font-medium mb-2">Reliability Score</h4>
                    <div className="relative h-40 w-40 mx-auto">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="10"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke={results.reliability > 70 ? "#10b981" : results.reliability > 40 ? "#f59e0b" : "#ef4444"}
                          strokeWidth="10"
                          strokeDasharray={`${results.reliability * 2.83} ${283 - results.reliability * 2.83}`}
                          strokeDashoffset="70"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-gray-800">{results.reliability}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                      <h4 className="text-gray-600 font-medium mb-2">Potential Concerns</h4>
                      <ul className="text-gray-700 space-y-1">
                        {results.concerns.map((concern, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            {concern}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                      <h4 className="text-gray-600 font-medium mb-2">Recommendations</h4>
                      <ul className="text-gray-700 space-y-1">
                        {results.recommendations.map((recommendation, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {recommendation}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow border border-gray-200 md:col-span-2">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-gray-600 font-medium">Sources Found</h4>
                        <span className="text-blue-600 font-semibold">{results.sources} sources</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Sign in to view detailed source information and access our verified alternatives to the analyzed content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Analyze;