import React from "react";
import Profile from "./profile/Profile";
import Dialogs from "./messages/Dialogs";
import {BrowserRouter as Router, Route} from "react-router-dom";

function MainContent() {

    return (
        <>

            <Router>
                <div className="main-content">
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/messages">
                     <Dialogs/>
                    </Route>


                </div>
            </Router>
        </>
    )
}

export default MainContent;
