import Square from "../Square/Square"
import { useState } from "react"

function Game() {

    let [counter, setCounter] = useState(1);
    let [turn , setTurn] = useState('X');
    let [mapX, setMapX] = useState([]);
    let [mapO, setMapO] = useState([]);

    return (
        <div id='generalContainer'>
            <div>It's {turn} turn</div>
            <div id='topRow' className="rows">
                <Square counter={counter} setCounter={setCounter} turn={turn} setTurn={setTurn} mapX={mapX} setMapX={setMapX} mapO={mapO} setMapO={setMapO} value={0}/>
                <Square counter={counter} setCounter={setCounter} turn={turn} setTurn={setTurn} mapX={mapX} setMapX={setMapX} mapO={mapO} setMapO={setMapO} value={1}/>
                <Square counter={counter} setCounter={setCounter} turn={turn} setTurn={setTurn} mapX={mapX} setMapX={setMapX} mapO={mapO} setMapO={setMapO} value={2}/>
            </div>
            <div id='midRow' className="rows">
                <Square counter={counter} setCounter={setCounter} turn={turn} setTurn={setTurn} mapX={mapX} setMapX={setMapX} mapO={mapO} setMapO={setMapO} value={3}/>
                <Square counter={counter} setCounter={setCounter} turn={turn} setTurn={setTurn} mapX={mapX} setMapX={setMapX} mapO={mapO} setMapO={setMapO} value={4}/>
                <Square counter={counter} setCounter={setCounter} turn={turn} setTurn={setTurn} mapX={mapX} setMapX={setMapX} mapO={mapO} setMapO={setMapO} value={5}/>
            </div>
            <div id='botRow' className="rows">
                <Square counter={counter} setCounter={setCounter} turn={turn} setTurn={setTurn} mapX={mapX} setMapX={setMapX} mapO={mapO} setMapO={setMapO} value={6}/>
                <Square counter={counter} setCounter={setCounter} turn={turn} setTurn={setTurn} mapX={mapX} setMapX={setMapX} mapO={mapO} setMapO={setMapO} value={7}/>
                <Square counter={counter} setCounter={setCounter} turn={turn} setTurn={setTurn} mapX={mapX} setMapX={setMapX} mapO={mapO} setMapO={setMapO} value={8}/>
            </div>
        </div>
    )
}

export default Game