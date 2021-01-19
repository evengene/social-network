import React from "react";
import {Container, Row} from "react-bootstrap";
import classes from "../Profile.module.css"
import avatar from "../../../avatar-empty.jpg";

function ProfileInfo() {

    return (
        <>
            {/*about*/}
            <section>
                <Container fluid>
                    <Row>
                        <div className={classes.intro}>
                            <img src={avatar} className={classes.avatar} alt="avatar"/>
                            <div>
                                <h3>Alice Carter</h3>
                                description
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProfileInfo;
