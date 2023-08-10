import s from './Distant.module.scss'
import {SuperButton} from "../SuperButton/SuperButton";
import sc from "../../common/styles/Container.module.css";
import image from '../../assets/workPoint/rabocheeMesto.jpg'
import {Tilt} from 'react-tilt'
import {Link} from "react-scroll";
import React from "react";
import {Fade} from "react-awesome-reveal";

const defaultOptions = {
    max:            5,
    perspective:    1000,
    scale:          1,
}



export const Distant = () => {

    const distant1 = {
        backgroundImage: `url(${image})`
    }
    return <div className={s.distant}>
        <Fade  cascade={true} damping={0.05} delay={-2}>
        <div className={`${sc.container} ${s.distantContainer}`}>
            <Tilt options={defaultOptions}>
                <div style={distant1} className={s.image}></div>
            </Tilt>


            <div className={s.text}>
                <p>I Am Available For Freelancer</p>

                    <Link to="contacts" spy={true} smooth={true}>
                        <SuperButton titleButton={'Contacts'} disabled={false} callback={() => {
                        }}/>
                    </Link>



            </div>
        </div>
        </Fade>
    </div>
}