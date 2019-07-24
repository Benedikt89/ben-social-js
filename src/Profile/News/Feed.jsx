import React from 'react';
import s from './Feed.module.css'
import Post from "./Feed-line/Post";
import NewPost from "./NewPost/NewPost";


const Feed = () => {
    return (


                <div>
                    my posts

                    <NewPost/>

                    <Post message={"OMG1111"} likeCount={10} />
                    <Post message={"OMG NOOOOOOOOOO11"} likeCount={5}/>
                    <Post/>
                    <Post/>

                </div>

    );
}


export default Feed;
