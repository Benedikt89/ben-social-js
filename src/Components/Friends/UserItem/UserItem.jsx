import React from 'react';
import style from './UserItem.module.css'
import {NavLink} from "react-router-dom";



const UserItem = (props) => {

    let path = "/Profile/" + props.id;
    let avatar = props.user.avatarImage;

    return (
        <div className={style.item}>
            <NavLink to={path} className={style.Ava}>
                <img src={avatar}/>
            </NavLink>

            <div className={style.btnBlock}>
                {!props.user.followed?<button onClick={()=>{props.followUser(props.id)}}>
                    FOLLOW
                </button>: <button onClick={()=>{props.unFollowUser(props.id)}}>
                    UNFOLLOW
                </button>}
            </div>
            <div className={style.Label}>
                {props.user.name}
            </div>

            <div className={style.Preview}>
                    <p>age {props.user.age}</p>
            </div>
            <div className={style.Preview2}>
                <p>profession {props.user.profession}</p>
                <p>education {props.user.education}</p>
            </div>
            <div className={style.Preview3}>
                <p>birthDate {props.user.birthDate}</p>
            </div>
        </div>

    );
}


export default UserItem;
