/**
 Render Component

 function that takes in state as a param and re-renders entire DOM tree per need
 */

import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import  {addPost} from "./redux/state";

let rerenderEntireDom = function(state) {

        ReactDOM.render (
        <React.StrictMode>
            <App state={state} addPost={addPost} />
        </React.StrictMode>,
        document.getElementById('root'))
}

export default rerenderEntireDom
