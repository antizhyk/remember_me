import axios from "axios";

export const getData = () => (dispatch) => {
axios.get('/get_data')
    .then(data => console.log(data))
}
