import s from './ContactDescription.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const ContactDescription = () => {
    // @ts-ignore
    return <div className={s.descriptionContainer}>
        {/*@ts-ignore*/}
        <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
        <span>Get in touch !</span>
        <h2>Contact us for a quote, help to join the team</h2>

        <div className={s.item}>
            <h4>Mail</h4>
            <p>rabota-trassa@mail.ru</p>
        </div>
        <div className={s.item}>
            <h4>Address</h4>
            <p>Russian Federation</p>
        </div>
        <div className={s.item}>
            <h4>Phone</h4>
            <p>8-800-8000-700</p>


        </div>

    </div>
}