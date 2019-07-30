import React from 'react';
import s from './Footer.module.css'

const Footer = (props) => {
    return (
        <footer className={s.footer}>
            <div>
                <a href='#$'>Rights</a> -
                <a href='#$'>Contats</a> -
            </div>
        </footer>
    );
};

export default Footer;
