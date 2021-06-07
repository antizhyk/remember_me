import {GET_DATA, GET_FOLDERS, VIEW_CONTENT} from "./types";

const initialState = {
    notes: null,
    folders: null,
    content: null,
}

const NoteReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                notes: action.data
            }
        case GET_FOLDERS:
            return {
                ...state,
                folders: action.data
            }
        case VIEW_CONTENT:
            return {
                ...state,
                content: action.data
            }
        default:
            return state;
    }
}

export default NoteReducer;
