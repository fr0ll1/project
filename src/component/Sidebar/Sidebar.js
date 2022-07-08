import React, {useState} from 'react'
import s from './sidebar.module.css'
import Elements from './Elements/Elements'
import {NavLink} from 'react-router-dom'
import {ReactComponent as Dash} from '../../svg/Dash.svg'
import {ReactComponent as SituationCenter} from '../../svg/SituationCenter.svg'
import {ReactComponent as AnActiveCitizen} from '../../svg/AnActiveCitizen.svg'
import {ReactComponent as CityServices} from '../../svg/CityServices.svg'
import {ReactComponent as Business} from '../../svg/Business.svg'
import {ReactComponent as PaidServices} from '../../svg/PaidServices.svg'
import {ReactComponent as Safety} from '../../svg/Safety.svg'
import {ReactComponent as Infrastructure} from '../../svg/Infrastructure.svg'
import {ReactComponent as ColdWater16} from '../../svg/cold-water_16.svg'
import {ReactComponent as Canalization} from '../../svg/canalization_16.svg'
import {ReactComponent as Electric} from '../../svg/electric-power_16.svg'
import {ReactComponent as Telephone} from '../../svg/telephone_16.svg'
import {ReactComponent as TKO} from '../../svg/tko_16.svg'
import {ReactComponent as Speed} from '../../svg/dash_16.svg'
import {ReactComponent as Monitoring} from '../../svg/monitoring_16.svg'
import {ReactComponent as ArrowDown} from '../../svg/arrow-down_16.svg'
import {ReactComponent as ArrowUp} from '../../svg/arrow-up_16.svg'
import OpeningElement from './OpeningElement/OpeningElement'
import DropDawnElement from './DropDawnElement/DropDawnElement'


function Sidebar() {

    const [activeItem, setActiveItem] = useState(null)


    let arrowIcon =(activeType)=>{

        if (activeItem === activeType) {
            return <ArrowUp className={s.arrow}/>
            } else {
            return <ArrowDown className={s.arrow}/>}
    }



    let InfoForNotOpenButtonOnSidebar = [
        {path: '/Dash', name: 'Дашборд', icon: <Dash className={s.icon}/>},
        {path: '/SituationCenter', name: 'Ситуационный центр', icon: <SituationCenter className={s.icon}/>},
        {path: '/AnActiveCitizen', name: 'Активный гражданин', icon: <AnActiveCitizen className={s.icon}/>}
    ]

    let InfoForButtonForDropDawnElement = [
        {path: '/Gis', name: 'ГИС ЖКХ', icon: <ColdWater16 className={s.icon}/>},
        {path: '/Asudd', name: 'АСУДД', icon: <Canalization className={s.icon}/>},
        {path: '/Energy', name: 'Электропитание', icon: <Electric className={s.icon}/>},
        {path: '/BS', name: 'БС сотовой связи', icon: <Telephone className={s.icon}/>},
        {path: '/Trash', name: 'Мусор', icon: <TKO className={s.icon}/>},
        {path: '/Speed', name: 'Счётчики', icon: <Speed className={s.icon}/>},
        {path: '/Manager', name: 'Диспетчер лифтов', icon: <Monitoring className={s.icon}/>}
    ]

    let ButtonForDropDawnElement = InfoForButtonForDropDawnElement.map(
        (el) => <DropDawnElement path={el.path} name={el.name} icon={el.icon}/>)

    let NotOpenButtonOnSidebar = InfoForNotOpenButtonOnSidebar.map((el) =>
        <Elements path={el.path} name={el.name} icon={el.icon}/>)

    let InfoForButtonForOpeningElement = [
        {
          name: 'Службы города',
          activeType: 'CityServices',
          activeItem: activeItem,
          setActiveItem: setActiveItem,
          icon: <CityServices className={s.icon}/>,
          item: <ul>{ButtonForDropDawnElement}</ul>,
          arrowIcon:arrowIcon
        },

        {
          name: 'Бизнес',
          activeType: 'Business',
          activeItem: activeItem,
          setActiveItem: setActiveItem,
          icon: <Business className={s.icon}/>,
          item: <ul>{ButtonForDropDawnElement}</ul>,
          arrowIcon:arrowIcon
        },

        {
          name: 'Платные услуги',
          activeType: 'PaidServices',
          activeItem: activeItem,
          setActiveItem: setActiveItem,
          icon: <PaidServices className={s.icon}/>,
          item: <ul>{ButtonForDropDawnElement}</ul>,
          arrowIcon:arrowIcon
        },

        {
          name: 'Безопасность',
          activeType: 'Safety',
          activeItem: activeItem,
          setActiveItem: setActiveItem,
          icon: <Safety className={s.icon}/>,
          item: <ul>{ButtonForDropDawnElement}</ul>,
          arrowIcon:arrowIcon
        },

        {
          name: 'Инфраструктура',
          activeType: 'Infrastructure',
          activeItem: activeItem,
          setActiveItem: setActiveItem,
          icon: <Infrastructure className={s.icon}/>,
          item: <ul>{ButtonForDropDawnElement}</ul>,
          arrowIcon:arrowIcon
        }

    ]

    let ButtonForOpeningElement = InfoForButtonForOpeningElement.map((el) =>
        <OpeningElement name={el.name}
                        activeType={el.activeType}
                        activeItem={el.activeItem}
                        setActiveItem={el.setActiveItem}
                        icon={el.icon}
                        item={el.item}
                        arrowIcon={el.arrowIcon}
        />
    )

    return (
        <div >
            <div className={s.MenuHeader}>
                <NavLink to='/' className={s.MenuBtn}> Личный кабинет</NavLink>
            </div>
                <div>
                    {NotOpenButtonOnSidebar}
                    {ButtonForOpeningElement}
                </div>
        </div>
    )
}

export default Sidebar