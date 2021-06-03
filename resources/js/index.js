import App from "./App";

require('./bootstrap');
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.querySelector('#root')
)

