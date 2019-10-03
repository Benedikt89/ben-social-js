import {NavLink} from "react-router-dom";
import React from "react";
import style from "./FriendsNav.module.css"
import avatarImg from './../../../asserts/images/avatar-f.png'

const FriendsNav = (props) => {

    return (
        <div className={style.friendsBlock}>

            <div className={style.ava}>
            <NavLink to="/Profile/2">
                    <img src={ avatarImg }/>
            </NavLink>
            </div>

            <div className={style.ava}>
            <NavLink to="/Profile/1572">
                <img src={ avatarImg }/>
            </NavLink>
            </div>

            <div className={style.ava}>
            <NavLink to="/Profile/1571">
                <img src={ avatarImg }/>
            </NavLink>
            </div>
        </div>
    );
}

export default FriendsNav;