import React, {useEffect, useState} from 'react';
import style from './FormsOpener.module.css'

const FormsOpener = (props) => {
    const {mail, org, setMail, setOrg, setMailError, setOrgError} = props

    const [mailCheker, setMailChaker] = useState(false)
    const [orgCheker, setOrgChaker] = useState(false)

    const mailHandler = (e) => {
        setMail(e.target.value)
        if (!e.target.value) {
            setMailError('Поле не может быть пустым')
        } else {
            setMailError('')
        }
    }

    const orgHandler = (e) => {
        setOrg(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 10) {
            setOrgError('Не корректная длина')
        } else {
            setOrgError('')
        }
        if (!e.target.value) {
            setOrgError('Поле не может быть пустым')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'mail':
                setMailChaker(true)
                break
            case 'org':
                setOrgChaker(true)
                break
        }
    }

    return (
        <div>
            <div className={style.FormWrapper}>
                <input className={style.FormWrapper_input} onChange={e => orgHandler(e)} value={org} onBlur={e => blurHandler(e)} name='org' type='text'
                       placeholder='Наименование организации'/>
                {/*{(orgCheker && orgError) && <div style={{color:'black'}}> {console.log('Ошибка поля Доб.орг:', orgError)}  </div>}*/}
            </div>
            <div className={style.FormWrapper}>
                <input className={style.FormWrapper_input}  onChange={e => mailHandler(e)} value={mail} onBlur={e => blurHandler(e)} name='mail' type='text'
                       placeholder='Имейл'/>
                {/*{(mailCheker && mailError) && <div style={{color:'black'}}> {console.log('Ошибка поля Имеил:', mailError)}  </div>}*/}
            </div>
        </div>
    );
};

export default FormsOpener;