import React from 'react';
import style from './Map.module.css';
import MApIMG from '../../../img/dxtoMRCTuYU.jpg'

const Map = () => {



    return (
        <div className={style.MapImg}>
        <img src={MApIMG} width="508" height="480"/>
        </div>
    )
};

export default Map;