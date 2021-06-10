import React, {useState} from "react";
import {SignInBtn, SignInForm, SignInLink, SignInWrapper, SingInContainer} from "../SignIn/styles";
import {TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {signUp} from "../../redux/User/actions";

const SignUp = React.memo(() => {
    const [values, setValues] = useState({
        login: '',
        email: '',
        token: '',
        password: '',
        passwordConfirmation: '',
    })
    const dispatch = useDispatch()

    const sendData = (e) => {
        e.preventDefault()
        dispatch(signUp(values))
    }

    const handler = (val) => (e) => {
        setValues(prev => ({...prev, [val]: e.target.value}))
    }


    return (
        <SignInWrapper>
            <SingInContainer>
                <SignInForm onSubmit={sendData}>
                    <TextField label="Login" variant="outlined" value={values.name} name='login'
                               onChange={handler('login')}/>
                    <TextField label="E-mail" variant="outlined" value={values.email} type='email'
                               name='email' onChange={handler('email')}/>
                    <TextField label="Token" variant="outlined" value={values.token} name='token'
                               onChange={handler('token')}/>
                    <TextField label="Password" variant="outlined" value={values.password}
                               type='password' name='password' onChange={handler('password')}/>
                    <TextField label="Confirm Password" value={values.passwordConfirmation}
                               variant="outlined" type='password' onChange={handler('passwordConfirmation')}
                               name='password_confirmation'/>
                    <SignInLink to="/login">Login</SignInLink>
                    <SignInBtn type='submit' variant="outlined">Register</SignInBtn>
                </SignInForm>
            </SingInContainer>
        </SignInWrapper>
    )
})

export default SignUp
