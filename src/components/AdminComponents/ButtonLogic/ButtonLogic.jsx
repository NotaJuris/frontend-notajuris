import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import Comp1 from './Component1';
import Comp2 from './Component2';
import Comp3 from './Component3';

const RenderComponent = ({ index }) => {
  switch (index) {
    case 0: return <Comp1 />;
    case 1: return <Comp2 />;
    case 2: return <Comp3 />;
    default: return null;
  }
};

function ButtonLogic() {
  const [isSelected, setIsSelected] = useState(0);

  const buttons = [
    "Mensal", "Semestral", "Total"
  ];

  return (
    <div className="app-container">
      <ButtonGroup buttons={buttons} isSelected={isSelected} setIsSelected={setIsSelected} />
      <RenderComponent index={isSelected} />
    </div>
  );
}

export default ButtonLogic;