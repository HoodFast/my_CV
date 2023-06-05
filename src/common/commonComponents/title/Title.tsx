import React from "react";
import s from './Title.module.scss'


type CustomHeaderType = {
    title: string

}
export const Title: React.FC<CustomHeaderType> = ({title}) => {
    return <div className={s.title}>
        <h2>{title}</h2>
    </div>

}