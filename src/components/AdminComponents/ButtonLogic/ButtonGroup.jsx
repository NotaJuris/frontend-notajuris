import React from 'react';
import './ButtonGroup.css';

const ButtonGroup = ({ buttons, isSelected, onButtonClick }) => {
  return (
    <div className="button-group">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={isSelected === index ? 'selected' : ''}
          onClick={() => onButtonClick(index)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
