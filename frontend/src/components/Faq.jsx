import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: 'How do I schedule a service?',
      answer: 'You can schedule a service through our online platform or mobile app by selecting your preferred time and service type.'
    },
    {
      question: 'What areas do you cover?',
      answer: 'We currently service all major cities within a 50-mile radius. Check your postal code in our coverage area page.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and Apple Pay. Offline payments are also accepted directly to the mechanic.'
    },
    {
      question: 'How long do repairs usually take?',
      answer: 'Most common repairs take 2-4 hours. Complex issues may require overnight diagnostics. We provide time estimates upfront.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className="transition-all duration-300 ease-in-out"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full px-6 py-4 text-left rounded-lg flex items-center justify-between
                transition-all duration-200 hover:shadow-lg hover:delay-150
                ${openIndex === index ? 'bg-gray-50 shadow-sm' : 'bg-white shadow'}`}
            >
              <span className="text-lg font-medium text-gray-700">{item.question}</span>
              {openIndex === index ? (
                <FiChevronUp className="w-6 h-6 text-gray-600 ml-4 flex-shrink-0" />
              ) : (
                <FiChevronDown className="w-6 h-6 text-gray-600 ml-4 flex-shrink-0" />
              )}
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
                ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-6 py-4 text-gray-600 border-t border-gray-100">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;