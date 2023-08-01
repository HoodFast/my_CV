import React, {useEffect, useState} from 'react';
import s from './Main.module.scss';
import sc from '../../common/styles/Container.module.css'
import {useResize} from "../../utils/useResize/useResize";
import {createFromIconfontCN, TwitterOutlined} from "@ant-design/icons";
import {Space} from "antd";
import IconFont from '@ant-design/icons/lib/components/IconFont';
import imgLayer1 from '../../assets/IMG_20200601_230751.png';
import {IconsBlock} from "../IconsBlock/IconsBlock";
import {TypingEffect} from "../../common/commonComponents/TypingEffect/TypingEffect";










export const Main: React.FC = () => {

    const {width, isScreenSm, isScreenMd, isScreenLg, isScreenXl} = useResize();
    const buttonTitle = isScreenMd ? 'Connect with me' :
        <TwitterOutlined rev={1} style={{fontSize: '30px', color: '#08c'}}/>
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
    const image1 = {backgroundImage: `url(${imgLayer1})`}
    return (

        <div id='main' className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.textContainer}>
                    <div className={s.text}>
                        <h1>
                            I am Andrey {isScreenSm && 'Kuznetsov'}
                        </h1>

                        <TypingEffect text={'Frontend Developer.'}/>
                        <p>
                            Front-end программирование на Java-script – это интересная и динамичная профессия, которая
                            требует от разработчика постоянного обучения и совершенствования.
                        </p>
                        <button>{buttonTitle}</button>
                    </div>
                    <Space className={s.icons}>
                        <IconFont className={s.icon}  type="icon-tuichu"/>
                        <IconFont className={s.icon}  type="icon-facebook"/>
                        <IconFont className={s.icon}  type="icon-twitter"/>
                    </Space>
                </div>


                {/*<div className={s.containerPhoto}>*/}
                <div  className={s.photo}>
                    <IconsBlock/>
                    <div style={image1} className={s.imageStyle} >

                    </div>
                </div>
                {/*</div>*/}

            </div>
        </div>

    );
}


