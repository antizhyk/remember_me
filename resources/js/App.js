import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UseRedirect from "./hooks/useRedirect";
import PrivateRoute from "./routers/PrivateRoute";
import pushMess from "./assest/pushMess";

const App = () => {
    pushMess();

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
