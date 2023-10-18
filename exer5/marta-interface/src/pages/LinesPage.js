// get static data
import TrainList from './TrainList';
import Navbar from '../components/Navbar';
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import './LinesPage.css';
import {useState} from 'react';

export default function LinesPage() {
  // initialize some currColor state
  const [currColor, setCurrColor] = useState("BLUE");
  const directions = ["Eastbound","Westbound","Northbound","Southbound"];
  let dir1 = directions[0];
  let dir2 = directions[1];

  if(currColor === "GOLD" || currColor === "RED") {
    dir1 = directions[2];
    dir2 = directions[3];
  }

  return (
    <div className="page">
        <h1 className="header">{currColor}</h1>
        <div className="body">
          <div className="nav-bar">
            <Navbar color={currColor} arrivals={stationData} />
          </div>
          <div className="right">
            <div className="button-bar">
              <button>Arriving</button>
              <button>Scheduled</button>
              <button>{dir1}</button>
              <button>{dir2}</button>
            </div>
            <div className="train-list">
                <TrainList color={currColor} arrivals={trainData} />
            </div>
          </div>
        </div>
    </div>
  );
}