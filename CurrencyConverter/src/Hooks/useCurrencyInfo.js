import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            setData(res[currency] || {});
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching currency data:", error);
            setData({});
            setLoading(false);
        });
    }, [currency]);
    
    return { data, loading };
}

export default useCurrencyInfo;