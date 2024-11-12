import React from "react";
import "./ButtonGroup.css";

function ButtonGroup({ buttons, isSelected, setIsSelected }) {
    return (
        <div className="button-report-container">
            {buttons.map((text, index) => (
                <button
                    key={index}
                    className={isSelected === index ? "selected-button" : "button"}
                    onClick={() => setIsSelected(index)}
                >
                    {text}
                </button>
            ))}
        </div>
    );
}

export default ButtonGroup;
