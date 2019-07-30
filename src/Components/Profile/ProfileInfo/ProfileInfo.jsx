import React from 'react';
import style from './ProileInfo.module.css'


const ProfileInfo = () => {
    return (
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



    );
}


export default ProfileInfo;
