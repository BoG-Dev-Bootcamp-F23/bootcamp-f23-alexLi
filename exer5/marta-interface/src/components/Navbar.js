import './Navbar.css';

export default function NavBar(props) {
    const {color, arrivals} = props;
    const stationsList = arrivals[color.toLowerCase()];
    
    return (
        <div id="nav-bar">
            <div className="title">
                <p>Select your starting location</p>
            </div>
            {stationsList.map((station) => {
                return <p className="stationName">{station}</p>
            })}
        </div>
    )
}
