import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ratesReducer from './reducers';

export default createStore(ratesReducer, applyMiddleware(thunk));