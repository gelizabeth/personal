import React, {useEffect, useState} from 'react';
import './css/Header.css';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header() {
// const pathName = location.pathname;
let location = useLocation();

useEffect(() => {
    console.log(location.pathname);
  }, []);

    return (
        <div className="header">
        <br/>
            <h1 className="header__title">Hi, I'm <strong>Yelyzaveta Huivan</strong>, a web developer based in Bilbao, Spain</h1>
            <div className="header__nav">
                <Link to="/about"className={location.pathname==="/about" ? "header__navLink active": "header__navLink"} >About</Link>
                <Link to="/projects"className={location.pathname==="/projects" ? "header__navLink active": "header__navLink"}>Projects</Link>
                <Link to="/contact"className={location.pathname==="/contact" ? "header__navLink active": "header__navLink"}>Contact</Link>
            </div>
        </div>
    )
}

export default Header;
