import axios from "axios";
import {setRedirect} from "../Redirect/actions";
import {ADD_USER, REMOVE_USER} from "./types";

export const signUp = (data) => (dispatch) => {
    axios.post('/register', {
        headers: {'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')},
        data: {
            login: data.login,
            email: data.email,
            token: data.token,
            password: data.password,
        }
    })
        .then(() => {
            dispatch(setRedirect('/'));
        })
        .catch(error => {
            if (error.response) {
                for (let key in error.response.data.errors) {
                    alert(error.response.data.errors[key])
                }
            }
        })
}

export const logout = () => (dispatch) => {

    axios.post('/logout')
        .then(() => {
            dispatch(removeUser())
            dispatch(setRedirect('/login'))
        })
        .catch(error => alert('Error'))
}

export const login = (login, password) => (dispatch) => {
    axios.post('/login', {
        headers: {'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')},
        data: {
            login: login,
            password: password,
        }
    })
        .then((responce) => {
            console.log('res', responce)
            // dispatch(addUser(data))
            dispatch(setRedirect('/'))
        })
        .catch(error => {
            if (error.response) {
                for (let key in error.response.data.errors) {
                    alert(error.response.data.errors[key])
                }
            }
        })
}

export const addUser = data => {
    return {
        type: ADD_USER,
        data
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}
