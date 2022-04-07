import React from "react";
import {NavLink} from "react-router-dom";
import style from "./MainPage.module.css"

function MainPage (){

    return(
        <div className={style.MainPageWrapper}>
            <h1>PersonalAccount</h1>
            <div className={style.addOrg}>
                <NavLink to='/AddPage'>
                <div className={style.NavLink}>
                    Добавить организацию
                </div>
                </NavLink>
            </div>
        </div>
    )
}

export default MainPage;