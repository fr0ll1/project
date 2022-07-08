import React, {useEffect, useState} from 'react'
import s from './addPage.module.css'
import Person from './Person/Person'
import Map from './Map/Map'
import Back from './Back/Back'
import Choice from './Choice/Choice'
import FormsOpener from './Forms/FormsOpener'


const AddPage = () => {

    const [isSelect, setIsSelect] = useState('Статус')
    const [formValid, setFormValid] = useState(false)
    const [mail, setMail] = useState('')
    const [org, setOrg] = useState('')
    const [selectError, setSelectError] = useState('Необходимо выбрать!')
    const [mailError, setMailError] = useState('Поле не может быть пустым')
    const [orgError, setOrgError] = useState('Поле не может быть пустым')
    const [mailCheker, setMailChaker] = useState(false)
    const [orgCheker, setOrgChaker] = useState(false)

    useEffect(() => {
            if (mailError || orgError || selectError) {
                setFormValid(false)
            } else {
                setFormValid(true)
            }
        }, [mailError, orgError, selectError]
    )

    const inputHandler = () => {
        console.log('Наименование организации:', org)
        console.log('Имеил:', mail)
        console.log('Статус:', isSelect)
        setOrg('')
        setMail('')
        setIsSelect('Статус')
        setFormValid(false)
        setSelectError('Необходимо выбрать!')
        setMailError('Поле не может быть пустым')
        setOrgError('Поле не может быть пустым')
    }

    return (
        <div className={s.AddWrapper}>
            <div className={s.LBlock}>

                <Back/>

                <div className={s.AddOrg}>Добавление организации</div>
                <div className={s.Provider}>Поставщик</div>

                <FormsOpener setFormValid={setFormValid}
                             org={org}
                             mail={mail}
                             setOrg={setOrg}
                             setMail={setMail}
                             setMailError={setMailError}
                             setOrgError={setOrgError}
                             setMailChaker={setMailChaker}
                             setOrgChaker={setOrgChaker}
                             mailCheker={mailCheker}
                             orgCheker={orgCheker}/>

                <Choice isSelect={isSelect}
                        setIsSelect={setIsSelect}
                        setSelectError={setSelectError}/>
            </div>
            <div className={s.RBlock}>
                <div className={s.Person}>
                    <Person name='Ксения' Position='Звёздочка'
                            url='https://sun1-18.userapi.com/s/v1/ig2/9j6tRaogXTJqwcagOHON9BV1mrASnsU1ukAbkPVLQAJfnTvvQnHbguC-F0puNqIybXQPpCaC4QRlMRZrj4yPvtop.jpg?size=50x50&quality=96&crop=5,114,646,646&ava=1'/>
                </div>
                <Map/>
            </div>
            <div className={s.SaveButton}>
                <button onClick={inputHandler} disabled={!formValid}> Сохранить</button>
            </div>
        </div>
    )

}

export default AddPage