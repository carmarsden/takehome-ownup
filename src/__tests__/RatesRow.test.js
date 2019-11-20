import React from 'react';
import { shallow } from 'enzyme';
import { RatesRow } from '../components/RatesRow';


describe('RatesRow component smoke tests', () => {
    let props;

    beforeEach(() => {
        props = {
            rate: {
                "lenderName": "Demo lender",
                "loanType": "7/1 ARM",
                "interestRate": 4.5,
                "closingCosts": 5500,
                "monthlyPayment": 2800,
                "apr": 4.47814
            }
        };
    })

    it('renders without crashing', () => {
        shallow(<RatesRow {...props} />);
    });

    it('renders table row', () => {
        const wrapper = shallow(<RatesRow {...props} />);
        expect(wrapper.exists('tr')).toBe(true);
    });

    it('renders 6 data cells', () => {
        const wrapper = shallow(<RatesRow {...props} />);
        expect(wrapper.find('tr').children()).toHaveLength(6);
    });
})