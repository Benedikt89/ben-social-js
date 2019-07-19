import React from 'react';
import s from './NewPost.module.css'


const NewPost = () => {
    return (


            <div className={s.NewPost}>
                <img src='https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1'/>

                <textarea></textarea>
                <button>Post</button>

            </div>

    );
}


export default NewPost;
