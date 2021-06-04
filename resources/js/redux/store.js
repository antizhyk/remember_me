import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import NoteReducer from "./Note/NoteReducer";

let reducers = combineReducers({
Note: NoteReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
