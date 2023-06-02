import s from './Distant.module.css'
import {SuperButton} from "../SuperButton/SuperButton";
import sc from "../../common/styles/Container.module.css";


export const Distant = () => {
    return <div className={s.distant}>
        <div className={`${sc.container} ${s.distantContainer}`}>
            <h2>Расссмотрю варианты удаленной работы</h2>
            <SuperButton titleButton={'Нанять меня'} disabled={false} callback={()=>{}}/>
        </div>
    </div>
}