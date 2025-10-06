import { useState } from "react";


// <-----------------Update the state of Arrays------------------------>
// function UpdateArrays() {

//     const [foods, setFoods] = useState(["Mango",
//         "Apple",
//         "Banana",
//         "Pineapple"]);

//     const handleAddFood = () => {
//         const newFood = document.getElementById("foodInput").value;
//         document.getElementById("foodInput").value = "";

//         setFoods(f => [...f, newFood]);
//     }

//     const removeFood = (index) => {
//         setFoods(f => f.filter((_, i) => i !== index));
//     }

//     return (
//         <>
//             <div>
//                 <h1>List Of Fruits</h1>
//                 <ul>
//                     {foods.map((food, index) => <li key={index} onClick={() => removeFood(index)}
//                                                                                     >{food}</li>)}
//                 </ul>
//                 <input type="text" id="foodInput" placeholder="Enter Food Name"></input>
//                 <button className="addButton" onClick={handleAddFood}>Add Food</button>
//             </div>
//         </>
//     );
// }


// export default UpdateArrays

// <------------------------Update the state of array of object------------------------------>
function UpdateArraysofObject() {

    const [car, setCar] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [manu, setManu] = useState("");
    const [model, setModel] = useState("");

    // const addCar = () => {
    //     const newCars = { year: year, manu: manu, model: model };
    //     setCar(f => [...f, newCars]);
    //     // clearInputs();
    // }
    function addCar() {
        const newCars = { year: year, manu: manu, model: model };
        setCar(f => [...f, newCars]);
    }

    const removeCar = (index) => {
        setCar(f => f.filter((_, i) => i !== index));
    }

    const addYear = (e) => {
        setYear(e.target.value);
    }

    const addManu = (e) => {
        setManu(e.target.value);
    }

    const addModel = (e) => {
        setModel(e.target.value);
    }

    const clearInputs = () => {
        setModel("");
        setManu("");
        setYear(new Date().getFullYear());
    }

    return (
        <>
            <div>
                <h2>List Of Cars</h2>
                <ul>
                    {car.map((cars, index) => <li key={index} onClick={() => removeCar(index)}>
                        {cars.year} {cars.manu} {cars.model}
                    </li>)}
                </ul>
                <input type="number" value={year} onChange={addYear} id="changeYear"></input><br></br><br></br>
                <input type="text" placeholder="Enter Car Manu" onChange={addManu} value={manu} id="changeManu"></input><br></br><br></br>
                <input type="text" placeholder="Enter Car Model" onChange={addModel} value={model} id="changeModel"></input><br></br><br></br>
                <button onClick={() => {
                    addCar();
                    clearInputs();
                }} id="addBtn">Add Car</button>
            </div>
        </>
    );

}

export default UpdateArraysofObject