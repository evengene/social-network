import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import "./custom.css"
import {Col, Container, Row} from "react-bootstrap";
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
