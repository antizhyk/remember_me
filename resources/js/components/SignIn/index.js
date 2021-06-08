import React from "react";
import {SignInBtn, SignInForm, SignInWrapper, SingInContainer} from "./styles";
import {TextField} from "@material-ui/core";

const SignIn = React.memo(() => {

    return (
        <SignInWrapper>
            <SingInContainer>
                <SignInForm noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Login" variant="outlined" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                    <SignInBtn variant="outlined">Login</SignInBtn>
                </SignInForm>
            </SingInContainer>
        </SignInWrapper>
    )
})

export default SignIn
