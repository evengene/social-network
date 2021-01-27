import React from "react";
import Profile from "./profile/Profile";
import Dialogs from "./messages/Dialogs";
import {BrowserRouter as Router, Route} from "react-router-dom";


function MainContent({dialogsData, messagesData, postData}) {

    return (
        <>
            <Router>
                <div className="main-content">
                    <Route path="/profile">
                        <Profile postData={postData}/>
                    </Route>
                    <Route path="/messages">
                        <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>
                    </Route>

                </div>
            </Router>
        </>
    )
}

export default MainContent;
