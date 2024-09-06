'use client'
import { useState, useRef } from 'react';
import { Plus } from 'lucide-react';

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border shadow-lg border-slate-600 rounded-lg mb-4 px-4 lg:px-0">
      <button
        className="flex justify-between items-center w-full p-2 lg:p-4 text-left"
        onClick={toggleFAQ}
      >
        <span className="font-medium text-gray-200 ">{question}</span>
        <Plus className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
      </button>
      <div
        ref={contentRef}
        style={{ height: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
        className="overflow-hidden transition-height duration-300 ease-in-out"
      >
        <div className="p-4 pt-0">
          <p className="text-gray-400">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Is my acceptance to a batch transferable to another one?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "How selective is the Silicon Valley Fellowship program?",
      answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Is the program open to all nationalities?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      question: "Are there scholarships available?",
      answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      question: "Which visa do I need and how do I apply for it?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "Who organizes the Silicon Valley Fellowship? And why?",
      answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Does the participation to Silicon Valley Fellowship grant me a work visa?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      question: "What is the difference with the Silicon Valley Study Tour?",
      answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        question: "Is the program open to all nationalities?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        question: "Are there scholarships available?",
        answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
  ];

  return (
    <div className="max-w-lg lg:max-w-4xl mx-auto py-12 px-8 lg:px-4">
      <h1 className="text-xl lg:text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-540">Frequently Asked Questions</h1>
      <p className="text-center text-gray-300 mb-8">Everything you need to know about <br className='lg:hidden'/> the Ark Impact Labs Fellowship.</p>
      <div className="grid  gap-3 lg:gap-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
