import React from 'react';
import style from './Profile.module.css';
import Feed from "./News/Feed";


const Profile = () => {
    return (
        <div className={style.Profile}>

            <div className={style.Head}>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>

            <div className={style.Person}>
                <div className={style.Avatar}>
                    <img src="https://www.w3schools.com/howto/img_avatar2.png"/>

                </div>

                <div className={style.PersonStats}>
                    <p>Profile Information</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                </div>
            </div>

            <Feed/>

        </div>
    );
}


export default Profile;
