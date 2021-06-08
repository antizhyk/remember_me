import {ADD_USER, REMOVE_USER} from "./types";

const initialState = {
user: null,
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                user: action.data,
            }
          case REMOVE_USER:
            return {
                ...state,
                user: null,
            }
        default:
            return state
    }
}

export default UserReducer
