import React from "react";
import "./Dialogs.module.css"
import './dialogs.scss'
import {Container, Row, Col, InputGroup, FormControl, Button} from "react-bootstrap";
import Nav from "react-bootstrap/cjs/Nav";
import avatarGirl from "../../avatar-girl.jpg";
import avatarGreen from "../../04.jpg"

const People = (props) => {

    let id = "/messages/" + props.id
    return (
        <>

            <Nav.Link href={id} eventKey="link-6">

                <div className="person">
                    <div className="avatar">
                        <img src={avatarGirl} alt="avatar"/>
                    </div>
                    <div className="name">
                        {props.name}
                    </div>
                </div>
            </Nav.Link>

        </>
    )
}

const Chat = ({message, styling}) => {
    return (
        <>
            <div className={styling ? "chat-right" : "chat"}>
                <div className="chat-user">
                    <img src={avatarGreen} alt="avatar"/>
                </div>
                <div className="chat-message">
                    {message}

                </div>
            </div>

        </>
    )
}

function Dialogs({dialogsData, messagesData}) {

    let dialogElements = dialogsData.map(person => <People name={person.name} id={person.id}/>)
    let messageElements = messagesData.map(message => <Chat message={message.name} styling={message.float}/>)

    return (
        <>
            <section className="dialogs-section">
                <Container>
                    <Row>
                        <Col lg={3} md={3} sm={3}>
                            <div className="left-side">
                                {dialogElements}
                            </div>
                        </Col>
                        <Col lg={9} md={9} sm={9}>
                            <div className="right-side">
                                <div className="chat-content">
                                    {messageElements}
                                </div>
                                <div className="start-message">
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Enter your message here"
                                            aria-label="Enter your message here"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <Button variant="primary">Send</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}


export default Dialogs;
