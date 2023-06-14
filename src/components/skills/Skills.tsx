import React from 'react';
import s from './Skills.module.scss';
import sc from '../../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";
import {Title} from "../../common/commonComponents/title/Title";
import {GithubOutlined, Html5Outlined} from "@ant-design/icons";
import {
    faChrome,
    faCss3,
    faCss3Alt,
    faGithub,
    faHtml5,
    faJs,
    faPython,
    faReact
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const Skills = () => {
    const description = 'Html5 -  последняя версия языка гипертекстовой разметки HTML, для создания веб-страниц с улучшенной функциональностью.'
    return (
        <div id='skills' className={s.skillsBlock}>
            <div className={`${sc.container}   ${s.skillsContainer}`}>
                <Title title={'My skills'}/>
                <div className={s.skills}>
                    <Skill title={'Html5'} description={description}>
                        <FontAwesomeIcon className={s.icons} icon={faHtml5}/>
                    </Skill>
                    <Skill title={'React'} description={'Описание №1'}>
                        <FontAwesomeIcon className={s.icons} icon={faReact}/>
                    </Skill>
                    <Skill title={'Github'} description={'Описание №2'}>
                        <FontAwesomeIcon className={s.icons} icon={faGithub}/>
                    </Skill>
                    <Skill title={'JavaScript'} description={'Описание №3'}>
                        <FontAwesomeIcon className={s.icons} icon={faJs}/>
                    </Skill>
                    <Skill title={'CSS'} description={'Описание №4'}>
                        <FontAwesomeIcon className={s.icons} icon={faCss3Alt}/>
                    </Skill>
                    <Skill title={'Chrome'} description={'Описание №5'}>

                        <FontAwesomeIcon className={s.icons} icon={faChrome}/>
                    </Skill>
                </div>
            </div>

        </div>
    );
}


