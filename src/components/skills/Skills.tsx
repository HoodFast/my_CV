import React from 'react';
import s from './Skills.module.css';
import sc from '../../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";
import {Title} from "../../common/commonComponents/title/Title";


export const Skills = () => {
    const description = 'Описание навыка Описание навыка Описание навыка Описание навыка Описание навыка Описание навыка Описание навыка Описание навыка Описание навыка Описание навыка '
    return (
        <div className={s.skillsBlock}>
            <div className={`${sc.container}   ${s.skillsContainer}`}>
                <Title title={'My skills'}/>
                <div className={s.skills}>
                    <Skill icon={'iconPath'} title={'JS'} description={description} />
                    <Skill icon={'iconPath'} title={'React'} description={'Описание скила №1'} />
                    <Skill icon={'iconPath'} title={'CSS'} description={'Описание скила №2'} />
                    <Skill icon={'iconPath'} title={'CSS'} description={'Описание скила №3'} />
                    <Skill icon={'iconPath'} title={'CSS'} description={'Описание скила №4'} />
                    <Skill icon={'iconPath'} title={'CSS'} description={'Описание скила №5'} />
                </div>
            </div>

        </div>
    );
}


