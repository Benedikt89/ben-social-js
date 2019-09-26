import React from 'react';
import style from './Friends.module.css';
import UserItem from "./UserItem/UserItem";
import Preloader from "../common/Preloader";


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

    let pages = [];
    for (let i = 1; i < props.pagesCount; i++) {
        pages.push(i);
    }
    let displayPages = pages.map(p => <span
        className={(props.pageNumber === p ? style.pageSelectorSelected : style.pageSelector)}
        onClick={()=>{props.selectPage(p)}}
    >{p}</span>);


    return (
        <div>
            <h2 className={style.item}>FRIENDS total {props.totalUsersCount}</h2>

            <div>
                {displayPages}
            </div>
            <div className={style.UsersList}>
                {props.isFetching ?
                    <Preloader /> :
                    <ul className={style.UserUl}>
                        {usersList}
                    </ul>
                }
            </div>
        </div>
    );
};


export default Friends;
