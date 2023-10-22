import './Colorbar.css';

export default function Colorbar() {
    const [currColor, setCurrColor] = useState("BLUE");
    const updateLine = (color) => {
        setCurrColor(color);
    };
    return (<div>
        <button className="gold" onclick={updateLine("GOLD")}>Gold</button>
        <button className="red" onclick={updateLine("RED")}>Red</button>
        <button className="blue" onclick={updateLine("BLUE")}>Blue</button>
        <button className="green" onclick={updateLine("GREEN")}>Green</button>
    </div>)
}