import { use, useState } from "react";
function myComponent(){
//     const [name, setName] = useState("Guest");
//     const [age, setAge] = useState(0);
//     const [isEmployed, setisEmployed] = useState(false);

//     const updateAge = () => {
//         setAge(age + 1);
//     }

//     const updateName = () => {
//         setName("Tanmay");
//     }

//     const updateEmployment = () => {
//         setisEmployed(!isEmployed);
//     }

const [name, setName] = useState();
const [quantity, setQuantity] = useState(1);
const [comment, setComment] = useState();

const updateName = (e) => {
    setName(e.target.value);
}

const updateQuantity = (e) => {
    setQuantity(e.target.value);
}

const updateComment = (e) => {
    setComment(e.target.value);
}



    return(
        // <div>
        //     <p>Name: {name}</p>
        //     <p>Age: {age}</p>
        //     <p>isEmployed: {isEmployed ? "Yes" : "No Berozgar"}</p>
        //     <button onClick={updateAge}>Set Age</button>
        //     <button onClick={updateName}>set Name</button>
        //     <button onClick={updateEmployment}>Update J*b</button>
        // </div>
        <>
        <div>
            <input value={name} onChange={updateName}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={updateQuantity} type="number"></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={updateComment}></textarea>
            <p>Comment: {comment}</p>
        </div>
        </>
    );
}

export default myComponent