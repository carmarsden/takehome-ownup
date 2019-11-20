import React from 'react';

export function RatesRow(props) {
    const rate = props.rate;

    const formattedInterestRate = rate.interestRate.toString() + '%';
    const formattedApr = rate.apr.toFixed(3) + '%';
    const formattedCosts = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: Number.isInteger(rate.closingCosts) ? 0 : 2
    }).format(rate.closingCosts);
    const formattedPayment = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(rate.monthlyPayment);

    return (
        <tr>
            <td>{rate.lenderName}</td>
            <td>{rate.loanType}</td>
            <td>{formattedInterestRate}</td>
            <td>{formattedCosts}</td>
            <td>{formattedPayment}</td>
            <td>{formattedApr}</td>
        </tr>
    );
}

export default RatesRow;