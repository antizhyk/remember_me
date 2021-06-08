import React, {useState} from "react";
import {SignInBtn, SignInForm, SignInLink, SignInWrapper, SingInContainer} from "./styles";
import {TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {login} from "../../redux/User/actions";

const SignIn = React.memo(() => {
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        login: '',
        password: ''
    })

    const handler = (val) => (e) => {
        setValues(prev => ({...prev, [val]: e.target.value}))
    }

    const sendValue = (e) => {
        e.preventDefault()
        dispatch(login(values.login, values.password))
    }

    return (
        <SignInWrapper>
            <SingInContainer>
                <SignInForm onSubmit={sendValue}>
                    <TextField value={values.login} label="Login" variant="outlined" onChange={handler('login')}/>
                    <TextField value={values.password} label="Password" variant="outlined" type='password' onChange={handler('password')}/>
                    <SignInLink to="/register">SignUp</SignInLink>
                    <SignInBtn variant="outlined" type='submit'>Login</SignInBtn>
                </SignInForm>
            </SingInContainer>
        </SignInWrapper>
    )
})

export default SignIn
