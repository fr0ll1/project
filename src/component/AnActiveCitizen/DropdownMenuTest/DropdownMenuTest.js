import React, {useState} from 'react';
import style from './DropdownMenuTest.module.css'
const DropdownMenuTest = (props) => {
    const [openClauseChecker,setOpenClauseChecker] = useState(true)
    const { id, active, onOpen } = props

    const openerHandler = () => {
        setOpenClauseChecker(!openClauseChecker)
            openClauseChecker === true ? (
                onOpen(id)
            ) : (onOpen(null))
    }

    return (
        <div >
            <div onClick={openerHandler}>
                <div className={style.title}>Title</div>
            </div>
            {
                active === id && (
                    <>
                        {props.item}
                    </>
                )
            }
        </div>
    )
};

export default DropdownMenuTest;