import React,{useState} from "react";
import {NavLink} from "react-router-dom";
import style from "./MainPage.module.css"

function MainPage (){
    const [counter, setCounter] = useState(0)
    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        setCounter(counter-1)
    }
    return(
        <div className={style.MainPageWrapper}>
            <h1>PersonalAccount</h1>
            <button >
                <NavLink to='/AddPage' className={style.AddOrg}> Добавить организацию </NavLink>
            </button>
            <div className={style.counter}>
                <h3>Счётчик:{counter}</h3>
                <button onClick={increment} className={style.add}>Добавить</button>
                <button onClick={decrement} className={style.del}>Убрать</button>
            </div>

        </div>
    )
}

export default MainPage;