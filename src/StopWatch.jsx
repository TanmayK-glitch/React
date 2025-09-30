import { useState, useEffect, useRef } from "react";

function StopWatch() {

    const [time, setTime] = useState(0);

    useEffect(() => {
        const IntervalID = setInterval(() => {
            setTime(t => t + 1);
        }, 1000);

        return () => {
            clearInterval(IntervalID);
        }
    }, []);

    function startTimer() {

    }

    function stopTimer() {

    }

    function resetTimer() {

    }


    return (
        <>
            <div className="container">
                <h1 className="timerText" onChange={time}>00:00:00</h1>
                <div>
                    <button className="startBtn" onClick={startTimer}>Start</button>
                    <button className="stopBtn">Stop</button>
                    <button className="resetBtn">Reset</button>
                </div>
            </div>
        </>
    );
}

export default StopWatch