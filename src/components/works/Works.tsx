import React from 'react';
import s from './Works.module.css';
import sc from '../../common/styles/Container.module.css';
import {Work} from "./work/work";
import {Title} from "../../common/commonComponents/title/Title";


export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={`${sc.container}   ${s.worksContainer}`}>
                <Title title={'My Works'}/>
                <div className={s.works}>
                    <Work
                        disabled={false}
                        image={'https://gtom.info/jeffrey/assets/images/blog1.jpg'}
                        title={'10 tips for drawing with coloured pencils'}
                        titleButton={'Перейти на яндекс'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
                    />
                    <Work
                        disabled={false}
                        image={'https://gtom.info/jeffrey/assets/images/blog2.jpg'}
                        title={'The single greatest gift to get your friend who always travels'}
                        titleButton={'push'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
                    />
                    {/*<Work*/}
                    {/*    disabled={true}*/}
                    {/*    image={''}*/}
                    {/*    title={'Название третьего проекта'}*/}
                    {/*    titleButton={'DISABLED'}*/}
                    {/*    description={'Описание проекта номер три'}*/}
                    {/*/>*/}
                    {/*<Work*/}
                    {/*    disabled={true}*/}
                    {/*    image={''}*/}
                    {/*    title={'Название четвертого проекта'}*/}
                    {/*    titleButton={'DISABLED'}*/}
                    {/*    description={'Описание проекта номер четыре'}*/}
                    {/*/>*/}
                </div>

            </div>
        </div>

    );
}


