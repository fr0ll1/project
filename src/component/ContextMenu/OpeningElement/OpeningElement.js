import React, {useState} from "react";
import style from './OpeningElement.module.css'

function Elements(props) {
    const [openClauseChecker,setOpenClauseChecker] = useState(true)

    const { activeType, active, onOpen } = props

    const openerHandler = () => {
        setOpenClauseChecker(!openClauseChecker)
        openClauseChecker === true ? (
            onOpen(activeType)
        ) : (onOpen(null))
    }


    return (
        <li >
            <div className={style.FullElement}>
            <div className={style.MenuBtn} onClick={openerHandler}>
                {props.icon}
                {props.name}
                {active === activeType ? props.close : props.open}
            </div>
                {
                    active === activeType &&
                    <div>
                        {props.item}
                    </div>
                }

        </div>
        </li>
    )
}

export default Elements;