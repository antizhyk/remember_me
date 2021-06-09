import React from "react";
import {Redirect, Route} from "react-router-dom";
import Layout from "../components/Layout/Layout";

const PrivateRoute = ({component: Component, ...rest}) => {

    return (
        <Route {...rest} render={() => localStorage.getItem('auth') ? <Layout/> : <Redirect to={`/login`}/>}/>
    )
}

export default PrivateRoute
