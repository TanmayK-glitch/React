import React, { useContext } from "react";
import { coinContext } from "../../Context/CoinContext";

function Navbar() {

    const { setCurrency } = useContext(coinContext);

    const currencyhandler = (e) => {
        switch (e.target.value) {
            case "usd": {
                setCurrency({
                    name: "usd",
                    symbol: "$"
                });
            }
            case "inr": {
                setCurrency({
                    name: "inr",
                    symbol: "₹"
                });
                break;
            }
            case "eur": {
                setCurrency({
                    name: "eur",
                    symbol: "€"
                });
                break;
            }
            default: {
                setCurrency({
                    name: "usd",
                    symbol: "$"
                });
                break;
            }

        }
    }

    return (
        <>
            <div className="flex items-center justify-between p-2">
                <h1 className="text-2xl font-semibold cursor-pointer">CryptoPlace.com</h1>
                <ul className="sm: hidden">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <select className="sm: hidden" onChange={currencyhandler}>
                    <option value={`usd`}>USD</option>
                    <option value={`inr`}>INR</option>
                    <option value={`euro`}>EURO</option>
                </select>



                <div className="flex items-center gap-6">
                    <button><i className="ri-menu-3-line text-xl font-semibold cursor-pointer"></i></button>
                    <button className="cursor-pointer font-normal px-5 py-2 bg-gray-400 rounded-4xl">Sign In <i className="ri-arrow-right-up-line"></i></button>
                </div>
            </div>
            <hr className="w-auto text-gray-400"></hr>
        </>
    );
}

export default Navbar