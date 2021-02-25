import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import "./global.css"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import MainContent from "./components/Content";

function App({state, addPost}) {

    return (
        <div>
            <Header/>
            <div className="flexed">
                <Sidebar/>
                <MainContent dialogsData={state.messagesPage.dialogsData}
                             messagesData={state.messagesPage.messagesData}
                             postData={state.profilePage.postData} addPost={addPost}/>
            </div>
        </div>
    );
}

export default App;
