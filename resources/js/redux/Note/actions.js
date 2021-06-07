import axios from "axios";
import {GET_DATA, GET_FOLDERS} from "./types";

export const getData = () => (dispatch) => {
    axios.get('/get_data')
        .then(data => dispatch(saveData(data.data.data)))
        .catch(err => console.error(err))

    axios.get('/get_folder')
        .then(folder => dispatch(saveFolders(folder.data.data)))
        .catch(err => console.error(err))
}

export const saveData = (data) => {
    return {
        type: GET_DATA,
        data
    }
}

export const saveFolders = (data) => {
    return {
        type: GET_FOLDERS,
        data
    }
}
