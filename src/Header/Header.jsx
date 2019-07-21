import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.Header}>


            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"/>
            <a>Home</a> -
            <a>News Feed</a> -
            <a>Messages</a> -


        </div>
    );
}

export default Header;
