import React from "react";
import "./styles.css";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={`faq ${faq.open ? "open" : ""} mb-4 md:mb-6 lg:mb-8`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question font-inter text-white font-normal text-lg md:text-xl lg:text-2xl">
        {faq.question}
      </div>
      <div className="faq-answer text-white opacity-50 font-normal text-base md:text-lg lg:text-xl">
        {faq.answer}
      </div>
    </div>
  );
};

export default FAQ;
