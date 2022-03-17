import React, {useState} from "react";
import DropdownMenuTest from "./DropdownMenuTest/DropdownMenuTest";
import style from "./AnActiveCitizen.module.css";



const AnActiveCitizen = () => {

    const [activeItem, setActiveItem] = useState(null)

    return (
        <div className={style.container}>
            <DropdownMenuTest
                id="menu1"
                active={activeItem}
                onOpen={setActiveItem}
                item={
                <>
                    <div> element1.1 </div>
                    <div> element1.2 </div>
                    <div> element1.3 </div>
                </>
                }
            />
            <DropdownMenuTest
                id="menu2"
                active={activeItem}
                onOpen={setActiveItem}
                item={
                    <>
                        <div> element2.1 </div>
                        <div> element2.2 </div>
                        <div> element2.3 </div>
                    </>
                }
            />
        </div>
    )
}

export default AnActiveCitizen;



