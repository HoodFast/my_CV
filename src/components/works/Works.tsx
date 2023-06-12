import React from 'react';
import s from './Works.module.scss';
import sc from '../../common/styles/Container.module.css';
import {Work} from "./work/work";
import {Title} from "../../common/commonComponents/title/Title";
import work1img from '../../assets/blog1.jpg'
import work2img from '../../assets/blog2.jpg'


export const Works = () => {
    const work1={
        backgroundImage:`url(${work1img})`
    }
    const work2={
        backgroundImage:`url(${work2img})`
    }
    return (

        <div id="works" className={s.worksBlock}>
            <div className={`${sc.container}   ${s.worksContainer}`}>
                <Title title={'My Works'}/>
                <div className={s.works}>
                    <Work
                        disabled={false}
                        style={work1}
                        title={'10 tips for drawing with coloured pencils'}
                        titleButton={'Go  to Yandex'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
                    />
                    <Work
                        disabled={false}
                        style={work2}
                        title={'The single greatest gift to get your friend who always travels'}
                        titleButton={'Push'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
                    />
                    <Work
                        disabled={false}
                        style={work2}
                        title={'The single greatest gift to get your friend who always travels'}
                        titleButton={'Push'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
                    />

                </div>
            </div>
        </div>

    );
}


