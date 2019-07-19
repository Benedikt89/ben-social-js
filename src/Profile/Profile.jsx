import React from 'react';
import s from './Profile.module.css';
import Feed from "./News/Feed";


const Profile = () => {
    return (
        <div className={s.Profile}>

            <div className={s.Head}>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>

            <div className={s.Person}>
                <div className={s.Avatar}>
                    <img src="https://www.w3schools.com/howto/img_avatar2.png"/>

                </div>

                <div className={s.PersonStats}>
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
