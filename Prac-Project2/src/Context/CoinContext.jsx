const { createContext, useState, useEffect } = require("react")

export const coinContext = createContext();

const coinContextPorvider = (props) => {

    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    });

    const fetchAllCoin = async () => {
        const url = `https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h`;
const options = {
  method: 'GET',
  headers: {'x-cg-pro-api-key': 'CG-WWyzV1h6yjxHRq5yQhhN9EH1'},
  body: undefined
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  setAllCoin(data);
} catch (error) {
  console.error(error);
}
    }

    useEffect(() => {
        fetchAllCoin();
    }, [currency])

    const contextValue = {
        allCoin, currency, setCurrency
    }

    return(
        <coinContext.Provider value={contextValue}>
            {props.children}
        </coinContext.Provider>
    )
}

export default coinContextPorvider;