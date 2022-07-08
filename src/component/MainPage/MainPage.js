import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './mainPage.module.css'

function MainPage (){

    return(
        <div className={s.MainPageWrapper}>
            <h1>PersonalAccount</h1>
            <div className={s.addOrg}>
                <NavLink to='/AddPage'>
                <div className={s.NavLink}>
                    Добавить организацию
                </div>
                </NavLink>
            </div>
        </div>
    )
}

export default MainPage