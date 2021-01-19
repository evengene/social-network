import React from "react";
import avatarGirl from "../../../avatar-girl.jpg"
import classes from "../Profile.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp, faThumbsDown} from "@fortawesome/free-solid-svg-icons";


function Post(props) {


    function clickCount() {
        console.log("clicked");

    }

    return (
        <>
            {/*one post*/}
            <div className={classes.post}>
                <img className={classes.avatar} src={avatarGirl} alt="avatar"/>
                <div>
                    <p>{props.message}</p>
                    <div className={classes.postFooter}>
                        <p><span className={classes.postTime}>{props.date}</span></p>
                        <span className="icon">{props.like} <FontAwesomeIcon icon={faThumbsUp} onClick={clickCount}/></span>
                        <span className="icon">{props.dislike} <FontAwesomeIcon icon={faThumbsDown}/></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;
