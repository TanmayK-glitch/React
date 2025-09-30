import { useState, useEffect } from "react";

function Project1() {
    const input = document.querySelector('#inputValue');
    const addButton = document.querySelector('.addBtn');

    const [list, setList] = useState(["Buy Street Triple RS"]);

    function addTask(e) {
        const newValue = document.getElementById('inputValue').value.trim();

        if (newValue === "") {
            return;
        }

        document.getElementById('inputValue').value = "";
        setList(p => [...p, newValue]);
    }

    function removeTask(index) {
        setList(prevList => prevList.filter((_, i) => i !== index));
    }

    input?.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') {
            addTask();
        }
    });

    // addButton?.addEventListener('click', addTask);

    return (
        <>
            <div className="container">
                <h1 className="h1">To-Do-App</h1>
                <div className="listContainer">
                    <ul className="Unordered List">
                        {list.map((item, index) => (
                            <li key={index} className="tastList">{item} <button onClick={() => removeTask(index)} className="removeBtn">Remove</button></li>
                        ))}
                    </ul>
                </div>
                <input type="text" placeholder="Enter Tasks To Add" id="inputValue" onChange={list}></input>
                <button className="addBtn" onClick={addTask}>Add Button</button>
            </div>
        </>
    );
}

export default Project1;