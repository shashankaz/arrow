"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer various services, including YouTube video suggestions, SEO optimization, social media strategies, analytics reports, and more to help grow your online presence.",
  },
  {
    question: "How do I sign up for your services?",
    answer:
      "You can sign up for our services by navigating to the Pricing page and choosing a plan that suits your needs. Once you select a plan, you'll be guided through the sign-up process.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, we offer customer support through email and phone. If you're a Pro or Business plan subscriber, you also get priority support with faster response times.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at any time. Once canceled, you will continue to have access to your plan until the end of the current billing cycle.",
  },
];

const FAQ = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index: any) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 pt-32">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left text-xl font-semibold py-2 focus:outline-none flex justify-between items-center"
            >
              {faq.question}
              <span>{openQuestionIndex === index ? "-" : "+"}</span>
            </button>
            {openQuestionIndex === index && (
              <p className="mt-4 text-gray-400">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
