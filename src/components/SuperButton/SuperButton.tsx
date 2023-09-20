import s from './SuperButton.module.scss'
import React, {ComponentPropsWithoutRef,ElementType} from "react";



type ButtonPropsType<T extends ElementType = 'button'> = {
    titleButton: string
} & ComponentPropsWithoutRef<T>

export const SuperButton=<T extends ElementType = 'button'> (props:ButtonPropsType<T> & Omit<ComponentPropsWithoutRef<T>,keyof ButtonPropsType<T>>

                                                       ) => {
    const {titleButton, ...rest}=props

    return (
        <button className={s.button} {...rest}>{titleButton}</button>
    )
}


