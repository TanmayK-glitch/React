import { useState } from "react";

function UpdateArrays() {

    const [foods, setFoods] = useState(["Mango",
        "Apple",
        "Banana",
        "Pineapple"]);

    const handleAddFood = () => {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    const removeFood = (index) => {
        setFoods(f => f.filter((_, i) => i !== index));
    }

    return (
        <>
            <div>
                <h1>List Of Fruits</h1>
                <ul>
                    {foods.map((food, index) => <li key={index} onClick={() => removeFood(index)}
                                                                                    >{food}</li>)}
                </ul>
                <input type="text" id="foodInput" placeholder="Enter Food Name"></input>
                <button className="addButton" onClick={handleAddFood}>Add Food</button>
            </div>
        </>
    );
}

export default UpdateArrays