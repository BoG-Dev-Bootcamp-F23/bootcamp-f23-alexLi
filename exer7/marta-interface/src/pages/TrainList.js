import Train from '../components/Train';
import './TrainList.css';

function TrainList(props) {
    const { color, arrivals, selectedStation, ways } = props;
    /*
    direction prop, 
    const filteredTrains = arrivals.RailArrivals.filter((currTrain) => {
        return currTrain.LINE === color;
    });
    */
   const indexToDir = (i) => {
        if(i == 0) {
            return "E"
        } else if(i == 1) {
            return "W";
        } else if(i == 2) {
            return "N";
        } else {
            return "S"
        }
   }
    let filteredTrains = selectedStation === "All Stations" ? arrivals : arrivals?.filter((currTrain) => {
        return currTrain.STATION.toLowerCase() === selectedStation.toLowerCase() + " station";
    });
    
    for(let i = 0; i < 4; i++) {
        filteredTrains = !ways[i] ? filteredTrains : filteredTrains?.filter((currTrain) => {
            return currTrain.DIRECTION !== indexToDir(i);
        });
    }
    
    return (
        <div className="train-list">
            {filteredTrains === undefined || filteredTrains.length === 0 ? (
                <p>No Current Trains Match Filters</p>) : (
                filteredTrains?.map((currTrain) => {
                    return <Train train={currTrain} />;
                })
            )}
        </div>
    )
}
export default TrainList;