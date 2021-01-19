import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import "./global.css"
import Header from "./components/Header";
import MainContent from "./components/Content";

function App() {
    return (
        <div>
            <Header/>
            <div className="flexed">
                <Sidebar/>
                <MainContent/>
            </div>
        </div>
    );
}

export default App;
