import styled from "styled-components";
import {LayoutGetData} from "../Layout/styles";
import {TextField} from "@material-ui/core";

export const SignInWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
`

export const SingInContainer = styled.div`
    max-width: 500px;
    width: 90%;
    background-color: #3F51B5;
    border-radius: 25px;
    padding: 25px;
`

export const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    input {
        color: #ffffff;
    }

    .MuiFormLabel-root,
    .MuiFormLabel-root.Mui-focused{
        color: #ffffff;
    }

    .MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline,
    .MuiOutlinedInput-root:hover
    .MuiOutlinedInput-notchedOutline{
        color: #ffffff;
        border: 2px solid #ffffff;
    }

    .MuiFormControl-root {
        margin-bottom: 10px;
    }

    .MuiOutlinedInput-notchedOutline, .MuiButton-outlined {
        color: rgba(255, 255, 255, 0.75);
        border: 2px solid rgba(255, 255, 255, 0.75);
        transition: all .3s;

        &:hover {
            color: #ffffff;
            border: 2px solid #ffffff;
        }
    }
`

export const SignInBtn = styled(LayoutGetData)`

`
