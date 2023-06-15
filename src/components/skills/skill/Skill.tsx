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
            <div className={s.iconsBlock}>
                <div className={s.children}>
                    {children}
                </div>

                <h3 className={s.title}>{title}</h3>
            </div>

            <span className={s.description}>{description}</span>
        </div>
    );
}


