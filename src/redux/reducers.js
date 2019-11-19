import { FETCH_RATES_BEGIN, FETCH_RATES_SUCCESS, FETCH_RATES_FAILURE } from './actions';

const initialState = {
    introScreen: true,
    loading: false,
    error: null,
    quotes: []
};

export default function ratesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RATES_BEGIN:
            console.log('FETCH_RATES_BEGIN was called');
            return {
                ...state,
                introScreen: false,
                loading: true,
                error: null
            };

        case FETCH_RATES_SUCCESS:
            console.log('FETCH_RATES_SUCCESS was called');
            return {
                ...state,
                loading: false,
                quotes: action.payload.rateQuotes
            };

        case FETCH_RATES_FAILURE:
            console.log('FETCH_RATES_FAILURE was called');
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                quotes: [],
            };
        
        default:
            return state;
    }
}