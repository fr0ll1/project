import React from 'react'
import s from './dropDawnElement.module.css'
import {NavLink} from 'react-router-dom'

function DropDawnElement(props) {
    return (

        <div className={s.FullElement}>
            <NavLink to={props.path}>
                <div className={s.MenuBtn}>
                    {props.icon}
                    {props.name}
                    {props.open}
                </div>
            </NavLink>
        </div>

    )
}

export default DropDawnElement