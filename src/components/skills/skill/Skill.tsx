import React from 'react';
import s from './Skill.module.scss';
import {Tilt} from 'react-tilt'


type SkillsPropsType = {
    title: string
    description: string
    children?: React.ReactNode
}

const defaultOptions = {
    max:            15,
    perspective:    1000,
    scale:          1,
}

export const Skill: React.FC<SkillsPropsType> = ({
                                                     title,
                                                     description,
                                                     children
                                                 }) => {
    return (
        <Tilt className='Tilt'  options={defaultOptions}>
            <div className={s.skill}>
                <div className={s.iconsBlock}>
                    <div className={s.children}>
                        {children}
                    </div>
                    <h3 className={s.title}>{title}</h3>
                </div>
                <span className={s.description}>{description}</span>
            </div>
        </Tilt>
    );
}


