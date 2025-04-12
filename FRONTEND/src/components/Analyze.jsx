import { useState } from 'react';
import { BiExclamationTriangleFill, BiArrowRepeat } from 'react-icons/bi';

function Analyze() {
  const [claim, setClaim] = useState('');
  const [isSourceChecked, setIsSourceChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <section className="py-16 bg-white text-kitty-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-kitty-pink mb-4">Analyze Medical Information</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Enter any medical claim or information to analyze its accuracy using our AI technology.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-kitty-lightpink p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">Enter medical information to analyze:</label>
              <textarea
                rows="4"
                value={claim}
                onChange={(e) => setClaim(e.target.value)}
                className="w-full px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kitty-pink"
                placeholder="Example: Drinking lemon water cures cancer"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="source"
                  checked={isSourceChecked}
                  onChange={() => setIsSourceChecked(!isSourceChecked)}
                  className="mr-2 h-4 w-4 text-kitty-pink focus:ring-kitty-pink"
                />
                <label htmlFor="source">Include source analysis</label>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-kitty-red text-white px-6 py-2 rounded-md hover:bg-red-700 w-full sm:w-auto disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <BiArrowRepeat className="loading-spinner mr-2" />
                    Analyzing...
                  </span>
                ) : (
                  'Analyze Claim'
                )}
              </button>
            </div>
          </form>
          {showResult && (
            <div className="mt-6">
              <div className="bg-white p-4 rounded-md border border-pink-300">
                <h3 className="text-kitty-pink font-medium mb-2">Analysis Result:</h3>
                <div className="flex items-center text-red-600 mb-2">
                  <BiExclamationTriangleFill className="mr-2" />
                  <span className="font-medium">Potentially Misleading</span>
                </div>
                <p className="text-gray-700 mb-4">
                  This claim lacks scientific evidence. While lemon water has some health benefits, there is no credible research supporting its ability to cure cancer.
                </p>
                <div className="border-t border-pink-200 pt-4">
                  <h4 className="font-medium mb-2">Verified Information:</h4>
                  <p className="text-gray-700">
                    Lemon water offers hydration and vitamin C but is not a cancer treatment. For cancer treatment options, consult with healthcare professionals and refer to evidence-based medical resources.
                  </p>
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