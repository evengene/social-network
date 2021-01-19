import React from "react";
// import {Container, Row} from "react-bootstrap";
import "./Dialogs.module.css"
import {Container, Row, Col} from "react-bootstrap";
import c from "./Dialogs.module.css"
import Nav from "react-bootstrap/cjs/Nav";


const People = (props) => {

    let id = "/messages/" + props.id
    return (
        <>
            <Nav.Link href={id} eventKey="link-6">
                {props.name}
            </Nav.Link>

        </>
    )
}

const Chat = (props) => {
    return (
        <>
            <div>{props.message}</div>
        </>
    )
}

function Dialogs() {

    let dialogsData = [
        {
            id: '1',
            name: 'Anya'
        },
        {
            id: '2',
            name: 'Andrew'
        },
        {
            id: '3',
            name: 'Maria'
        },
        {
            id: '4',
            name: 'Kirill'
        },
        {
            id: '5',
            name: 'Alexey'
        }
    ]
    let dialogElements = dialogsData.map(person => <People name={person.name} id={person.id}/>)
    let messagesData = [
        {
            id: '1',
            name: 'dialog for person 1'
        },
        {
            id: '2',
            name: 'dialog for person 2'
        },
        {
            id: '3',
            name: 'dialog for person 3'
        },
        {
            id: '4',
            name: 'dialog for person 4'
        },
        {
            id: '5',
            name: 'dialog for person 5'
        }
    ]
    let messageElements = messagesData.map(message => <Chat message={message.name}/>)

    return (
        <>
            <section>
                Dialogs section
                <Container fluid className={c.container}>
                    <Row>
                        <Col className={c.people}>
                            {dialogElements}
                        </Col>

                        <Col className={c.chat}>
                            {messageElements}
                        </Col>
                    </Row>

                </Container>
            </section>

        </>
    )
}


export default Dialogs;
