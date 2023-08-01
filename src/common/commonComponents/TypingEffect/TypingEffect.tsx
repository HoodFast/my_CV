import {FC, useEffect, useState} from "react";
import s from './TypingEffect.module.scss'

type PropsType = {
    text: string
}

export const TypingEffect: FC<PropsType> = ({text}) => {
    let fulltext = text
    const [x, setX] = useState(0)
    const [cursor, setCursor] = useState('|')
    useEffect(() => {
        let delay = randomDelay(20, 600)
        setTimeout(() => {
            if (x == fulltext.length - 1) {
                setCursor('')
            }
            if (x < fulltext.length) {
                setX(x + 1)
            }
        }, delay)
    })

    return <div className={s.typingEffect}>

        <h2 style={{color: "white"}}>
            {fulltext.slice(0, x)}<span className={s.blink}>{cursor}</span>
        </h2>
    </div>
}

function randomDelay(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
}






