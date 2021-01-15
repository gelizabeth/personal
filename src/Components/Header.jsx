import React from 'react';
import './css/Header.css';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Cv from './cv';

function Header() {

let location = useLocation();


    return (
        <div className="header">
        <br/>
            <h1 className="header__title">Hi, I'm <strong>Yelyzaveta Huivan</strong>, a software engineer based in Bilbao, Spain</h1>
            <Cv className="download__button header__button"/>
            <div className="header__nav">
                <Link to="/about"className={location.pathname==="/about" ? "header__navLink active": "header__navLink"} >About</Link>
                <Link to="/projects"className={location.pathname==="/projects" ? "header__navLink active": "header__navLink"}>Selected_projects</Link>
                <Link to="/contact"className={location.pathname==="/contact" ? "header__navLink active": "header__navLink"}>Contact</Link>
            </div>
        </div>
    )
}

export default Header;
