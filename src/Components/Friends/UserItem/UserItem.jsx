import React from 'react';
import style from './UserItem.module.css'
import {NavLink} from "react-router-dom";
import avatarImg from './../../../asserts/images/avatar-f.png'


const UserItem = (props) => {

    let path = "/Profile/" + props.id;
    let userPhoto = () => {
        if (props.user.photos === undefined) {
            return (avatarImg);
        } else if (props.user.photos.small === null) {
            return (avatarImg);
        } else {
            return props.user.photos.small;
        }
    };

    return (
        <div className={style.item}>
            <NavLink to={path} className={style.Ava}>
                <img src={userPhoto()}/>
            </NavLink>

            <div className={style.btnBlock}>
                {!props.user.followed ? <button onClick={() => {
                    props.followUser(props.id)
                }}>
                    FOLLOW
                </button> : <button onClick={() => {
                    props.unFollowUser(props.id)
                }}>
                    UNFOLLOW
                </button>}
            </div>
            <div className={style.Label}>
                {props.user.name !== null ? props.user.name : 'noname'}
            </div>

            <div className={style.Preview}>
                <p>profession {props.user.id !== null ? props.user.id : 'noId'}</p>
            </div>
            <div className={style.Preview2}>
                <p>{props.user.status !== null ? props.user.status : 'nostatus'}</p>
            </div>
        </div>

    );
}


export default UserItem;
