import React from 'react';
import './CardsReports.css';

const CardsReports = ({activity, amount}) => {
    return (
        <div className="cards-reports">
            <span className='card-reports-activity'>{activity}</span>
            <span className='card-reports-amount'>{amount}</span>
        </div>
    );
        
}

export default CardsReports;