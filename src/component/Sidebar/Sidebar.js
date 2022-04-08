import React, {useState} from "react";
import style from './Sidebar.module.css'
import Elements from "./Elements/Elements";
import {NavLink} from "react-router-dom";
import {ReactComponent as Dash} from "../../svg/Dash.svg";
import {ReactComponent as SituationCenter} from "../../svg/SituationCenter.svg";
import {ReactComponent as AnActiveCitizen} from "../../svg/AnActiveCitizen.svg";
import {ReactComponent as CityServices} from "../../svg/CityServices.svg";
import {ReactComponent as Business} from "../../svg/Business.svg";
import {ReactComponent as PaidServices} from "../../svg/PaidServices.svg";
import {ReactComponent as Safety} from "../../svg/Safety.svg";
import {ReactComponent as Infrastructure} from "../../svg/Infrastructure.svg";
import {ReactComponent as ColdWater16} from "../../svg/cold-water_16.svg";
import {ReactComponent as Canalization} from "../../svg/canalization_16.svg";
import {ReactComponent as Electric} from "../../svg/electric-power_16.svg";
import {ReactComponent as Telephone} from "../../svg/telephone_16.svg";
import {ReactComponent as TKO} from "../../svg/tko_16.svg";
import {ReactComponent as Speed} from "../../svg/dash_16.svg";
import {ReactComponent as Monitoring} from "../../svg/monitoring_16.svg";
import {ReactComponent as ArrowDown} from "../../svg/arrow-down_16.svg";
import {ReactComponent as ArrowUp} from "../../svg/arrow-up_16.svg";
import OpeningElement from "./OpeningElement/OpeningElement";
import DropDawnElement from "./DropDawnElement/DropDawnElement";


function Sidebar() {

    const [activeItem,setActiveItem]= useState(null)

    let InfoForNotOpenButtonOnSidebar = [
        {path :'/Dash', name:'Дашборд', icon: <Dash className={style.icon}/> },
        {path :'/SituationCenter', name:'Ситуационный центр', icon: <SituationCenter className={style.icon}/>},
        {path :'/AnActiveCitizen', name:'Активный гражданин', icon: <AnActiveCitizen className={style.icon}/>}
    ]

    let InfoForButtonForDropDawnElement = [
        {path:'/Gis', name:'ГИС ЖКХ', icon:<ColdWater16 className={style.icon}/>},
        {path:'/Asudd', name:'АСУДД', icon:<Canalization className={style.icon}/>},
        {path:'/Energy', name:'Электропитание', icon:<Electric className={style.icon}/>},
        {path:'/BS', name:'БС сотовой связи', icon:<Telephone className={style.icon}/>},
        {path:'/Trash', name:'Мусор', icon:<TKO className={style.icon}/>},
        {path:'/Speed', name:'Счётчики', icon:<Speed className={style.icon}/>},
        {path:'/Manager', name:'Диспетчер лифтов', icon:<Monitoring className={style.icon}/>}
    ]

    let ButtonForDropDawnElement = InfoForButtonForDropDawnElement.map((el)=><DropDawnElement path={el.path} name={el.name} icon={el.icon}/>)

    let NotOpenButtonOnSidebar = InfoForNotOpenButtonOnSidebar.map((el) => <Elements path={el.path} name={el.name} icon={el.icon}/>)


    let ButtonForOpeningElement = [
        <OpeningElement
            name='Службы города'
            type='CityServices'
            active={activeItem}
            onOpen={setActiveItem}
            icon={<CityServices className={style.icon}/>}
            open={<ArrowDown className={style.arrow}/>}
            close={<ArrowUp className={style.arrow}/>}
            item={<ul>{ButtonForDropDawnElement}</ul>}
        />,
        <OpeningElement
            name='Бизнес'
            activeType='Business'
            active={activeItem}
            onOpen={setActiveItem}
            icon={<Business className={style.icon}/>}
            open={<ArrowDown className={style.arrow}/>}
            close={<ArrowUp className={style.arrow}/>}
            item={<ul>{ButtonForDropDawnElement}</ul>}
            />,
        <OpeningElement
            name='Платные услуги'
            activeType='PaidServices'
            active= {activeItem}
            onOpen={setActiveItem}
            icon={<PaidServices className={style.icon}/>}
            open={<ArrowDown className={style.arrow}/>}
            close={<ArrowUp className={style.arrow}/>}
            item={<ul>{ButtonForDropDawnElement}</ul>}
            />,
        <OpeningElement
            name='Безопасность'
            activeType='Safety'
            active={activeItem}
            onOpen={setActiveItem}
            icon={<Safety className={style.icon}/>}
            open={<ArrowDown className={style.arrow}/>}
            close={<ArrowUp className={style.arrow}/>}
            item={<ul>{ButtonForDropDawnElement}</ul>}
            />,
        <OpeningElement
            name='Инфраструктура'
            activeType='Infrastructure'
            active={activeItem}
            onOpen={setActiveItem}
            icon={<Infrastructure className={style.icon}/>}
            open={<ArrowDown className={style.arrow}/>}
            close={<ArrowUp className={style.arrow}/>}
            item={<ul>{ButtonForDropDawnElement}</ul>}
            />
    ]

    return (
        <div className={style.Menu}>
            <div className={style.MenuHeader}>
                <NavLink to='/' className={style.MenuBtn}> Личный кабинет</NavLink>
            </div>
            <div className={style.MenuBody}>
                <div className={style.MenuUl}>
                    {NotOpenButtonOnSidebar}
                    {ButtonForOpeningElement}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;