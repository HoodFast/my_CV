import React, {useEffect, useState} from 'react';
import s from './Header.module.scss';
import {Nav} from "../nav/Nav";

export const Header = () => {
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.scrollY)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navigate = {transform: `translateY(${offsetY }px)`}
    return (
        <div  className={s.header}>
            <Nav/>
        </div>
    );
}


