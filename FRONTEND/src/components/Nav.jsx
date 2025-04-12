import React, { useState } from 'react';

function Nav({ onSignInClick, onSignUpClick, isLoggedIn, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          <span className="text-xl font-bold">HealthFact Finder</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="hover:text-blue-200 transition">Features</a>
          <a href="#how-it-works" className="hover:text-blue-200 transition">How It Works</a>
          <a href="#about" className="hover:text-blue-200 transition">About</a>
          <a href="#faq" className="hover:text-blue-200 transition">FAQ</a>
          <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
          
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <a href="#dashboard" className="hover:text-blue-200 transition">Dashboard</a>
              <button 
                onClick={onLogout}
                className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <button 
                onClick={onSignInClick}
                className="text-white hover:text-blue-200 transition"
              >
                Sign In
              </button>
              <button 
                onClick={onSignUpClick}
                className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-blue-800">
          <div className="flex flex-col space-y-3">
            <a href="#features" className="hover:text-blue-200 transition">Features</a>
            <a href="#how-it-works" className="hover:text-blue-200 transition">How It Works</a>
            <a href="#about" className="hover:text-blue-200 transition">About</a>
            <a href="#faq" className="hover:text-blue-200 transition">FAQ</a>
            <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
            
            {isLoggedIn ? (
              <>
                <a href="#dashboard" className="hover:text-blue-200 transition">Dashboard</a>
                <button 
                  onClick={onLogout}
                  className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={onSignInClick}
                  className="text-white hover:text-blue-200 transition text-left"
                >
                  Sign In
                </button>
                <button 
                  onClick={onSignUpClick}
                  className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition text-left"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
