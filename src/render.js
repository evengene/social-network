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
