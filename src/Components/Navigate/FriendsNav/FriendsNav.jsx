import {NavLink} from "react-router-dom";
import React from "react";
import style from "./FriendsNav.module.css"

const FriendsNav = (props) => {


    // let path = "/DialogsPage/" + props.id;
    // let avatar = props.users.avatarImage;


    return (
        <div className={style.friendsBlock}>
            <NavLink to="/Profile/userid" className={style.ava}>

                    <img src={props.friends[0].avatarImage}/>

            </NavLink>

            <NavLink to="/Profile/userid" className={style.ava}>

                <img src={props.friends[1].avatarImage}/>

            </NavLink>

            <NavLink to="/Profile/userid" className={style.ava}>

                <img src={props.friends[2].avatarImage}/>


            </NavLink>
        </div>
    );
}

export default FriendsNav;