import React from 'react';
import s from './Work.module.css';
import {SuperButton} from "../../SuperButton/SuperButton";


type WorkPropsType = {
    disabled: boolean
    image: string
    title: string
    titleButton:string
    description: string
}

export const Work: React.FC<WorkPropsType> = ({
                                                  disabled,
                                                  image,
                                                  title,
                                                  titleButton,
                                                  description
                                              }) => {
    return (
        <div className={s.work}>
            <div className={s.imageContainer}>
                <SuperButton titleButton={titleButton} disabled={disabled} callback={()=>{window.location.href = 'https://www.yandex.ru'}}/>
            </div>

            <div className={s.descriptionBlock}>
                <div className={s.title}>{title}</div>
                <div className={s.description}>{description}</div>
            </div>

        </div>
    );
}


