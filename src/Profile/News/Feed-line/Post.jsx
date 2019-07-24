import React from 'react';
import style from './Post.module.css'


const Post = (props) => {

    // const likeCount = this.props.likeCount;

    return (

            <div className={style.item}>
                <img src='https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1'/>
                {props.message}
                <div>
                <span>likes {props.likeCount}</span>
                </div>
            </div>



    );
}


export default Post;
