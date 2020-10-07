import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Nav from "react-bootstrap/cjs/Nav";
import Navbar from "react-bootstrap/Navbar";


function Header () {

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )

}

export default Header;
