require('./bootstrap');
import React from 'react'
import ReactDOM from 'react-dom'
import store from "./redux/store";
import App from "./App";
import { Provider } from 'react-redux';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <App/>
        </Provider>
    </React.StrictMode>,
    document.querySelector('#root')
)

reportWebVitals();
