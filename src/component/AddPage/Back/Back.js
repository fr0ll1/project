import React from 'react'
import {ReactComponent as LeftArrow} from '../../../svg/arrow-left_12.svg'
import s from './back.module.css'
import {NavLink} from 'react-router-dom'

const Back = () => {
    return (
            <div className={s.container}>
            <NavLink to='/'>
                <div className={s.BackWrapper}>
                <div className={s.icon}>
                    <LeftArrow/>
                </div>
                <p className={s.Text}>
                    Назад
                </p>
                </div>
            </NavLink>
            </div>
    )
}

export default Back