import React from "react";
import {Container, Row, Col, FormControl, Button} from "react-bootstrap";
import classes from "../Profile.module.css"

function NewPost({addPost}) {

    const handleClick = ()=> {
        let inputValue = refLink.current.value;
        alert(`inside textarea: ${inputValue}`);
        addPost('we added a post inside the function');
    }

    const refLink = React.createRef();

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
                                    <FormControl
                                        as="textarea"
                                        placeholder="Share some what you are thinking?"
                                        aria-label="With textarea"
                                        ref={refLink}
                                    />
                                </form>
                                <Button variant="primary" onClick={handleClick}>Primary</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewPost;
