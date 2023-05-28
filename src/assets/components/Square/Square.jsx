import './Square.css';
import { useState } from 'react';

function Square(props) {

    const [type, setType] = useState(null);

    function handleClick() {
        if (props.counter % 2 != 0) {
            setType('X');
            props.setTurn('O');
            props.setCounter(props.counter + 1);
            props.setMapX([...props.mapX, props.value]);
            console.log(props.mapX);
        } else {
            setType('O');
            props.setTurn('X');
            props.setCounter(props.counter + 1);
            props.setMapO([...props.mapO, props.value]);
            console.log(props.mapX);
        }
    }
    return (
        <button className="squares" onClick={handleClick}>
            {type}
        </button>
    )
}

export default Square