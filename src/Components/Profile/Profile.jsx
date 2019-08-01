import React from 'react';
import style from './Profile.module.css';
import Feed from "./News/Feed";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


 const Profile = (props) => {


        return (
            <div className={style.Profile}>

                <div className={style.Head}>
                    <img
                        src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                </div>

                <ProfileInfo/>

                <Feed myFeed={props.myFeed}
                      newPostText={props.newPostText}
                      textHolder={props.textHolder}
                      addNewPost={props.addNewPost}/>

            </div>
        );
    };


export default Profile;
