import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {productReducer} from './reducers/Product';

export const store = createStore(productReducer, applyMiddleware(thunk));

export default store;
