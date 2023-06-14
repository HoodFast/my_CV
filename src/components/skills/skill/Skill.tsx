import React from 'react';
import s from './Skill.module.scss';



type SkillsPropsType = {

    title: string
    description: string
    children?: React.ReactNode
}

export const Skill: React.FC<SkillsPropsType> = ({

                                                     title,
                                                     description,
                                                     children
                                                 }) => {
    return (
        <div className={s.skill}>
            {children}
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
}


