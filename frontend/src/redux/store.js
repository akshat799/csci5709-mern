import {createStore , combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import { productReducer } from './reducers/productReducers';
import { authReducer } from './reducers/authReducers';

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);