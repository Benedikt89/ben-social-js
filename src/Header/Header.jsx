import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.Header}>


            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"/>
            <a href='#$'>Home</a> -
            <a href='#$'>News Feed</a> -
            <a href='#$'>Messages</a> -


        </div>
    );
}

export default Header;
