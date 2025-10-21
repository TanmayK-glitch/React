import React from "react";

function Navbar() {
    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">CryptoPlace.com</h1>
                <ul className="sm: hidden">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <select className="sm: hidden">
                    <option value={`usd`}>USD</option>
                    <option value={`inr`}>INR</option>
                    <option value={`euro`}>EURO</option>
                </select>

                <button className="ml-10">Sign In <i className="ri-arrow-right-up-line"></i></button>
                <button><i className="ri-menu-3-line"></i></button>

            </div>
        </>
    );
}

export default Navbar