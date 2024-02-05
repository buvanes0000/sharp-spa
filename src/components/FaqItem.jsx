import React, { useState } from "react";

const FaqItem = ({ question, answer, number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`tab ${isOpen ? "open" : ""}`}>
      <div className="question" onClick={() => setIsOpen(!isOpen)}>
        <h2>{number < 10 ? `0${number}` : number}</h2>
        <h3>{question}</h3>
        <span className="arrow">▼</span>
      </div>
      <div className="content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
