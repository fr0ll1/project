import React, {useState} from 'react';
import style from './Choice.module.css';
import {ReactComponent as ArrowTop} from "../../../svg/arrow.svg";
import {ReactComponent as ArrowBot} from "../../../svg/arrow-up_16.svg";



const Choice = (props) => {
    const [active, setActive] = useState(false);


    const options = ['Тест1', 'Тест2', 'Тест3'];

    const {isSelect, setIsSelect, setSelectError} = props

    return (
        <div className={style.dropdown}>
            <div className={style.dropdownBtn} onClick={() => {
                setActive(!active)
            }}>
                <span className={style.oneEl}>{isSelect}</span>
                {active === false ?
                    (<span className={style.twoEl}><ArrowTop/></span>) :
                    (<span className={style.twoEl}><ArrowBot color='blue'/></span>)
                }
            </div>
            {active && (
                <div className={style.dropdownContent}>
                    {options.map(options => (
                        <div className={style.dropdownItem} onClick={(e) => {
                            setIsSelect(options)
                            setActive(false)
                            setSelectError('')
                        }}>
                            {options} </div>
                    ))}

                </div>
            )}

        </div>

    );

};

export default Choice;