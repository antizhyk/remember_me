import {ADD_USER, GET_STATUS_USER, REMOVE_USER} from "./types";

const initialState = {
    user: null,
    auth: false,
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
         case GET_STATUS_USER:
             console.log('data', action.data)
            return {
                ...state,
                auth: action.data,
            }
        default:
            return state
    }
}

export default UserReducer
