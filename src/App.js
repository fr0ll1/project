import './App.css';
import Sidebar from "./component/Sidebar/Sidebar";
import MainPage from "./component/MainPage/MainPage";
import AddPage from "./component/AddPage/AddPage";
import {Route, Routes} from "react-router-dom";
import Business from "./component/Business/Business";
import AnActiveCitizen from "./component/AnActiveCitizen/AnActiveCitizen";
import Dash from "./component/Dash/Dash";
import SituationCenter from "./component/SituationCenter/SituationCenter";
import Safety from "./component/Safety/Safety";
import Infrastructure from "./component/Infrastructure/Infrastructure";
import PaidServices from "./component/PaidServices/PaidServices";
import Asudd from "./component/CityServices/Asudd/Asudd";
import Bs from "./component/CityServices/BS";
import Energy from "./component/CityServices/Energy";
import Manager from "./component/CityServices/Manager";
import Speed from "./component/CityServices/Speed";
import Trash from "./component/CityServices/Trash";
import GIS from "./component/CityServices/Gis/GIS";

function App() {
    return (
        <div className="App">
            <div className="AppWrapper">
            <div className="Container">
            <div className="ContainerWrapper">
                <div className="NavBar">
                    <Sidebar/>
                </div>
                <div className='MainContent'>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="AddPage" element={<AddPage/>}/>
                        <Route path="AnActiveCitizen" element={<AnActiveCitizen/>}/>
                        <Route path="Business" element={<Business/>}/>
                        <Route path="Asudd" element={<Asudd/>}/>
                        <Route path="GIS" element={<GIS/>}/>
                        <Route path="BS" element={<Bs/>}/>
                        <Route path="Energy" element={<Energy/>}/>
                        <Route path="Manager" element={<Manager/>}/>
                        <Route path="Speed" element={<Speed/>}/>
                        <Route path="Trash" element={<Trash/>}/>
                        <Route path="Dash" element={<Dash/>}/>
                        <Route path="PaidServices" element={<PaidServices/>}/>
                        <Route path="Infrastructure" element={<Infrastructure/>}/>
                        <Route path="Safety" element={<Safety/>}/>
                        <Route path="SituationCenter" element={<SituationCenter/>}/>
                    </Routes>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default App;
