import { FETCH_RATES_BEGIN, FETCH_RATES_SUCCESS, FETCH_RATES_FAILURE } from '../../redux/actions';
import reducer from '../../redux/reducers';

describe('Redux reducers', () => {
    let desiredState;

    beforeEach(() => {
        desiredState = {
            introScreen: true,
            loading: false,
            error: null,
            quotes: []
        };
    });

    it('returns initial state', () => {
        expect(reducer(undefined, {})).toEqual(desiredState);
    });

    it('handles FETCH_RATES_BEGIN', () => {
        desiredState.introScreen = false;
        desiredState.loading = true;
        expect(reducer(undefined, { type: FETCH_RATES_BEGIN })).toEqual(desiredState);
    });

    it('handles FETCH_RATES_SUCCESS', () => {
        const exampleQuotes = [
            {
                "lenderName": "Demo lender",
                "loanType": "7/1 ARM",
                "interestRate": 4.5,
                "closingCosts": 5500,
                "monthlyPayment": 2800,
                "apr": 4.47814
            }
        ];
        desiredState.quotes = exampleQuotes;
        expect(reducer(undefined, { type: FETCH_RATES_SUCCESS, payload: { rateQuotes: exampleQuotes } })).toEqual(desiredState);
    });

    it('handles FETCH_RATES_FAILURE', () => {
        const exampleErr = 'Something went wrong!'
        desiredState.error = exampleErr;
        expect(reducer(undefined, { type: FETCH_RATES_FAILURE, payload: { error: exampleErr } })).toEqual(desiredState);
    });
})