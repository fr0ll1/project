import React from 'react';
import style from './Person.module.css'

const Person = (props) => {
    return (
        <div className={style.MiniPerson}>
            <div className={style.MiniImg}>
                <img className={style.Avatar}
                    src={props.url}
                    alt='нет фото'/>
            </div>
            <div className={style.Info}>
                <div className={style.Name}>{props.name}</div>
                <p/>
                <div className={style.Position}>{props.Position}</div>
            </div>
        </div>
    );
};

export default Person;