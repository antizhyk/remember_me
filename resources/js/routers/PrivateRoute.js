import React, {useEffect, useState} from "react";
import {Redirect, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Layout from "../components/Layout/Layout";
import {getStatus} from "../redux/User/actions";

const PrivateRoute = ({component: Component, ...rest}) => {
    const dispatch = useDispatch()
    const auth = useSelector(({User}) => User.auth)
    const [status, setStatus] = useState(true)
    useEffect(() => {
        dispatch(getStatus())
        setStatus(!!auth)
    }, [])
    console.log('redirect', status)
    return (
        <Route {...rest} render={() => status ? <Layout/> : <Redirect to={`/login`}/>}/>
    )
}

export default PrivateRoute
