import { useState } from "react";

function Demo() {

    const [tasks, setTasks] = useState(["Learn React", "Build Projects"]);

    const removeList = (index) => {
        setTasks(t => t.filter((_, i) => i !== index));
    }

    const addList = (e) => {
        const newList = document.getElementById('inputList').value;
        document.getElementById('inputList').value = "";

      setTasks(prev => [...prev, newList]);
    }

    const editList = () => {

    }

    return (
        <>
        <div>
            <h2>Lists Nigga</h2>
            <ul>
                {tasks.map((item, index) => <li key={index}>{item} <button onClick={() => removeList(index)}>Remove List</button></li>)}
            </ul>
            <input type="text" placeholder="Enter A Task" id="inputList"></input><br></br><br></br>
            <button onClick={addList}>Add List</button><br></br><br></br>
           <br></br><br></br>
        </div>
        </>
    );
}

export default Demo