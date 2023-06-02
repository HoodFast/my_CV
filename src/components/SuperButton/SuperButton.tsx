import s from './SuperButton.module.css'
import React from "react";


type ButtonPropsType = {
    titleButton: string
    disabled: boolean
    callback: () => void
}

export const SuperButton: React.FC<ButtonPropsType> = ({
                                                           titleButton,
                                                           disabled,
                                                           callback
                                                       }) => {

    return (

            <button disabled={disabled} className={s.button} onClick={callback}>{titleButton}</button>


    )
}


