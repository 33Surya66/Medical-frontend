import { BiShieldCheck, BiCpu, BiLaptop } from 'react-icons/bi';

function Features() {
  return (
    <section className="py-16 bg-white text-kitty-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-hover bg-kitty-lightpink p-6 rounded-lg shadow-lg">
            <BiShieldCheck className="text-kitty-red text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Detect Misinformation</h3>
            <p className="text-gray-700">Advanced algorithms to identify potentially misleading medical information</p>
          </div>
          <div className="card-hover bg-kitty-lightpink p-6 rounded-lg shadow-lg">
            <BiCpu className="text-kitty-red text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-700">State-of-the-art machine learning for accurate content verification</p>
          </div>
          <div className="card-hover bg-kitty-lightpink p-6 rounded-lg shadow-lg">
            <BiLaptop className="text-kitty-red text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Simple Interface</h3>
            <p className="text-gray-700">Easy-to-use platform for quick and efficient fact-checking</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;