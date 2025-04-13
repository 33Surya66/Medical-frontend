import React from 'react';

function Stats() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl shadow-xl overflow-hidden">
          <div className="py-12 px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              HealthFact Finder by the Numbers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
                <div className="text-lg text-blue-100">Health Topics</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
                <div className="text-lg text-blue-100">Medical Experts</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">2M+</div>
                <div className="text-lg text-blue-100">Monthly Users</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-lg text-blue-100">Accuracy Rate</div>
              </div>
            </div>
            
            <div className="mt-10 text-white text-lg max-w-2xl mx-auto">
              Join millions of people who trust HealthFact Finder for reliable health information every day.
            </div>
            
            <div className="mt-6">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                Sign Up for Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
