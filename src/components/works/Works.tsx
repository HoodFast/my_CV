import React from 'react';
import s from './Works.module.css';
import sc from '../../common/styles/Container.module.css';
import {Work} from "./work/work";
import {CustomHeader} from "../CastomHeader/CustomHeader";


export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={`${sc.container}   ${s.worksContainer}`}>
                <CustomHeader title={'My Works'}/>
                <div className={s.works}>
                    <Work
                        disabled={false}
                        image={''}
                        title={'Название первого проекта'}
                        titleButton={'Перейти на яндекс'}
                        description={'Описание проекта номер один и тут типо какое то описание что бы посмотреть как меняется высота блока в зависимости от колличества текста'}
                    />
                    <Work
                        disabled={true}
                        image={''}
                        title={'Название второго проекта'}
                        titleButton={'DISABLED'}
                        description={'Описание проекта номер два'}
                    />
                    <Work
                        disabled={true}
                        image={''}
                        title={'Название третьего проекта'}
                        titleButton={'DISABLED'}
                        description={'Описание проекта номер три'}
                    />
                    <Work
                        disabled={true}
                        image={''}
                        title={'Название четвертого проекта'}
                        titleButton={'DISABLED'}
                        description={'Описание проекта номер четыре'}
                    />
                </div>

            </div>
        </div>

    );
}


