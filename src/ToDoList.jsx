import { useState } from "react";

function ToDoApp() {

    const [list, setList] = useState(["Fuck Spohie Rain", "Get Pegged by GF"]);
    const addList = (e) => {
        const inputValue = document.getElementById("inputPlace").value.trim();

        if (inputValue === "") {
            return;
        }

        document.getElementById("inputPlace").value = "";
        setList(prev => [...prev, inputValue]);
    }

    const removeList = (index) => {
        setList(f => f.filter((_, i) => i !== index));
    }

    return (
        <>
            <div className="todo-app">
                <h1>To Do App</h1>
                <h2>Tasks To Complete:</h2>
                <ul className="todo-list">
                    {list.map((item, index) => (
                        <li key={index} className="todo-item">
                            {item}
                            <button onClick={() => removeList(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
                <div className="todo-input">
                    <input type="text" id="inputPlace" placeholder="Enter List To Add" onChange={list}></input>
                    <button onClick={addList}>Add List</button>
                </div>
            </div>
        </>
    );
}

export default ToDoApp
