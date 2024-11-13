import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup';

function ButtonLogic({ buttons, onButtonSelect }) {
  const [isSelected, setIsSelected] = useState(0);

  const handleButtonClick = (index) => {
    setIsSelected(index);
    onButtonSelect(index);
  };

  return (
      <ButtonGroup buttons={buttons} isSelected={isSelected} onButtonClick={handleButtonClick} />
  );
}

export default ButtonLogic;