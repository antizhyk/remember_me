import React from "react";
import Layout from "./components/Layout/Layout";
import {Route, BrowserRouter} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UseRedirect from "./hooks/useRedirect";
import PrivateRoute from "./routers/PrivateRoute";

const App = () => {
    return(
        <BrowserRouter>
            <UseRedirect />
            <PrivateRoute exact path="/"/>
            {/*<Route exact path="/" render={() => <Layout/>}/>*/}

            <Route exact path="/login" render={() => <SignIn/>}/>
            <Route exact path="/register" render={() => <SignUp/>}/>
        </BrowserRouter>
        )
}

export default App
