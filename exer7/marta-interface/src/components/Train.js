import './Train.css';
import logo from './m.png'; 

function Train(props) {
    const {train} = props;
    const fromStation = train.STATION;
    const toStation = train.DESTINATION;
    const line = train.LINE;
    const time = train.WAITING_TIME;
    let status = "";
    let statusColor = "";

    if(props.DELAY === "T0S") {
        status = "On Time";
        statusColor = "green";
    } else {
        status = "Delayed";
        statusColor = "red";
    }
    return (
        <div className="train">
            <div className="left">
                <div className="logo">
                    <img src={logo} alt="M" width={50} height={50}/>
                </div>
                <div className="main">
                    <p className="top">{fromStation} {'\u2192'} {toStation}</p>
                    <div className="info">
                        <div className={line}>
                            <p>{line} </p>
                        </div>
                        <div className={statusColor}>
                            <p>{status}</p> 
                        </div> 
                    </div>
                </div>
            </div>
            <div className="time">
                <p>{time}</p>
            </div>
        </div>
    );
}

export default Train;