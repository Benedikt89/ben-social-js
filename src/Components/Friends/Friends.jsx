import React from 'react';
import style from './Friends.module.css';
import UserItem from "./UserItem/UserItem";


const Friends = (props) => {
    let usersList = props.users.map(u =>
        <li>
            <UserItem
                id={u.id}
                user={u}
                followUser={props.followUser}
                unFollowUser={props.unFollowUser}
            />
        </li>);

    return (
        <div>
            <h2 className={style.item}>FRIENDS</h2>

            <div className={style.UsersList}>

                <ul className={style.UserUl}>
                    {usersList}
                </ul>

            </div>
        </div>
    );
}


export default Friends;
