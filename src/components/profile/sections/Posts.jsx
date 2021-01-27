import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import classes from "../Profile.module.css"
import Post from "./SinglePost";

function MyPosts({postData}) {
    let posts = postData.map(el => {
        return  <Post message={el.m} date={el.date} like={el.like} dislike={el.dislike}/>
    })

    return (
        <>
            {/*my-posts*/}
            <section>
                <Container fluid>
                    <Row lg={8}>
                        <Col>
                            <div className={classes.posts}>
                                <h4 className={classes.subHeader}>My Posts</h4>
                                {posts}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default MyPosts;
