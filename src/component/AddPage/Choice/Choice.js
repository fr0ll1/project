import React, {useState} from 'react';
import style from './Choice.module.css';
import {ReactComponent as Arrow} from "../../../svg/arrow.svg";

const Choice = (props) => {
    const [active, setActive] = useState(false);


    const options = ['test1', 'test2', 'test3'];

    const {isSelect, setIsSelect, setSelectError} = props

    return (
        <div className={style.dropdown}>
            <div className={style.dropdownBtn} onClick={() => {
                setActive(!active)
            }}>
                <span className={style.oneEl}>{isSelect}</span>
                {active === false ?
                    (<span className={style.twoEl}><Arrow/></span>) :
                    (<span className={style.twoEl}>top</span>)
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