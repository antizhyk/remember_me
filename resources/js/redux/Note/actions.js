import axios from "axios";
import {GET_DATA} from "./types";

export const getData = () => (dispatch) => {
    let arrFolder = [];
    axios.get('/get_data')
        .then(data => {
            //console.log(data.data.data[0].folder)
            data.data.data.forEach(el => !arrFolder.includes(el.folder) && arrFolder.push(el.folder))
            console.log('arr', arrFolder)
            dispatch(saveData(data.data))
        })
        .catch(err => console.error(err))
}

export const saveData = (data) => {
    return {
        type: GET_DATA,
        data
    }
}
