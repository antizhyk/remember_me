import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({

})
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
