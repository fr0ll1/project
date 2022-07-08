import React, {useState} from 'react'
import s from './choice.module.css'
import {ReactComponent as ArrowTop} from '../../../svg/arrow.svg'
import {ReactComponent as ArrowBot} from '../../../svg/arrow-up_16.svg'



const Choice = (props) => {
    const [active, setActive] = useState(false)


    const options = ['Тест1', 'Тест2', 'Тест3']

    const {isSelect, setIsSelect, setSelectError} = props

    return (
        <div className={s.dropdown}>
            <div className={s.dropdownBtn} onClick={() => {
                setActive(!active)
            }}>
                <span className={s.oneEl}>{isSelect}</span>
                {active === false ?
                    (<span className={s.twoEl}><ArrowTop/></span>) :
                    (<span className={s.twoEl}><ArrowBot color='blue'/></span>)
                }
            </div>
            {active && (
                <div className={s.dropdownContent}>
                    {options.map(options => (
                        <div className={s.dropdownItem} onClick={(e) => {
                            setIsSelect(options)
                            setActive(false)
                            setSelectError('')
                        }}>
                            {options} </div>
                    ))}

                </div>
            )}

        </div>

    )

}

export default Choice