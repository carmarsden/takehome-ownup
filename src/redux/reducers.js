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
            return {
                ...state,
                introScreen: false,
                loading: true,
                error: null
            };

        case FETCH_RATES_SUCCESS:
            return {
                ...state,
                loading: false,
                quotes: action.payload.rateQuotes
            };

        case FETCH_RATES_FAILURE:
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