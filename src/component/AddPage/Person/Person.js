import React from 'react'
import s from './person.module.css'

const Person = (props) => {
    return (
        <div className={s.MiniPerson}>
            <div className={s.MiniImg}>
                <img className={s.Avatar}
                    src={props.url}
                    alt='нет фото'/>
            </div>
            <div className={s.Info}>
                <div className={s.Name}>{props.name}</div>
                <div className={s.Position}>{props.Position}</div>
            </div>
        </div>
    )
}

export default Person