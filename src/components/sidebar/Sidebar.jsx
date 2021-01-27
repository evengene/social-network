import React from "react";
import {Container, Row} from "react-bootstrap";
import Nav from "react-bootstrap/cjs/Nav";
import "./sidebar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser} from "@fortawesome/free-solid-svg-icons";

function Sidebar () {

    let currentUrl = typeof window !== 'undefined' ? window.location.pathname : ''; //messages
    let currentPath = currentUrl;

    return (
        <>

            <div className="sidebar">
            <Container>
                <Row>
                    <div className="sidebar-wrapper">
                        <Nav activeKey="/home" className="flex-column" onSelect={(selectedKey) => {

                        }}>

                            <p>Account</p>

                            <Nav.Link href="/profile/" eventKey="link-0" active={currentPath == '/profile/'}>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faUser}/>
                                </span>
                                Profile
                            </Nav.Link>
                            {/*<input type="text" readOnly="readonly" value={currentUrl} />*/}

                            <Nav.Link href="/messages/" eventKey="link-1" active={currentPath == '/messages/'}>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </span>
                                Messages
                            </Nav.Link>
                            <Nav.Link eventKey="link-2">Friends</Nav.Link>
                            <Nav.Link eventKey="link-3">Music</Nav.Link>
                        </Nav>
                    </div>
                </Row>
            </Container>
            </div>
        </>
    )

}

export default Sidebar;
