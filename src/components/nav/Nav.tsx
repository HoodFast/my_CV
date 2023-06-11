import React, {useState} from 'react';
import s from './Nav.module.scss';


export const Nav = () => {
    const [active,setActive]=useState('main')
    const handleClickScroll = (name:string) => {
        const element = document.getElementById(name);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
            setActive(name)
        }


    };
    return (
        <div className={s.nav}>
            <p onClick={()=>handleClickScroll('main')} className={active==='main'?s.active:''}>Main</p>
            <p onClick={()=>handleClickScroll('skills')} className={active==='skills'?s.active:''}>Skills</p>
            <p onClick={()=>handleClickScroll('works')} className={active==='works'?s.active:''}>Projects</p>
            <p onClick={()=>handleClickScroll('contacts')} className={active==='contacts'?s.active:''}>Contacts</p>
        </div>
    );
}


