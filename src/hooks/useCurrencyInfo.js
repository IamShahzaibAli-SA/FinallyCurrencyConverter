import { useEffect } from "react";

function useCurrencyInfo(currency){
    const fetchCurrency = async () => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        const response = await fetch(url);
        const result = await response.json();

        console.log(result);
    }

    useEffect(()=>{
        fetchCurrency();
    }, [currency]);

}

export default useCurrencyInfo;