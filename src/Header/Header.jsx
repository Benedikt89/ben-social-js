import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.Header}>

            <div className={s.lable}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"/>
            </div>

            <div className={s.links}>
                <a>Home</a> -
                <a>Player</a> -
                <a>Friends</a> -
            </div>

        </header>
    );
}

export default Header;
