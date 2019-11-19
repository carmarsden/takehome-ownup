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

export const fetchRates = params => {
    const queryParams = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    const queryString = '?' + queryParams.join('&');

    return (dispatch) => {
        dispatch(fetchRatesBegin());
        return fetch(`${process.env.REACT_APP_API_BASE_URL}${queryString}`, {
                method: 'GET',
            headers: {
                'Authorization': `RG-AUTH ${process.env.REACT_APP_API_AUTH_TOKEN}`
            }
        })
        .then(res => (res.ok) ? res.json() : res.json().then(e => Promise.reject(e)))
        .then(json => {
            dispatch(fetchRatesSuccess(json.rateQuotes));
            return json;
        })
        .catch(res => {
            let errDisplay = 'Something went wrong.';
            if (res.error || res.message) {
                errDisplay = res.error || res.message;
            }
            if (res.errors && Array.isArray(res.errors)) {
                errDisplay = res.errors[0];
            }
            dispatch(fetchRatesFailure(errDisplay));
        })
    }
};