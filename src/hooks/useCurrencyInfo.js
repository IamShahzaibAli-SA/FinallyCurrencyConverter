import { useEffect, useState } from "react";

function useCurrencyInfo(currency, toCurr) {

    const [rate, setRate] = useState(null);

    useEffect(() => {
        const fetchCurrency = async () => {
            const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
            const response = await fetch(url);
            const result = await response.json();

            // Extract the exchange rate properly
            setRate(result[currency][toCurr]);

            console.log(rate);
        };

        fetchCurrency();
    }, [currency, toCurr]);

    return rate; // the actual conversion rate
}

export default useCurrencyInfo;
