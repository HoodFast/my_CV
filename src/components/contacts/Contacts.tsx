import s from './Contacts.module.css'
import sc from "../../common/styles/Container.module.css";
import {SuperButton} from "../SuperButton/SuperButton";

export const Contacts = () => {
    return <div id='contacts' className={s.contactsBlock}>
        <div className={`${sc.container} ${s.contactsContainer}`}>
            <h3>Контакты</h3>
            <form className={s.form}>
                <input className={s.input} type="text"/>
                <input className={s.input} type="text"/>
                <textarea className={s.textarea}/>
            </form>
            <SuperButton titleButton={"ОТПРАВИТЬ"} disabled={false} callback={() => {
            }}/>
        </div>


    </div>

}