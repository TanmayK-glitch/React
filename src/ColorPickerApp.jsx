import { useState } from "react";

function ColorPicker(){
    const [color, setColor] = useState();

    const updateColor = (e) => {
        setColor(e.target.value);
    }

    return(
        <>
        <div className="Color-Contanier">
            <h1 style={{color: color}}>Color Picker</h1>
            <p style={{backgroundColor: color}}>Color Selected: {color}</p>
            <label>Selct a Color: </label>
            <input type="color" value={color} onChange={updateColor}></input>
        </div>
        </>
    );
}

export default ColorPicker