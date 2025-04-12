import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: 'How accurate is your AI detection?',
      answer:
        'Our AI system has been trained on thousands of verified medical publications and has a current accuracy rate of over 92% in detecting misinformation. We continuously update our algorithms with the latest peer-reviewed research to improve accuracy.',
    },
    {
      id: 2,
      question: 'Is my medical data kept private?',
      answer:
        'Yes, your privacy is our priority. Any medical information you enter is encrypted and not stored after your session unless you explicitly choose to save it to your account. We never share your data with third parties.',
    },
    {
      id: 3,
      question: 'Can I use this tool for professional medical advice?',
      answer:
        'While our tool can help verify medical claims, it is not a substitute for professional medical advice. Always consult with healthcare professionals for diagnosis, treatment, and medical decisions.',
    },
    {
      id: 4,
      question: 'Do I need to create an account to use the basic features?',
      answer:
        'No, you can use our basic fact-checking features without creating an account. However, creating a free account allows you to save your search history, receive updates on previously checked claims, and access advanced analysis features.',
    },
  ];

  return (
    <section className="py-16 bg-browncoffee text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-kitty-pink mb-4">Frequently Asked Questions</h2>
          <p className="max-w-3xl mx-auto">
            Find answers to common questions about our platform and medical misinformation.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-md">
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left"
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="font-medium text-kitty-pink">{faq.question}</span>
                {openFAQ === faq.id ? (
                  <BiChevronUp className="text-kitty-pink" />
                ) : (
                  <BiChevronDown className="text-kitty-pink" />
                )}
              </button>
              <div className={`${openFAQ === faq.id ? 'block' : 'hidden'} px-6 py-4 border-t border-pink-100`}>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;