import React from "react";
import {Container, Row, Col, FormControl, Button} from "react-bootstrap";
import classes from "../Profile.module.css"

function NewPost() {

    return (
        <>
            {/*create post*/}
            <section>
                <Container fluid>

                    <Row lg={8}>
                        <Col>
                            <div className={classes.postCard}>
                                <h4 className={classes.subHeader}>Create Post</h4>
                                <form className={classes.cardBody}>
                                    <FormControl as="textarea" placeholder="Share some what you are thinking?" aria-label="With textarea" />
                                </form>
                                <Button variant="primary">Primary</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewPost;
