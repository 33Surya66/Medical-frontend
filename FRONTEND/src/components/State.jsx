function Stats() {
    return (
      <section className="py-16 bg-browncoffee text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kitty-pink mb-4">Medical Misinformation Impact</h2>
            <p className="max-w-3xl mx-auto">
              Understanding the scale and consequences of medical misinformation in today's digital world.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md text-kitty-black">
              <span className="text-4xl font-bold text-kitty-pink block mb-2">67%</span>
              <p className="text-gray-700">of adults have encountered misleading health information online</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-kitty-black">
              <span className="text-4xl font-bold text-kitty-pink block mb-2">28%</span>
              <p className="text-gray-700">have shared health information without verifying it first</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-kitty-black">
              <span className="text-4xl font-bold text-kitty-pink block mb-2">89%</span>
              <p className="text-gray-700">believe AI can help combat medical misinformation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-kitty-black">
              <span className="text-4xl font-bold text-kitty-pink block mb-2">3.8B</span>
              <p className="text-gray-700">people potentially exposed to health misinformation on social media</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Stats;