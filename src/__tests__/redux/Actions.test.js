import * as actions from '../../redux/actions';

describe('Redux synchronous actions tests', () => {
    it('creates FETCH_RATES_BEGIN action', () => {
        expect(actions.fetchRatesBegin()).toEqual({
            type: actions.FETCH_RATES_BEGIN
        })
    });

    it('creates FETCH_RATES_SUCCESS action with payload', () => {
        const examplePayload = {
            rateQuotes: [
                {
                    "lenderName": "Demo lender",
                    "loanType": "7/1 ARM",
                    "interestRate": 4.5,
                    "closingCosts": 5500,
                    "monthlyPayment": 2800,
                    "apr": 4.47814
                }
            ]
        };
        expect(actions.fetchRatesSuccess(examplePayload)).toEqual({
            type: actions.FETCH_RATES_SUCCESS,
            payload: { rateQuotes: examplePayload }
        })
    });

    it('creates FETCH_RATES_FAILURE action with payload', () => {
        const exampleErr = {
            error: 'Something went wrong!'
        };
        expect(actions.fetchRatesFailure(exampleErr)).toEqual({
            type: actions.FETCH_RATES_FAILURE,
            payload: { error: exampleErr }
        })
    });
})