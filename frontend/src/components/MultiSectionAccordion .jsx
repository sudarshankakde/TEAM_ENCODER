// MultiSectionAccordion.js

import React, { useState } from 'react';

const MultiSectionAccordion = ({ sections }) => {
  

  return (
    <div>
      <h2>Multi-Section Accordion</h2>
      <div>
        {sections.map((section, index) => (
          <div key={index} className="accordion-section">
            <div
              className={`accordion-header ${openSection === index ? 'open' : ''}`}
              onClick={() => toggleSection(index)}
            >
              {section.title}
            </div>
            {openSection === index && (
              <div className="accordion-content">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSectionAccordion;
