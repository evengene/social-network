import React from "react";
import MyPosts from "./sections/Posts";
import NewPost from "./sections/NewPost";
import ProfileInfo from "./sections/ProfileInfo";

function Profile({postData, addPost}) {

    return (
        <>
            <ProfileInfo/>
            <NewPost addPost={addPost}/>
            <MyPosts postData={postData}/>
        </>
    )
}

export default Profile;
