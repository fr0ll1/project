import React, {useEffect, useState} from 'react';
import style from './Dash.module.css'

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [lengthError, setLengthError] = useState(false)
    const [mailError, setMailError] = useState(false)
    const [inputValid, setInputValid] = useState(true)


        useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setLengthError(true) : setLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'isEmail':
                    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    re.test(String(value).toLowerCase()) ? setMailError(false) : setMailError(true)
                    break

            }
        }
    }, [value])

    useEffect(()=>{
        if(isEmpty || lengthError || mailError){
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    },[isEmpty,lengthError, mailError])

    return {
        isEmpty,
        lengthError,
        mailError,
        inputValid
    }


}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isCheck, setCheck] = useState(false)
    const valid = useValidation(value, validations)
    
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setCheck(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isCheck,
        ...valid
    }
}

const Dash = () => {
    const email = useInput('', {isEmpty: true, minLength: 3})
    const org = useInput('', {isEmpty: true, minLength: 5})
    const [inputEmail,setInputEmail] = useState('');
    const [inputOrg,setInputOrg] = useState('')

    const handlerClick = () => {
        setInputEmail(email.value)
        setInputOrg(org.value)
        console.log('Имеил:', inputEmail)
        console.log('Наименование организации:', inputOrg)
        setInputEmail('')
        setInputOrg('')
    }

    return (
        <div>
            <div className={style.DashWrapper}>
                <div className={style.FormWrapper}>
                    {(email.isCheck && email.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
                    {(email.isCheck && email.lengthError) && <div style={{color: 'red'}}>Минимум 3 символа</div>}
                    {(email.isCheck && email.mailError) && <div style={{color: 'red'}}>Не верный формат логина</div>}

                    <form className={style.testInput}>
                        <input onChange={e => email.onChange(e)}  onBlur={e => email.onBlur(e)} value={email.value}
                               name='email'
                               type='text' placeholder='Имеил'/>
                    </form>
                </div>
                <div className={style.FormWrapper}>
                    {(org.isCheck && org.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
                    {(org.isCheck && org.lengthError) && <div style={{color: 'red'}}>Минимум 5 символов</div>}
                    <form className={style.testInput}>
                        <input onChange={e => org.onChange(e)} onBlur={e => org.onBlur(e)} value={org.value}
                               name='email'
                               type='text' placeholder='Наименование организации'/>
                    </form>
                </div>
                <div className={style.SaveButton}>
                    <button disabled={!email.inputValid || !org.inputValid} onClick={handlerClick}> Сохранить</button>
                </div>
            </div>

        </div>


)
};

export default Dash;