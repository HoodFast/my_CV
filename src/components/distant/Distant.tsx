import s from './Distant.module.scss'
import {SuperButton} from "../SuperButton/SuperButton";
import sc from "../../common/styles/Container.module.css";
import image from '../../assets/workPoint/rabocheeMesto.jpg'


export const Distant = () => {

    const distant1 = {
        backgroundImage: `url(${image})`
    }
    return <div className={s.distant}>
        <div className={`${sc.container} ${s.distantContainer}`}>
            <div style={distant1} className={s.image}>
            </div>

            <div className={s.text}>
                <p>I Am Available For Freelancer</p>
                <SuperButton titleButton={'Contacts'} disabled={false} callback={() => {
                }}/>
            </div>
        </div>
    </div>
}