import React from "react";
import MyPosts from "./sections/Posts";
import NewPost from "./sections/NewPost";
import ProfileInfo from "./sections/ProfileInfo";

function Profile() {

    return (
        <>
            <ProfileInfo/>
            <NewPost/>
            <MyPosts />
        </>
    )
}

export default Profile;
