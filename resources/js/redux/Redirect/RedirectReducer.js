import {CLEAR_REDIRECT, SET_REDIRECT} from "./types";

const initialState = {
    to: null
}

const RedirectReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REDIRECT:
            return {
                ...state,
                to: action.to,
            }

        case CLEAR_REDIRECT:
            return {
                ...state,
                to: null,
            }

        default:
            return state;
    }
}


export default RedirectReducer;
