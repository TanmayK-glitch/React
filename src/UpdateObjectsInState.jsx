import React, { use, useState } from "react";
function updateObjects() {

    const [car, setCar] = useState({year: 2024,
                                    name: "BMW M4 Comp",
                                    manu: "BMW"
    });

    const [quantity, setQuantity] = useState(0);

   const updateCarYear = (e) => {
    setCar(c => Object.assign({}, c, {year: e.target.value}));
   }

   const updateCarName = (e) => {
    setCar(c => Object.assign({}, c, {name: e.target.value}));
   }

   const updateCarManu = (e) => {
    setCar(c => Object.assign({}, c, {manu: e.target.value}));
   }

   const updateQuantity = (q) => {
    setQuantity(q => q + 1);
   }

    return (
        <>
            <div>
                <p>Your Favourite Car is: {car.year} {car.name} {car.manu}</p>
                <input type="number" value={car.year} onChange={updateCarYear}></input><br></br><br></br>
                <input value={car.name} onChange={updateCarName}></input><br></br><br></br>
                <input value={car.manu} onChange={updateCarManu}></input><br></br><br></br>
                <button onClick={updateQuantity}>Click To Buy More Cars</button>
                <p> The Numebr of Cars he has is: {quantity}</p>
            </div>
        </>
    );
}

export default updateObjects;