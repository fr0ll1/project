import React from "react";
import style from './DropDawnElement.module.css'


import {NavLink} from "react-router-dom";

function DropDawnElement(props) {
    return (
        <li>
            <div className={style.FullElement}>
                <NavLink to={props.path} className={style.MenuBtn}>
                    {props.icon}
                    {props.name}
                    {props.open}
                </NavLink>
            </div>
        </li>
    )
}

export default DropDawnElement;