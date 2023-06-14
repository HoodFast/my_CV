import React from 'react';
import s from './Works.module.scss';
import sc from '../../common/styles/Container.module.css';
import {Work} from "./work/work";
import {Title} from "../../common/commonComponents/title/Title";
import work1img from '../../assets/blog1.jpg'
import work2img from '../../assets/blog2.jpg'
import work3img from '../../assets/AnimalShelter.jpg'


export const Works = () => {
    const work1 = {
        backgroundImage: `url(${work1img})`
    }
    const work2 = {
        backgroundImage: `url(${work2img})`
    }
    const work3 = {
        backgroundImage: `url(${work3img})`
    }
    return (

        <div id="works" className={s.worksBlock}>
            <div className={`${sc.container}   ${s.worksContainer}`}>
                <Title title={'My Works'}/>
                <div className={s.works}>
                    <Work
                        name={'Social Network'}
                        style={work1}
                        title={'Учебный проект функциональной социальной сети'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
                    />
                    <Work
                        name={'ToDo List'}
                        style={work2}
                        title={'TodoList - список дел для организации работы и жизни'}

                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
                    />
                    <Work
                        name={'Animal Shelter'}
                        style={work3}
                        title={'Спасая одну жизнь вы спасаете целый мир'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
                    />

                </div>
            </div>
        </div>

    );
}


