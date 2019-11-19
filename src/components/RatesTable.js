import React from 'react';
import { tableHeaders } from '../constants';
import RatesRow from './RatesRow';

const generateHeaderCells = arr => arr.map((header, idx) => <th scope='col' key={idx}>{header}</th>);

function RatesTable(props) {
    const headerCells = generateHeaderCells(tableHeaders);
    const data = props.data;
    const tableRows = data.map((rate, idx) => <RatesRow key={idx} rate={rate} />);

    return (
        <section>
            <table className='quotestable'>
                <thead>
                    <tr>
                        {headerCells}
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>            
        </section>
    );
}

export default RatesTable;
