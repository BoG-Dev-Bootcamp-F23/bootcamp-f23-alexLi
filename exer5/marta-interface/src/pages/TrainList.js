import Train from '../components/Train';
import './TrainList.css';

function TrainList(props) {
    const { color, arrivals } = props;
    const filteredTrains = arrivals.RailArrivals.filter((currTrain) => {
        return currTrain.LINE === color;
    });

    return (
        <div className="train-list">
            {filteredTrains.map((currTrain) => {
                return <Train train={currTrain} />
            })}
        </div>
    )
}
export default TrainList;