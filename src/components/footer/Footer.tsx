import s from './Footer.module.scss'
import sc from "../../common/styles/Container.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faJava, faVk, faYoutube} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return <div className={s.footerBlock}>
        <div className={`${sc.container} ${s.footerContainer}`}>
            <h4> Andrey Kuznetsov </h4>
            <div className={s.imageBlock}>


                <FontAwesomeIcon className={s.icons} icon={faJava}/>
                <FontAwesomeIcon className={s.icons} icon={faYoutube}/>
                <FontAwesomeIcon className={s.icons} icon={faVk}/>
                <FontAwesomeIcon className={s.icons} icon={faInstagram}/>
                {/*<img className={s.image} src="" alt="image1"/>*/}
                {/*<img className={s.image} src="" alt="image2"/>*/}
                {/*<img className={s.image} src="" alt="image3"/>*/}
                {/*<img className={s.image} src="" alt="image4"/>*/}
            </div>
            <p> © 2019 Все права защищены</p>

        </div>

    </div>
}