import { useState } from 'react';
import { BiUpload } from 'react-icons/bi';

function Upload() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && (selectedFile.type.includes('text') || selectedFile.type.includes('image'))) {
      setFile(selectedFile);
      setResult(null);
    } else {
      alert('Please upload a valid text or image file.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setResult({
        status: 'Potentially Misleading',
        message: 'The uploaded content lacks scientific backing. Please verify with credible sources.',
      });
    }, 1500);
  };

  return (
    <section className="py-16 bg-browncoffee text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-kitty-pink mb-4">Upload Medical Content</h2>
          <p className="max-w-3xl mx-auto">
            Upload a text file or image containing medical claims to analyze its accuracy with our AI.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-kitty-lightpink p-8 rounded-lg shadow-lg text-kitty-black">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">Select file to analyze:</label>
              <input
                type="file"
                accept="text/plain,image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-pink-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              disabled={!file || isLoading}
              className="bg-kitty-red text-white px-6 py-2 rounded-md hover:bg-red-700 w-full disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <BiArrowRepeat className="loading-spinner mr-2" />
                  Analyzing...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <BiUpload className="mr-2" />
                  Upload & Analyze
                </span>
              )}
            </button>
          </form>
          {file && !result && (
            <div className="mt-4">
              <p className="text-gray-700">Selected file: {file.name}</p>
            </div>
          )}
          {result && (
            <div className="mt-6">
              <div className="bg-white p-4 rounded-md border border-pink-300">
                <h3 className="text-kitty-pink font-medium mb-2">Analysis Result:</h3>
                <div className="flex items-center text-red-600 mb-2">
                  <span className="font-medium">{result.status}</span>
                </div>
                <p className="text-gray-700">{result.message}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Upload;