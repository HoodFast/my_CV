import React from 'react';
import s from './Skill.module.css';



type SkillsPropsType = {
    icon: string
    title: string
    description: string
}

export const Skill: React.FC<SkillsPropsType> = ({
                                                     icon,
                                                     title,
                                                     description
                                                 }) => {
    return (
        <div className={s.skill}>
            <img className={s.icon} src={icon} alt="skill icon"/>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
}


