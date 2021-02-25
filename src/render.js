import React from 'react';
import App from './App';
import state, {addPost} from './redux/state'


let rerenderEntireDom = () = {

    return (
        ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    )


}

export default rerenderEntireDom
