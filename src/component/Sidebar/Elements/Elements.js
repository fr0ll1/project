import React from "react";
import style from './Elements.module.css'


import {NavLink} from "react-router-dom";

function Elements(props) {
    return (

        <div className={style.FullElement}>
            <NavLink to={props.path}>
                <div className={style.MenuBtn}>
                    {props.icon}
                    {props.name}
                    {props.open}
                </div>
            </NavLink>
        </div>
    )
}

export default Elements;


