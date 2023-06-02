import s from './Footer.module.css'
import sc from "../../common/styles/Container.module.css";

export const Footer = () => {
    return <div className={s.footerBlock}>
        <div className={`${sc.container} ${s.footerContainer}`}>
            <h4> Andrey Kuznetsov </h4>
            <div className={s.imageBlock}>
                <img className={s.image} src="" alt="image1"/>
                <img className={s.image} src="" alt="image2"/>
                <img className={s.image} src="" alt="image3"/>
                <img className={s.image} src="" alt="image4"/>
            </div>
            <p> © 2019 Все права защищены</p>

        </div>

    </div>
}