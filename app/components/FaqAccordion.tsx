import { useState } from "react";
import { motion } from "framer-motion";
// import { FaChevronDown } from 'react-icons/fa'; // Import Chevron Icon from react-icons

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active index
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full text-left py-4 text-xl font-semibold flex justify-between items-center focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <motion.div
              className="ml-2"
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </motion.div>
          </button>
          <motion.div
            initial={false}
            animate={
              activeIndex === index
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {activeIndex === index && (
              <div className="py-2 text-gray-600">{faq.answer}</div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
