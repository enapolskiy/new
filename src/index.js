import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

export let _callSubscriber = (state)=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                <App />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
_callSubscriber(store.getState());
store.subscribe (() =>{
    let state = store.getState();
    _callSubscriber(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
