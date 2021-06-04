import {GET_DATA} from "./types";

const initialState = {
data: null
}

const NoteReducer = (state = initialState, action) => {

    switch (action.type){
        case GET_DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}

export default NoteReducer;
