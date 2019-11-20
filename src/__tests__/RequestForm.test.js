import React from 'react';
import { shallow } from 'enzyme';
import { RequestForm } from '../components/RequestForm';


describe('RequestForm component smoke tests', () => {
    let props;

    beforeEach(() => {
        props = {
            fetchRates: jest.fn(),
        };
    })

    it('renders without crashing', () => {
        shallow(<RequestForm {...props} />);
    });

    it('renders form with class .requestform', () => {
        const wrapper = shallow(<RequestForm {...props} />);
        expect(wrapper.exists('.requestform')).toBe(true);
        expect(wrapper.find('.requestform').is('form')).toBe(true);
    });

    it('calls fetchRates on submission', () => {
        const mockEvent = { preventDefault: () => true };
        const wrapper = shallow(<RequestForm {...props} />);
        expect(props.fetchRates.mock.calls.length).toBe(0);
        wrapper.find('.requestform').simulate('submit', mockEvent);
        expect(props.fetchRates.mock.calls.length).toBe(1);
    });
})