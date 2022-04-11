import React from "react";
import style from './OpeningElement.module.css'

function Elements(props) {

    const {activeType, activeItem, setActiveItem, icon, name, arrowIcon} = props

    const openerHandler = () => {
        activeItem === activeType ?
            (setActiveItem(null)) :
            (setActiveItem(activeType))
    }

    return (
        <div className={style.FullElement}>
            <div className={style.MenuBtn} onClick={openerHandler}>
                {icon}
                {name}
                {arrowIcon(activeType)}
            </div>
            {
                activeItem === activeType &&
                <div>
                    {props.item}
                </div>
            }

        </div>
    )
}

export default Elements;