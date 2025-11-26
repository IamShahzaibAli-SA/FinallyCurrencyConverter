import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchCurrency = async () => {
            const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
            
            console.log(result);
        }

        fetchCurrency();
    }, [currency]);
    
    return data;
}

export default useCurrencyInfo;