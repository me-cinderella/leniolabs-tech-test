import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import fetch from './fetchReducer.js';

const rootReducer = createStore( fetch, applyMiddleware( thunk ));

export default rootReducer;