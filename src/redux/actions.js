import DUMMYDATA from '../DUMMYDATA';

export const FETCH_RATES_BEGIN = 'FETCH_RATES_BEGIN';
export const FETCH_RATES_SUCCESS = 'FETCH_RATES_SUCCESS';
export const FETCH_RATES_FAILURE = 'FETCH_RATES_FAILURE';

export const fetchRatesBegin = params => ({
    type: FETCH_RATES_BEGIN,
    payload: { params }
});

export const fetchRatesSuccess = rateQuotes => ({
    type: FETCH_RATES_SUCCESS,
    payload: { rateQuotes }
});

export const fetchRatesFailure = error => ({
    type: FETCH_RATES_FAILURE,
    payload: { error }
});

export const fetchRates = params => {
    return (dispatch) => {
        dispatch(fetchRatesBegin(params));
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve(DUMMYDATA);
            }, 300);
        })
        .then(res => {
            console.log(res.rateQuotes);
            dispatch(fetchRatesSuccess(res.rateQuotes));
            return res;
        })
        .catch(err => dispatch(fetchRatesFailure(err)))
    }
};