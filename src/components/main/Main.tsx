import React from 'react';
import s from './Main.module.css';
import sc  from '../../common/styles/Container.module.css';


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sc.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>
                        I am Andrey Kuznetsov
                    </h1>
                    <p>
                        Frontend developer
                    </p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
}


