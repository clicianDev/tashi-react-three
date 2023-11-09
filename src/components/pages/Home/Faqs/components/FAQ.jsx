import React from "react";
import "./styles.css";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question font-inter text-white font-normal text-2xl">{faq.question}</div>
      <div className="faq-answer text-white opacity-[0.5] font-normal text-xl">{faq.answer}</div>
    </div>
  );
};

export default FAQ;
