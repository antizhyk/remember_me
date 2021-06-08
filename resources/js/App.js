import React from "react";
import Layout from "./components/Layout/Layout";
import {Route, BrowserRouter} from "react-router-dom";
import SignIn from "./components/SignIn";

const App = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" render={() => <Layout/>}/>
            <Route exact path="/sign-in" render={() => <SignIn/>}/>
        </BrowserRouter>
        )
}

export default App
