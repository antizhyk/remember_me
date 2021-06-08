import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import NoteReducer from "./Note/NoteReducer";
import AuthReducer from "./Auth/AuthReducer";
import UserReducer from "./User/UserReducer";
import RedirectReducer from "./Redirect/RedirectReducer";

let reducers = combineReducers({
    Note: NoteReducer,
    Auth: AuthReducer,
    User: UserReducer,
    Redirect: RedirectReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
