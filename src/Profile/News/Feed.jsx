import React from 'react';
import s from './Feed.module.css'
import Post from "./Feed-line/Post";
import NewPost from "./NewPost/NewPost";


const Feed = () => {
    return (


                <div>
                    my posts

                    <NewPost/>

                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>

                </div>

    );
}


export default Feed;
