import { FETCH_RATES_BEGIN, FETCH_RATES_SUCCESS, FETCH_RATES_FAILURE } from './actions';

const initialState = {
    loading: false,
    error: null,
    rateQuotes: []
};

export default function ratesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RATES_BEGIN:
            console.log('FETCH_RATES_BEGIN was called');
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_RATES_SUCCESS:
            console.log('FETCH_RATES_SUCCESS was called');
            return {
                ...state,
                loading: false,
                rateQuotes: action.payload.rateQuotes
            };

        case FETCH_RATES_FAILURE:
            console.log('FETCH_RATES_FAILURE was called');
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                rateQuotes: [],
            };
        
        default:
            return state;
    }
}