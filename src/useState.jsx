import { useState, useEffect, useRef } from "react";

function UseState() {
    let [num, setNum] = useState(0);

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "red";
    }

    useEffect(() => {
        console.log("Component Rendered")
    });

    const inputRef = useRef(null);

    return (
        <>
            <div>
                <button onClick={handleClick}>
                    Click Me
                </button><br></br>
                <input ref={inputRef}/>
            </div>
        </>
    );
}

export default UseState