import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import classes from "../Profile.module.css"
import Post from "./SinglePost";


let postData = [
    {
        m: 'Fall\'s best meteor shower to peak on Tuesday night\n',
        like: '3',
        dislike: '0',
        date: '01.01.2022'
    }, {
        m: 'Scientists clock the fastest interval of time in \'zeptoseconds\'',
        like: '5',
        dislike: '2',
        date: '01.08.2022'
    },
    {
        m: 'Alexey is my superhero',
        like: '30',
        dislike: '0',
        date: '18.01.2021'
    },
]

let posts = postData.map(el => {
    return  <Post message={el.m} date={el.date} like={el.like} dislike={el.dislike}/>
})

function MyPosts() {

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
