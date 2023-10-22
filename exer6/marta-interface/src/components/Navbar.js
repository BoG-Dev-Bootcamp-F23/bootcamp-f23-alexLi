import './Navbar.css';
import { useState } from 'react'
export default function NavBar(props) {
    const {color, arrivals, selectedStation, setSelectedStation} = props;
    const stationsList = arrivals;
    
    // const [selectedStation, setSelectedStation] = useState("All Stations");
    
    const handleStationClick = (station) => {
        setSelectedStation(station);
    };
    
    return (
        <div id="nav-bar">
            <div className="title">
                <p>Select your starting station</p>
            </div>
            <p
                className={`stationName ${"All Stations" === selectedStation ? 'selected' : ''}`}
                onClick={() => handleStationClick("All Stations")}
            >
                All Stations
            </p>
            {stationsList?.map((station) => {
                return <p
                className={`stationName ${station === selectedStation ? 'selected' : ''}`}
                onClick={() => handleStationClick(station)}
                >
                {station}
                </p>
            })}
        </div>  
    );
}
/* 
// <div id="nav-bar">
        //     <div className="title">
        //         <p>Select your starting station</p>
        //     </div>
        //     <p className="stationName">All Stations</p>
        //     {stationsList?.map((station) => {
        //         return <p className="stationName">{station}</p>
        //     })}
        // </div> */
