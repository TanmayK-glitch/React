import { useState, useEffect, useRef } from "react";

function Project1() {
    const [list, setList] = useState(["Buy Street Triple RS"]);
    const [inputValue, setInputValue] = useState("");
    const prevListLength = useRef(list.length);

    function addTask() {
        if (inputValue.trim() === "") {
            return;
        }
        setList(prev => [...prev, inputValue.trim()]);
        setInputValue("");
    }

    function removeTask(index) {
        setList(prevList => prevList.filter((_, i) => i !== index));
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    }

    // useEffect that runs only when items are removed
    useEffect(() => {
        if (list.length < prevListLength.current) {
            console.log("Task removed! New list:", list);
        }
        prevListLength.current = list.length;
    }, [list]);

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
                <input
                    type="text"
                    placeholder="Enter Tasks To Add"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button className="addBtn" onClick={addTask}>Add Button</button>
            </div>
        </>
    );
}

export default Project1;