import React from 'react';
import s from './Skill.module.scss';



type SkillsPropsType = {
    icon: string
    title: string
    description: string
    children?: React.ReactNode
}

export const Skill: React.FC<SkillsPropsType> = ({
                                                     icon,
                                                     title,
                                                     description,
                                                     children
                                                 }) => {
    return (
        <div className={s.skill}>
            {children}
            {/*<img className={s.icon} src={icon} alt="skill icon"/>*/}
            <h3 className={s.title}>{title}</h3>

            <span className={s.description}>{description}</span>


        </div>
    );
}


