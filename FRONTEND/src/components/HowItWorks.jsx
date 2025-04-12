function HowItWorks() {
    return (
      <section className="py-16 bg-white text-kitty-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kitty-pink mb-4">How It Works</h2>
            <p className="max-w-3xl mx-auto text-gray-700">
              Our AI-powered system uses a multi-step approach to verify medical information and identify potential misinformation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover bg-kitty-lightpink p-6 rounded-lg shadow-lg text-center">
              <div className="inline-block rounded-full bg-white p-4 text-kitty-red text-3xl mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Input Medical Claim</h3>
              <p className="text-gray-700">Enter the medical information or claim you want to verify</p>
            </div>
            <div className="card-hover bg-kitty-lightpink p-6 rounded-lg shadow-lg text-center">
              <div className="inline-block rounded-full bg-white p-4 text-kitty-red text-3xl mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-700">Our AI checks the claim against peer-reviewed medical databases</p>
            </div>
            <div className="card-hover bg-kitty-lightpink p-6 rounded-lg shadow-lg text-center">
              <div className="inline-block rounded-full bg-white p-4 text-kitty-red text-3xl mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Results</h3>
              <p className="text-gray-700">Receive a detailed report with verification status and factual information</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default HowItWorks;