import React from 'react';
import style from './ProileInfo.module.css'
import avatarImg from './../../../asserts/images/avatar-f.png'


const ProfileInfo = (props) => {

    let avatar = avatarImg;
    if (props.profile.photos !== undefined) {
        if (props.profile.photos.large !== null) {
            avatar = props.profile.photos.large;
        } else if (props.profile.photos.small !== null){
            avatar = props.profile.photos.small;
        }
    }

    return (
        <div className={style.Person}>
            <div className={style.Avatar}>
                <img src={avatar}/>

            </div>

            <div className={style.PersonStats}>
            <p>Profile Information</p>
            <p>{props.profile.fullName !== null ? props.profile.fullName : 'fullName'}</p>
            <p>{props.profile.aboutMe !== null ? props.profile.aboutMe : 'about-me'}</p>
            <p>{props.profile.userId !== null ? props.profile.userId : 'userId'}</p>
        </div>
        </div>



    );
}


export default ProfileInfo;
