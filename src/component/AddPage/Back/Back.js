import React from 'react';
import {ReactComponent as LeftArrow} from "../../../svg/arrow-left_12.svg";
import style from "./Back.module.css";
import {NavLink} from "react-router-dom";

const Back = () => {
    return (
        <div className={style.BackWrapper}>
            <div className={style.icon}>
                <LeftArrow/>
            </div>
            <div className={style.Text}>
                <NavLink to='/'>Назад</NavLink>
            </div>
        </div>
    );
};

export default Back;