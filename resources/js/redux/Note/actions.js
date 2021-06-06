import axios from "axios";
import {GET_DATA} from "./types";

export const getData = () => (dispatch) => {
    axios.get('/get_data')
        .then(data => dispatch(saveData(data.data.data)))
        .catch(err => console.error(err))
}

export const saveData = (data) => {
    return {
        type: GET_DATA,
        data
    }
}
