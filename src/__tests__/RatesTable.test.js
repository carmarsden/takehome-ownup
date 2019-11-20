import React from 'react';
import { shallow } from 'enzyme';
import { RatesTable } from '../components/RatesTable';


describe('RatesTable component smoke tests', () => {
    let props;

    beforeEach(() => {
        props = {
            data: [
                {
                    "lenderName": "Demo lender",
                    "loanType": "7/1 ARM",
                    "interestRate": 4.5,
                    "closingCosts": 5500,
                    "monthlyPayment": 2800,
                    "apr": 4.47814
                }
            ],
        };
    })

    it('renders without crashing', () => {
        shallow(<RatesTable {...props} />);
    });

    it('renders table with class .quotestable', () => {
        const wrapper = shallow(<RatesTable {...props} />);
        expect(wrapper.exists('.quotestable')).toBe(true);
        expect(wrapper.find('.quotestable').is('table')).toBe(true);
    });
})