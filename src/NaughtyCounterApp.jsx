import { useState } from "react";

function Counter(){
    const [count, isCount] = useState(0);

    const updateCounter = () => {
        isCount(count + 1);
    }

    const decrementCounter = () => {
        isCount(count - 1);
    }

    const resetCounter = () => {
        isCount(0);
    }

    return(
        <>
        <div>
            <h1>Counter App</h1>
            <p>You Fucked me {count} times</p>
            <button onClick={updateCounter}>Increase Fuck Count</button>
            <button onClick={decrementCounter}>Decrease Fuck Count</button>
            <button onClick={resetCounter}>Reset Fuck Count</button>
        </div>
        </>
    );
}

export default Counter