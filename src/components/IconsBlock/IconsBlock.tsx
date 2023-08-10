import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "./IconsBlock.module.scss";
import {faGithub, faInstagram, faJava, faVk, faYoutube} from "@fortawesome/free-brands-svg-icons";

export const IconsBlock = () => {
    return(
        <div className={s.iconsBlock} >
           <a target={'_blank'} href={'https://github.com/HoodFast'}><FontAwesomeIcon className={s.icon} icon={faGithub}/></a>
            <a target={'_blank'}  href={'https://www.youtube.com/@ITINCUBATOR'}><FontAwesomeIcon  className={s.icon} icon={faYoutube}/></a>
           <a target={'_blank'} href={'https://vk.com/id2885291'}><FontAwesomeIcon className={s.icon} icon={faVk}/></a>
            <a target={'_blank'} href={'https://www.instagram.com/zloybaybay/'} ><FontAwesomeIcon className={s.icon} icon={faInstagram}/></a>
</div>
    )
}