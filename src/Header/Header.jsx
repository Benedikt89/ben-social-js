import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.Header}>

            <div className={style.lable}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"/>
            </div>

            <div className={style.links}>
                <a>Home</a> -
                <a>Player</a>

            </div>

        </header>
    );
}

export default Header;
