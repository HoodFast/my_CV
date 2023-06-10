import s from './ParallaxEffect.module.scss'
import imgLayer1 from '../../assets/workPoint/layers/2.png'
import imgLayer2 from '../../assets/workPoint/layers/3.png'
import imgLayer5 from '../../assets/workPoint/layers/5.png'
import imgLayer from '../../assets/workPoint/rabocheeMesto2.jpg'

import {useEffect, useState} from "react";
import { Parallax } from 'react-parallax';
import {Main} from "../main/Main";

export const ParallaxEffect = () => {
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.scrollY)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const layer1 = {backgroundImage: `url(${imgLayer1})`}
    const layer2 = {backgroundImage: `url(${imgLayer2})`, transform: `translateY(${offsetY * 0.05}px)`}
    const layer5 = {backgroundImage: `url(${imgLayer5})`, transform: `translateY(${offsetY * 0.2}px)`}
    const text = {transform: `translateY(${offsetY * 0.15}px)`}
    return (

        <Parallax className={s.layers} blur={10} bgImage={imgLayer}  strength={300}>
            <Main/>
        </Parallax>
        // <>
        //     <div className={s.mainHeader}>
        //         <div className={s.layers}>
        //             <div className={s.layerHeader}>
        //                 <div style={text} className={s.layerCaption}>My name is Andrey</div>
        //                 <div className={s.layersTitle}>KUZNETSOV</div>
        //             </div>
        //             <div className={s.layer}>
        //                 <div style={layer5} className={s.layer1}>_</div>
        //                 <div style={layer2} className={s.layer1}>_</div>
        //                 <div style={layer1} className={s.layer1}>_</div>
        //             </div>
        //         </div>
        //     </div>
        // </>

)
}