import React from 'react';
import s from './Work.module.css';
import {SuperButton} from "../../SuperButton/SuperButton";


type WorkPropsType = {
    disabled: boolean
    image: string
    title: string
    titleButton: string
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
                <img src={image} alt=""/>
                <div className={s.buttonImg}>
                    <SuperButton titleButton={titleButton} disabled={disabled} callback={() => {
                        window.location.href = 'https://www.yandex.ru'}}/>
                </div>

            </div>

            <div className={s.descriptionBlock}>
                <h3>{title}</h3>
                <span className={s.description}>{description}</span>
                <p>
                    <a href={''}>READ MORE</a>
                </p>

            </div>

        </div>
    );
}


