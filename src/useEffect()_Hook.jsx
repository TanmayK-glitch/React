import React, { useState, useEffect, use } from "react";

// function UseEffect() {

//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState("green");

//     function addCounter() {
//         setCount(c => c + 1);
//     }

//     function decCount(){
//         setCount(c => c - 1);
//     }

//     function changeColor(){
//         setColor(c => color === "green" ? "red" : "green");
//     }

//     useEffect(() => {
//         document.title = `Count: ${count} ${color}`;
//     }, [count, color]);


//     return (
//         <>
//             <div>
//                 <p style={{color: color}}>Count is: {count}</p>
//                 <button onClick={addCounter}>Add Count</button><br></br><br></br>
//                 <button onClick={decCount}>Minus</button>
//                 <button onClick={changeColor}>Change Color</button>
//             </div>
//         </>
//     );
// } 
// <------------------------------------------------------------->

function UseEffect() {

    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', resizeWindow);
        console.log("Event Added");
    }, []);

    useEffect(() => {
        document.title = `Heigth: ${height} Width: ${width}`;
        resizeWindow();
    }, [width, height]);


    function resizeWindow() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    return (
        <>
            <div>
                <p>Width is: {width}px</p>
                <p>Heght is: {height}px</p>
            </div>
        </>
    );
}

export default UseEffect