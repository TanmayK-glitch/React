import { useState } from "react";

// Practice Update Objects in State
function Projects() {
    const[details, setDetails] = useState({ name: "Tanmay", 
                                            age: 19, 
                                            city: "Pune" });


    const updateName = (e) => {
        setDetails(d => Object.assign({}, d, {name: e.target.value}));
    }

    const updateAge = (e) => {
        setDetails(d => Object.assign({}, d, {age: e.target.value}));
    }

    const updateCity = (e) => {
        setDetails(d => Object.assign({}, d, {city: e.target.value}));
    }
    
    
    return (
        <>
            <div>
                <p>Info: {details.name} {details.age} {details.city}</p>
                <input type="text" onChange={updateName}></input><br></br><br></br>
                <input type="number" onChange={updateAge}></input><br></br><br></br>
                <input type="text" onChange={updateCity}></input><br></br><br></br>
            </div>
        </>
    );
}
// <----------------------------------------------------------->
// Practice Updater Functions
// function Projects(){
//     const [count1, setCount1] = useState(0);
//     const [count2, setCount2] = useState(0);


//     const updateCount = () => {
//         setCount1(prev => prev + 1);
//     }

//     const updateCount2 = () => {
//         setCount2(prev => prev + 1);
//     }
//     return(
//         <>
//             <div>
//                 <h1>Player 1: {count1}</h1>
//                 <button onClick={updateCount}>Click ++</button>
//                 <h1>Player 2: {count2}</h1>
//                 <button onClick={updateCount2}>Click ++</button>
//             </div>
//         </>
//     );
// }
// <-------------------------------------------------------------->
// Practice onChange Events
// function Projects() {

//     const [number, isNumber] = useState(0);

//     const updateNumber = (e) => {
//         isNumber(e.target.value);
//     }

//     return (
//         <>
//             <div>
//                 <p> This is what you are typing: {number} </p>
//                 <input type="number" onChange={updateNumber}></input>
//             </div>
//         </>
//     );
// }
// <--------------------------------------------------->
// Practice for useState Hooks
// function Projects() {

//     const [set, isSet] = useState();

//     const triggerToggle = (e) => {
//         isSet(e.style.backgroundColor === 'dark');
//     }

//     return (
//         <>
//             <div>
//                 <h2>This is a Text</h2>
//                 <button onClick={triggerToggle}> Toggle Button </button>
//             </div>
//         </>
//     );
// }

// <----------------------------------------------------->
// Practice for Click Events
// function Projects() {
//     const [count, setCount] = useState(0);

//     const incrementCount = () => {
//         setCount(p => p + 1);
//     }

//     const decrementCount = () => {
//         setCount(p => p - 1);
//     }

//     const resetCount = () => {
//         setCount(0);
//     }
//     return (
//         <>
//             <div>
//                 <p> The Count is : {count}</p>
//                 <button onClick={incrementCount}>Increment</button><br></br><br></br>
//                 <button onClick={decrementCount}>Decrement</button><br></br><br></br>
//                 <button onClick={resetCount}>Reset</button><br></br><br></br>
//             </div>
//         </>
//     );
// }

export default Projects