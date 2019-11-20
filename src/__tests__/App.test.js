import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';


describe('App component smoke tests', () => {
    let props;

    beforeEach(() => {
        props = {
            introScreen: true,
            loading: false,
            error: null,
            quotes: []
        };
    })

    it('renders without crashing', () => {
        shallow(<App {...props} />);
    });

    it('renders intro screen', () => {
        const wrapper = shallow(<App {...props} />);
        const intro = <section>Get started by filling out your details and clicking "Quote Rates"!</section>;
        expect(wrapper.contains(intro)).toBe(true);
    });

    it('renders loading screen', () => {
        props.introScreen = false;
        props.loading = true;
        const loading = <section>Looking for the best rates...</section>;
        const wrapper = shallow(<App {...props} />);
        expect(wrapper.contains(loading)).toBe(true);
    });

    it('renders error screen', () => {
        props.introScreen = false;
        props.error = 'Something went wrong!';
        const error = <p>Oh no! {props.error}</p>;
        const wrapper = shallow(<App {...props} />);
        expect(wrapper.contains(error)).toBe(true);
    });
})