import React from "react";
import s from './Title.module.scss'
import { Slide } from "react-awesome-reveal";

type CustomHeaderType = {
    title: string

}
export const Title: React.FC<CustomHeaderType> = ({title}) => {
    return <div className={s.title}>
        <Slide direction={"up"} >
            <p>{title}</p>
        </Slide>
    </div>

}