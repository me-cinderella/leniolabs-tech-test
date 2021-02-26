import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import { fetch, search } from './dataReducer.js';

const combinedReducers = combineReducers({
    fetch,
    search
});

const rootReducer = createStore( combinedReducers, applyMiddleware( thunk ));

export default rootReducer;