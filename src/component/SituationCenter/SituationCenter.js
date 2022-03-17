import React, {useState} from 'react';
import  style from './SituationCenter.module.css'

const SituationCenter = () => {
    const [inputText,setInputText] = useState('');

    const handlerClick = () => {
        setInputText(inputText.value)
        console.log('Email:', inputText)
        setInputText('')
    }
    
    const textHandler = (e) => {
      setInputText(e.target.value)
    }

    return (
        <div >
            <div className={style.MainWrapper}>
                <form className={style.testForm}>
                    <input  value={inputText} onChange={e=>textHandler(e)} type='text' placeholder='Email' />
                </form>

            <button className={style.testButton}  onClick={handlerClick}>Тестовая кнопочка</button>
            </div>
        </div>
    );
};

export default SituationCenter;