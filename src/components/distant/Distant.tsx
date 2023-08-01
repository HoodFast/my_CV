import s from './Distant.module.scss'
import {SuperButton} from "../SuperButton/SuperButton";
import sc from "../../common/styles/Container.module.css";
import image from '../../assets/workPoint/rabocheeMesto.jpg'
import {Tilt} from 'react-tilt'

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
        <div className={`${sc.container} ${s.distantContainer}`}>
            <Tilt options={defaultOptions}>
                <div style={distant1} className={s.image}></div>
            </Tilt>


            <div className={s.text}>
                <p>I Am Available For Freelancer</p>
                <SuperButton titleButton={'Contacts'} disabled={false} callback={() => {
                }}/>
            </div>
        </div>
    </div>
}