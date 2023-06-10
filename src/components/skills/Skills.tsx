import React from 'react';
import s from './Skills.module.scss';
import sc from '../../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";
import {Title} from "../../common/commonComponents/title/Title";
import {GithubOutlined, Html5Outlined} from "@ant-design/icons";


export const Skills = () => {
    const description = 'Html5 - это последняя версия языка гипертекстовой разметки HTML, предназначенная для создания веб-страниц с улучшенной функциональностью.'
    return (
        <div className={s.skillsBlock}>
            <div className={`${sc.container}   ${s.skillsContainer}`}>
                <Title title={'My skills'}/>
                <div className={s.skills}>
                    <Skill icon={'iconPath'} title={'Html5'} description={description} ><Html5Outlined rev={1} className={s.icons} /></Skill>
                    <Skill icon={'iconPath'} title={'React'} description={'Описание скила №1'} ><GithubOutlined rev={1} className={s.icons} /></Skill>
                    <Skill icon={'iconPath'} title={'CSS'} description={'Описание скила №2'} />
                    <Skill icon={'iconPath'} title={'CSS'} description={'Описание скила №3'} />
                    <Skill icon={'iconPath'} title={'CSS'} description={'Описание скила №4'} />
                    <Skill icon={'iconPath'} title={'CSS'} description={'Описание скила №5'} />
                </div>
            </div>

        </div>
    );
}


