
import TrainList from './TrainList';
import Navbar from '../components/Navbar';
// get static data
// import stationData from '../server/stationData';
// import trainData from '../server/trainData';
import './LinesPage.css';
import {useState, useEffect} from 'react';

const arrivalsURL = 'http://13.59.196.129:3001/arrivals/';
const stationsURL = 'http://13.59.196.129:3001/stations/';

export default function LinesPage() {
  // initialize some currColor state
  const [currColor, setCurrColor] = useState("GOLD");
  const [trainData, setTrainData] = useState([]);
  const [stationData, setStationData] = useState([]);
  const [selectedStation, setSelectedStation] = useState("All Stations");
  const [ways, setWays] = useState([false,false,false,false]);
  const directions = ["Eastbound","Westbound","Northbound","Southbound"];
  function mapDir(dir) {
    if(dir === "Eastbound") {
      return 0;
    } else if(dir === "Westbound") {
      return 1;
    } else if(dir === "Northbound") {
      return 2;
    } else if(dir == "Southbound") {
      return 3;
    }
  }
  
  const handleDirectionClick = (direction) => {
    const index = mapDir(direction);
    const updatedWays = [...ways];
    updatedWays[index] = !updatedWays[index];
    setWays(updatedWays);
  };

  const updateLine = (newColor) => {
    setCurrColor(newColor);
    setSelectedStation("All Stations");
    setWays([false, false, false, false]); // Reset the ways array
  };

  let dir1 = directions[0];
  let dir2 = directions[1];

  if(currColor === "GOLD" || currColor === "RED") {
    dir1 = directions[2];
    dir2 = directions[3];
  }
  
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(arrivalsURL + currColor);
      const fetchedData = await result.json();
      setTrainData(fetchedData);
    }

    fetchData();
  }, [currColor]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(stationsURL + currColor);
      const fetchedData = await result.json();
      setStationData(fetchedData);
    }

    fetchData();
  }, [currColor]);

  return (
    <div className="page">
        
        <div className="colorbar">
          <button className="goldLine" onClick={() => updateLine("GOLD")}>Gold</button>
          <button className="redLine" onClick={() => updateLine("RED")}>Red</button>
          <button className="blueLine" onClick={() => updateLine("BLUE")}>Blue</button>
          <button className="greenLine" onClick={() => updateLine("GREEN")}>Green</button>
        </div>
     
        <h1 className="header">{currColor}</h1>
        <div className="body">
          <div className="nav-bar">
            <Navbar color={currColor} arrivals={stationData} selectedStation={selectedStation} setSelectedStation={setSelectedStation}/>
          </div>
          <div className="right">
            <div className="button-bar">
              <button>Arriving</button>
              <button>Scheduled</button>
              <button className={`${ways[mapDir(dir1)] ? "selected" : ""}`} onClick={() => handleDirectionClick(dir1)}>
                {dir1}
              </button>
              <button className={`${ways[mapDir(dir2)] ? "selected" : ""}`} onClick={() => handleDirectionClick(dir2)}>
                {dir2}
              </button>
            </div>
            <div className="train-list">
                <TrainList color={currColor} arrivals={trainData} selectedStation={selectedStation} ways={ways}/>
            </div>
          </div>
        </div>
    </div>
  );
}