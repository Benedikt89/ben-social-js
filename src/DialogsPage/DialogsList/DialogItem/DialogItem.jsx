import React from 'react';
import style from './DialogItem.module.css'
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {

    let path = "/DialogsPage/" + props.id;
    let avatar = props.avatarImg;
    let name = props.name;
    let lastMessage = props.lastMessage;

    return (
        <NavLink to={path} className={style.item}>
            <div className={style.Ava}>
                <img src={avatar}/>
            </div>

            <div className={style.Label}>
                {name}
            </div>

            <div className={style.Preview}>
                'Oh bois!!!!!!!!!!!!!'
            </div>

        </NavLink>

    );
}


export default DialogItem;
