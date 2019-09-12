import React from 'react';
import style from './NewPost.module.css'


const NewPost = (props) => {

    let onInput = (e) => {
        props.onPostChange(e.target.value);
    };

    
    return (

            <div className={style.newPost}>

                <div className={style.avatar}>
                <img src='https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1'/>
                </div>

                <textarea className={style.text}
                          onChange={onInput}
                          value={props.newPostText}/>

                <div className={style.button}>
                <button onClick={ props.addPost } >Post</button>
                </div>

            </div>

    );
}


export default NewPost;
