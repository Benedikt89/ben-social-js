import React from 'react';
import style from './Feed.module.css'
import Post from "./Feed-line/Post";
import NewPost from "./NewPost/NewPost";

    const Feed = (props) => {

        let myFeedPosts = props.myFeed.map(
            post => <Post
                message={post.content}
                avatar={post.avatarImage}
                likeCount={post.likeCount}
            />
        );

        return (


            <div>
                <h4>my posts</h4>

                <NewPost addNewPost={props.addNewPost}/>

                {myFeedPosts}

            </div>

        );
    };


export default Feed;
