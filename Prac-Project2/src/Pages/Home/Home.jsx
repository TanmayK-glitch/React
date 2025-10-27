import { useContext, useEffect, useState } from "react";
import { coinContext } from "../../Context/CoinContext";

function Home() {

    const context = useContext(coinContext);
    const {allCoin, currency, loading} = context || { allCoin: [], currency: { symbol: '$' }, loading: false };
    const [displayCoin, setDisplayCoin] = useState([]);
    
    if (!context) {
        return <div>Loading...</div>;
    }

    useEffect(() => {
        setDisplayCoin(allCoin);
    }, [allCoin])

    return (
        <>
            {/* Main Home Div */}
            <div>
                {/* Text Div */}
                <div className="mt-2 p-3">
                    <h1 className="font-extrabold text-5xl text-center">Crypto Marketplace</h1>
                    <p className="mt-4 font-medium">
                        Stay updated with real-time cryptocurrency prices and market trends.
                        Track Bitcoin, Ethereum, and all major altcoins with live charts and instant updates.
                        Create your own watchlist and get alerts when prices move.
                        Stay informed with the latest crypto news and insights — all in one simple app.
                        Your gateway to the live world of crypto starts here.
                    </p>
                    <form className="flex items-center justify-between mt-8 p-3 bg-white border border-gray-200 rounded-2xl shadow-lg max-w-2xl mx-auto">
                        <div className="flex items-center flex-1">
                            <i className="ri-search-line text-gray-400 text-xl mr-3"></i>
                            <input
                                type="text"
                                placeholder="Search Bitcoin, Ethereum, Dogecoin..."
                                className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                            />
                        </div>
                        <button
                            type="submit"
                            className="ml-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200 flex items-center gap-2"
                        >
                            <i className="ri-search-line"></i>
                            Search
                        </button>
                    </form>
                </div>
                {/* Text Div */}

                {/* Crypto-Table */}
                <div className="p-3">
                     {/* Table-Layout */}
                     <div className="grid grid-cols-5 text-sm gap-3 font-medium bg-white border border-gray-200 rounded-lg shadow-sm p-3">
                         <p>#</p>
                         <p className="text-left">Coins</p>
                         <p>Price</p>
                         <p className="text-left">24H Change</p>
                         <p className="text-right">Market Cap</p>
                     </div>
                    {/* Table-Layout */}
                    <div>
                        {loading ? (
                            <div className="text-center p-4">Loading coins...</div>
                        ) : displayCoin && displayCoin.length > 0 ? (
                            displayCoin.slice(0, 10).map((item, index) => (
                                <div key={index} className="grid grid-cols-5 text-sm gap-3 font-medium bg-white border border-gray-200 rounded-lg shadow-sm p-3 mt-2">
                                    <p>{item.market_cap_rank || 'N/A'}</p>
                                    <p className="text-left">{item.name || 'N/A'}</p>
                                    <p>{currency.symbol}{item.current_price?.toLocaleString() || 'N/A'}</p>
                                    <p className={`text-left ${item.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {item.price_change_percentage_24h ? item.price_change_percentage_24h.toFixed(2) + '%' : 'N/A'}
                                    </p>
                                    <p className="text-right">{item.market_cap?.toLocaleString() || 'N/A'}</p>
                                </div>
                            ))
                        ) : (
                            <div className="text-center p-4">No coins available</div>
                        )}
                    </div>
                </div>
                {/* Crypto-Table */}
            </div>
        </>
    );
}

export default Home