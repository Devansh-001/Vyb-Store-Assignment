// components/QAs.js
"use client"

import React, { useState } from 'react';

const faqs = [
  { question: 'How much does it cost to set up a store?', answer: '' },
  { question: 'What kind of digital products can I sell?', answer: '' },
  {
    question: 'Do I need technical skills to use the platform?',
    answer: 'No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It’s as simple as a few clicks to get started!',
  },
  { question: 'Is there a limit to the number of products I can list?', answer: '' },
  { question: 'How do I receive payments for my sales?', answer: '' },
  { question: 'Can I sell internationally on this marketplace?', answer: '' },
  { question: 'What support and resources are available for sellers?', answer: '' },
  { question: 'Is there a review process for uploaded products?', answer: '' },
];

const QAs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto p-2 rounded-lg flex flex-col gap-2">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b bg-white border-gray-700 px-4  rounded-3xl">
          <button
            onClick={() => toggleAnswer(index)}
            className="w-full flex justify-between items-center py-3 text-left text-black font-medium focus:outline-none"
          >
            {faq.question}
            <span className="text-xl">
              {openIndex === index ? '—' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="py-2 text-black">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QAs;
