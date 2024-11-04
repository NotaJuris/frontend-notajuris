// ToggleContent.js
import React, { useState } from 'react';
import './ToggleContent.css';

const ToggleContent = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="toggle-content">
      <button onClick={toggleVisibility} className="toggle-button">
        {isVisible ? '🙈' : '👁️'}
      </button>
      {isVisible && <div className="content">{content}</div>}
    </div>
  );
};

export default ToggleContent;
