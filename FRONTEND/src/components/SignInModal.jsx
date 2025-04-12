import { useState } from 'react';
import { BiX } from 'react-icons/bi';

function SignInModal({ isOpen, setIsOpen, openSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in:', { email, password });
    setIsOpen(false);
    alert('Successfully signed in!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-kitty-pink">Sign In</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800">
            <BiX className="text-xl" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-kitty-pink"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-kitty-pink"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-kitty-pink hover:text-pink-700">Forgot Password?</a>
            <button type="submit" className="bg-kitty-red text-white px-6 py-2 rounded-md hover:bg-red-700">
              Sign In
            </button>
          </div>
          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <button onClick={openSignUp} className="text-kitty-pink hover:text-pink-700">
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignInModal;