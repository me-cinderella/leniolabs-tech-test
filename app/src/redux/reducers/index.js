import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import { fetch, search, detail } from './dataReducer.js';

const combinedReducers = combineReducers({
    fetch,
    detail,
    search
});

const rootReducer = createStore( combinedReducers, applyMiddleware( thunk ));

export default rootReducer;