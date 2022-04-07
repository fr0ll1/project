import React from 'react';
import {ReactComponent as LeftArrow} from "../../../svg/arrow-left_12.svg";
import style from "./Back.module.css";
import {NavLink} from "react-router-dom";

const Back = () => {
    return (
            <div className={style.container}>
            <NavLink to='/'>
                <div className={style.BackWrapper}>
                <div className={style.icon}>
                    <LeftArrow/>
                </div>
                <p className={style.Text}>
                    Назад
                </p>
                </div>
            </NavLink>
            </div>
    );
};

export default Back;