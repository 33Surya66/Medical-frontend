import { useState } from 'react';
import { BiHeart, BiList, BiMoon, BiSun } from 'react-icons/bi';

function Nav({ setIsSignInOpen, toggleTheme, isDark }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-kitty-pink shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BiHeart className="text-kitty-red text-2xl mr-2" />
            <span className="text-xl font-bold text-white kitty-bow">Health Fact Finder</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-kitty-lightpink">Home</a>
            <a href="#" className="text-white hover:text-kitty-lightpink">Analyze</a>
            <a href="#" className="text-white hover:text-kitty-lightpink">About</a>
            <a href="#" className="text-white hover:text-kitty-lightpink">Contact</a>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-kitty-lightpink">
              {isDark ? <BiSun className="text-white" /> : <BiMoon className="text-white" />}
            </button>
            <button
              className="bg-kitty-red text-white px-4 py-2 rounded-md hover:bg-red-700"
              onClick={() => setIsSignInOpen(true)}
            >
              Sign In
            </button>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <BiList className="text-2xl" />
          </button>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-kitty-lightpink shadow-md z-50`}>
        <div className="px-4 py-2 space-y-3">
          <a href="#" className="block text-kitty-black hover:text-kitty-pink">Home</a>
          <a href="#" className="block text-kitty-black hover:text-kitty-pink">Analyze</a>
          <a href="#" className="block text-kitty-black hover:text-kitty-pink">About</a>
          <a href="#" className="block text-kitty-black hover:text-kitty-pink">Contact</a>
          <button
            className="w-full bg-kitty-pink text-white px-4 py-2 rounded-md hover:bg-pink-700"
            onClick={() => setIsSignInOpen(true)}
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;