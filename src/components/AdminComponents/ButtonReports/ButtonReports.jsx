import { useState } from 'react';
import { OptionsButtons } from './OptionsButtons';

export default function ButtonReport() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let option = OptionsButtons[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <p>
        {option.name}
      </p>
    </>
  );
}
