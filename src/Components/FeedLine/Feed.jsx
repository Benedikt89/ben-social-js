import React from 'react';
import Post from "./Feed-line/Post";
import NewPostContainer from "./NewPost/NewPostContainer";

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

                <NewPostContainer />

                {myFeedPosts}

            </div>

        );
    };


export default Feed;
