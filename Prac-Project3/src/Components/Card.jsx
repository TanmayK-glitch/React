import React from "react";

function Card() {
    return (
        <>
            <div className="p-4">
                <div className="flex justify-center">
                    <img src="myPic.jpg" />
                </div>
                <h2 className="text-3xl font-semibold">32 C</h2>
                <h5 className="text-xl font-light">London, City of London, Greater London</h5>
            </div>
        </>
    );
}

export default Card;