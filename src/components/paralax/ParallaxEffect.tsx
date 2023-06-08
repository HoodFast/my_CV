import s from './Parallax.module.css'
import {Parallax, Background} from 'react-parallax';
import imgLayer1 from '../../assets/workPoint/layers/1.png'
import imgLayer2 from '../../assets/workPoint/layers/2.png'
import imgLayer3 from '../../assets/workPoint/layers/3.png'
import imgLayer4 from '../../assets/workPoint/layers/4.png'

export const Parallax = () => {
    const layer1 = {backgroundImage: `url(${imgLayer1})`}
    const layer2 = {backgroundImage: `url(${imgLayer2})`}
    const layer3 = {backgroundImage: `url(${imgLayer3})`}
    const layer4 = {backgroundImage: `url(${imgLayer4})`}

    return (
        <Parallax strength={300}>
            <Background className="custom-bg">
                <img src="http://www.fillmurray.com/500/320" alt="fill murray"/>
            </Background>
        </Parallax>
        // <div className={s.mainHeader}>
        //     <div className={s.layers}>
        //         <div className={s.layerHeader}>
        //             <div className={s.layerCaption}>My name is Andrey</div>
        //             <div className={s.layersTitle}>KUZNETSOV</div>
        //         </div>
        //         <div className={s.layer}>
        //             <div style={layer1} className={s.layer1}>_</div>
        //             <div style={layer2} className={s.layer1}>_</div>
        //             <div style={layer3} className={s.layer1}>_</div>
        //             <div style={layer4} className={s.layer1}>_</div>
        //         </div>
        //
        //     </div>
        // </div>
    )
}