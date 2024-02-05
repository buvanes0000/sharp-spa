import React from "react";
import FaqItem from "./FaqItem";
import faqData from "./FaqData";
import "./faq.scss";

const Faq = () => {
  return (
    <section id="FAQ">
      <div className="container">
        <h2>Frequently asked questions about our spa</h2>
        {faqData.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            number={index + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
