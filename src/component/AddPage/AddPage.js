import React, {useEffect, useState} from 'react';
import style from './AddPage.module.css';
import Person from "./Person/Person";
import Map from "./Map/Map";
import Back from "./Back/Back";
import Choice from "./Choice/Choice";
import FormsOpener from "./Forms/FormsOpener";


const AddPage = () => {

    const [isSelect, setIsSelect] = useState('Статус')
    const [formValid, setFormValid] = useState(false)
    const [mail, setMail] = useState('')
    const [org, setOrg] = useState('')
    const [selectError, setSelectError] = useState("Необходимо выбрать!")
    const [mailError, setMailError] = useState('Поле не может быть пустым')
    const [orgError, setOrgError] = useState('Поле не может быть пустым')

    useEffect(() => {
            if (mailError || orgError || selectError) {
                setFormValid(false)
            } else {
                setFormValid(true)
            }
        }, [mailError, orgError, selectError]
    )

    const inputHandler = () => {
        console.log(org)
        console.log(mail)
        console.log(isSelect)
        setOrg('')
        setMail('')
        setIsSelect('Статус')
        setFormValid(false)
    }

    return (
        <div className={style.AddWrapper}>
            <div className={style.LBlock}>
                <Back/>
                <div className={style.AddOrg}>Добавление организации</div>
                <div className={style.Provider}>Поставщик</div>

                <FormsOpener setFormValid={setFormValid} org={org} mail={mail} setOrg={setOrg} setMail={setMail}
                             setMailError={setMailError} setOrgError={setOrgError}/>

                <Choice isSelect={isSelect} setIsSelect={setIsSelect} setSelectError={setSelectError}/>


            </div>
            <div className={style.RBlock}>
                <div className={style.Person}>
                    <Person name='Ксения' Position='Звёздочка'
                            url='https://sun1-18.userapi.com/s/v1/ig2/9j6tRaogXTJqwcagOHON9BV1mrASnsU1ukAbkPVLQAJfnTvvQnHbguC-F0puNqIybXQPpCaC4QRlMRZrj4yPvtop.jpg?size=50x50&quality=96&crop=5,114,646,646&ava=1'/>
                </div>
                <Map/>
            </div>
            <div className={style.SaveButton}>
                <button onClick={inputHandler} disabled={!formValid}> Сохранить</button>
            </div>

        </div>
    );

};

export default AddPage;