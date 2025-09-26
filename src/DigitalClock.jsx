import React, { useState, useEffect } from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${handleZeroes(hours)}:${handleZeroes(minutes)}:${handleZeroes(seconds)} ${meridiem}`
    }

    function handleZeroes(number) {
        return (number < 10 ? "0" : "") + number;
    }




    return (
        <>
            <div>
                <div>
                    <p>Demo Text</p>
                    <span>{formatTime()}</span>
                </div>
            </div>
        </>
    );
}

export default DigitalClock;