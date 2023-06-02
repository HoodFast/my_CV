import s from "./CustomHeader.module.css";
import React from "react";


type CustomHeaderType = {
    title:string
}
export const CustomHeader:React.FC<CustomHeaderType> = ({title}) => {
    return (
        <div className={s.title}>
            <h2 >{title}</h2>
        </div>
    )
}