import { useState } from 'react';
import { BiArrowRepeat } from 'react-icons/bi';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully! We will get back to you soon.');
    }, 1500);
  };

  return (
    <section className="py-16 bg-white text-kitty-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-kitty-pink mb-4">Contact Us</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Have questions or suggestions? We'd love to hear from you!
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-kitty-lightpink p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kitty-pink"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kitty-pink"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kitty-pink"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kitty-pink"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-kitty-red text-white px-6 py-2 rounded-md hover:bg-red-700 disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <BiArrowRepeat className="loading-spinner mr-2" />
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;