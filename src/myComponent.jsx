import { useState } from "react";
function myComponent(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setisEmployed] = useState(false);

    const updateAge = () => {
        setAge(age + 1);
    }

    const updateName = () => {
        setName("Tanmay");
    }

    const updateEmployment = () => {
        setisEmployed(!isEmployed);
    }


    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>isEmployed: {isEmployed ? "Yes" : "No Berozgar"}</p>
            <button onClick={updateAge}>Set Age</button>
            <button onClick={updateName}>set Name</button>
            <button onClick={updateEmployment}>Update J*b</button>
        </div>
    );
}

export default myComponent