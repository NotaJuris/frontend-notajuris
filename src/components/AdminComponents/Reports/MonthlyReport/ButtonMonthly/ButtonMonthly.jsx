
import activityList from "../../data";
import { useState } from "react";

function ButtonMonthly() {
    const [index, setIndex] = useState(0);
  
    function handleClick() {
      setIndex(index + 1);
    }
  
    let option = activityList[index];
    return (
      <>
        <button onClick={handleClick}>
            {option.time}
        </button>
        <p>
          {option.name}
        </p>
      </>
    );
  }

export default ButtonMonthly;