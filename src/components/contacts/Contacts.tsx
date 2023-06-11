import s from './Contacts.module.scss'
import sc from "../../common/styles/Container.module.css";
import {SuperButton} from "../SuperButton/SuperButton";
import {ContactDescription} from "./ContactDiscription/ContactDescription";


export const Contacts = () => {
    return <div id='contacts' className={s.contactsBlock}>

        <div className={`${sc.container} ${s.contactsContainer}`}>
            <ContactDescription/>
            <div className={s.formContainer}>
                <form className={s.form}>
                    <input placeholder={'Name'} className={s.input} type="text"/>
                    <input placeholder={'Email'} className={s.input} type="text"/>
                    <textarea placeholder={'Message'} className={s.textarea}/>
                </form>
                <div className={s.button}>
                    <SuperButton titleButton={"Snd me message"} disabled={false} callback={() => {
                    }}/>
                </div>

            </div>

        </div>


    </div>

}