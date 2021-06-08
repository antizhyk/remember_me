import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import Layout from "../components/Layout/Layout";

const PrivateRoute = ({component: Component, ...rest}) => {
    const user = useSelector(({User}) => User.user)

    return (
        <Route {...rest} render={() => user ? <Layout/> : <Redirect to={`/login`}/>}/>
    )
}

export default PrivateRoute
