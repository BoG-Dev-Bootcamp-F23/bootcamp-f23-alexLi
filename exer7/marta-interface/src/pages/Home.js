import { Link } from 'react-router-dom';
import logo from '../pictures/marta.png'
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="top-bar">
        <h1 className="marta-logo">MARTA</h1>
        <Link to="/about" className="about-link">About MARTA</Link>
      </div>
      <hr className="top-bar-divider" />
      <div className="content-container">
        <div className="left-bar">
          <h2>View Routes & Schedule</h2>
          <Link to="/lines/GOLD">Gold Line</Link>
          <Link to="/lines/RED">Red Line</Link>
          <Link to="/lines/BLUE">Blue Line</Link>
          <Link to="/lines/GREEN">Green Line</Link>
        </div>
        <div className="right-content">
          <img src={logo} alt="MARTA Logo" />
        </div>
      </div>
    </div>
  );
}

export default Home;