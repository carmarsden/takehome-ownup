export const FETCH_RATES_BEGIN = 'FETCH_RATES_BEGIN';
export const FETCH_RATES_SUCCESS = 'FETCH_RATES_SUCCESS';
export const FETCH_RATES_FAILURE = 'FETCH_RATES_FAILURE';

export const fetchRatesBegin = () => ({
    type: FETCH_RATES_BEGIN
});

export const fetchRatesSuccess = rateQuotes => ({
    type: FETCH_RATES_SUCCESS,
    payload: { rateQuotes }
});

export const fetchRatesFailure = error => ({
    type: FETCH_RATES_FAILURE,
    payload: { error }
});

export const fetchRates = () => {
    return (dispatch) => {
        dispatch(fetchRatesBegin());
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve('fetchRates action is getting resolved here!');
            }, 300);
        })
        .then(res => console.log(res))
    }
};