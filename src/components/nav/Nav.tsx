import React from 'react';
import s from './Nav.module.scss';
import {Link} from "react-scroll";



export const Nav = () => {
    const offset = -100
    return (
        <div className={s.nav}>
            <Link to="main" spy={true} smooth={true} activeClass={s.active}>Main</Link>
            <Link to="skills" spy={true} smooth={true} activeClass={s.active} offset={offset}>Skills</Link>
            <Link to="works" spy={true} smooth={true} activeClass={s.active} offset={offset}>Projects</Link>
            <Link to="contacts" spy={true} smooth={true} activeClass={s.active} offset={offset} >Contacts</Link>
        </div>
    );
}


