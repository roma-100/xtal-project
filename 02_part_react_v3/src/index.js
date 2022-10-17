//import React from 'react';
//import ReactDOM from 'react-dom/client';

//import App from './App';
//import state from './redux/state'
//import {addPost} from './redux/state'
//import { renderEntireTree } from './render'
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import store from './redux/redux-store';
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));
  
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


