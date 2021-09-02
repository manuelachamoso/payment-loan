import React from 'react';

const Results = ({total, period, amount}) => {
    return ( 
        <div className='u-full-width resultado'>
            <h2>Payment Breakdown</h2>
            <p>The requested quantity is: {amount}€</p>
            <p>To pay in: {period} months</p>
            <p>Your estimated monthly payment is: {(total/period.toFixed(2))}€ </p>
            <p>Total to pay: {(total.toFixed(2))}€</p>

        </div>
    );
}
 
export default Results;