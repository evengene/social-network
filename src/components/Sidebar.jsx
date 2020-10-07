import React from "react";
import {Container, Row, Image} from "react-bootstrap";
import Nav from "react-bootstrap/cjs/Nav";
// import Navbar from "react-bootstrap/Navbar";
// impgitort logo from "static/images/logo192.png"


function Sidebar () {

    return (
        <>
            <div className="sidebar">
            <Container>
                <Row>
                    <div className="sidebar-wrapper">
                        <Nav defaultActiveKey="/home" className="flex-column">
                            {/*<img src='/static/images/logo192.png'/>*/}
                            <p>Account</p>
                            <Nav.Link href="/home">Profile</Nav.Link>
                            <Nav.Link eventKey="link-1">Messages</Nav.Link>
                            <Nav.Link eventKey="link-2">News</Nav.Link>
                            <Nav.Link eventKey="link-2">Music</Nav.Link>
                        </Nav>
                    </div>
                </Row>
            </Container>
            </div>
        </>
    )

}

export default Sidebar;
