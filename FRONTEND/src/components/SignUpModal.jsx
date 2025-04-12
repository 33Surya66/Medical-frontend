import { useState } from 'react';
import { BiX } from 'react-icons/bi';

function SignUpModal({ isOpen, setIsOpen, openSignIn }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Sign up:', formData);
    setIsOpen(false);
    alert('Account created successfully!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-kitty-pink">Sign Up</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800">
            <BiX className="text-xl" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-kitty-pink"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-kitty-pink"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-kitty-pink"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-kitty-pink"
              required
            />
          </div>
          <button type="submit" className="w-full bg-kitty-red text-white py-2 rounded-md hover:bg-red-700">
            Sign Up
          </button>
          <p className="text-center text-gray-600">
            Already have an account?{' '}
            <button onClick={openSignIn} className="text-kitty-pink hover:text-pink-700">
              Sign In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;