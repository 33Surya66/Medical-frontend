import { BiTwitter, BiFacebook, BiLinkedin } from 'react-icons/bi';

function Footer() {
  return (
    <footer className="bg-kitty-pink text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block hover:text-kitty-lightpink">Home</a>
              <a href="#" className="block hover:text-kitty-lightpink">About</a>
              <a href="#" className="block hover:text-kitty-lightpink">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p>Email: info@healthfactfinder.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-kitty-lightpink text-xl">
                <BiTwitter />
              </a>
              <a href="#" className="hover:text-kitty-lightpink text-xl">
                <BiFacebook />
              </a>
              <a href="#" className="hover:text-kitty-lightpink text-xl">
                <BiLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-pink-300 text-center">
          <p>© 2025 Health Fact Finder</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;