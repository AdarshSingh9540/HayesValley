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
        className="flex justify-between items-center w-full p-2 lg:p-4 text-left text-slate-100"
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
      question:"What is the duration of the program?",
      answer:"The program is a week long."
    },
    {
      question:"What is the cost of the program?",
      answer:"The program cost is 4500 CAD which includes accommodation."
    },
    {
      question: "What is the deadline for applications?",
      answer: "The deadline for applications is September 28."
    },
    {
      question: "What is the program start date?",
      answer: "The program starts on October 8."
    },
    {
      question: "Is my acceptance to a batch transferable to another one?",
      answer: "Yes"
    },
    {
      question: "How selective is the Ark Impact Fellowship program?",
      answer: "Less than 1% of applicants are accepted."
    },
    {
      question: "Is the program open to all nationalities?",
      answer: "No, only to residents of Canada."
    },
    {
      question: "Are there scholarships available?",
      answer: "Yes, there are scholarships available."
    },
    {
      question: "Who organizes the Ark Impact Fellowship? And why?",
      answer: "The Ark Impact Fellowship, founded by a group of seasoned entrepreneurs, is based in Hayes Valley, San Francisco. The program is dedicated to helping founders build and scale their startups in the vibrant heart of the city."
    }
  ];

  return (
    <div className="max-w-lg lg:max-w-4xl mx-auto py-12 px-8 lg:px-4">
      <h1 className="text-xl lg:text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-540">Frequently Asked Questions</h1>
      <p className="text-center text-gray-300 mb-8">Everything you need to know about <br className='lg:hidden'/> the Ark Impact Fellowship.</p>
      <div className="grid  gap-3 lg:gap-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
