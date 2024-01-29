import React, { useState } from 'react';
import './FAQAccordion.css'; // make sure to create this CSS file

const FAQAccordion = () => {
    const faqs = [
        {
            question: 'how does all this coding nonsense work?',
            answer: 'no one really knows.',
        },
        {
            question: 'What should I have for dinner?',
            answer: 'kimchi fried rice probably.',
        },
        // Add more FAQs here
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-accordion">
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                        {faq.question}
                    </div>
                    <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                        {faq.answer}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
