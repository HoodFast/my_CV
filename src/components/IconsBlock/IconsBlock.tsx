import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "./IconsBlock.module.scss";
import {faGithub, faInstagram, faJava, faVk, faYoutube} from "@fortawesome/free-brands-svg-icons";

export const IconsBlock = () => {
    return(
        <div className={s.iconsBlock} >
            <FontAwesomeIcon className={s.icon} icon={faGithub}/>
            <FontAwesomeIcon className={s.icon} icon={faYoutube}/>
            <FontAwesomeIcon className={s.icon} icon={faVk}/>
            <FontAwesomeIcon className={s.icon} icon={faInstagram}/>
        </div>
    )
}