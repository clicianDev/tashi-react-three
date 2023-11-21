import React from "react";
import "./styles.css";

const FAQ = ({ faq, index, toggleFAQ }) => {
  const parseAnswer = (answer) => {
    // Regular expression to identify URLs in the answer
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const matches = answer.match(urlRegex);

    if (matches) {
      return answer.split(urlRegex).map((part, index) => (
        index % 2 === 0 ? (
          // Normal text
          <span key={index}>{part}</span>
        ) : (
          // Clickable link
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="underline">
            {part}
          </a>
        )
      ));
    } else {
      return answer;
    }
  };

  return (
    <div
      className={`faq ${faq.open ? "open" : ""} mb-4 md:mb-6 lg:mb-8`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question font-inter text-white font-normal text-lg md:text-xl lg:text-2xl">
        {faq.question}
      </div>
      <div className="faq-answer font-extralight text-white opacity-50 text-base md:text-lg lg:text-xl">
        <p className="px-5">{parseAnswer(faq.answer)}</p>
      </div>
    </div>
  );
};

export default FAQ;
