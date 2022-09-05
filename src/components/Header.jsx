import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
           <p className={style.text}>TO DO</p>
        </div>
    );
};

export default Header;