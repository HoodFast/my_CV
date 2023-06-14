import React from 'react';
import s from './Work.module.scss';
import {SuperButton} from "../../SuperButton/SuperButton";


type WorkPropsType = {
    name:string
    style: any
    title: string
    description: string
}

export const Work: React.FC<WorkPropsType> = ({
                                                  name,
                                                  style,
                                                  title,
                                                  description
                                              }) => {
    return (
        <div className={s.work}>
            <div style={style} className={s.imageContainer}>
                <div  className={s.buttonImg}>
                    {/*<SuperButton titleButton={titleButton} disabled={disabled} callback={() => {*/}
                    {/*    window.location.href = 'https://www.yandex.ru'}}/>*/}
                </div>

            </div>
            <div className={s.descriptionBlock}>
                <span className={s.notes}>{name}</span>
                <h3>{title}</h3>
                <span className={s.description}>{description}</span>
                <p>
                    <a href={''}>READ MORE</a>
                </p>

            </div>
        </div>
    );
}


