import { useState } from "react";

function ToDoApp() {

    const [list, setList] = useState(["Fuck Spohie Rain", "Get Pegged by GF"]);
    const [newList, setNewList] = useState("");
    const addList = (e) => {
        const newList = document.getElementById("inputPlace").value;

        setNewList(prev => ([...prev, newList]));
    }

    const removeList = (index) => {
        setList(f => f.filter((_, i) => i !== index));
    }

    return (
        <>
            <div>
                <h1>To Do App</h1>
                <h2>Tasks To Complete:</h2>
                <ul>
                    {list.map((item, index) => <li key={index}>{item} <button id="removeBtn" onClick={() => removeList(index)}>Remove</button></li>)}
                </ul>
                <input type="text" id="inputPlace" placeholder="Enter List To Add"></input><br></br><br></br>
                <button id="addBtn" onClick={addList}>Add List</button>
                <h2>Completed Tasks: </h2>
                <ul>
                </ul>
            </div>
        </>
    );
}

export default ToDoApp
