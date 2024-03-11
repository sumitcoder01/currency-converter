import { useEffect, useState } from "react";
import { API_URL } from "../../constant/apiUrl";
import { CurrencyData } from "../../interfaces/currencyData";


export function useCurrency(currency: string) {
    const [data, setData] = useState<CurrencyData>({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCurrencies = async () => {
            setLoading(true);
            try {
                const response = await fetch(API_URL + `${currency}.json`);
                const responseData = await response.json();
                setData(responseData[currency] as CurrencyData);
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }

        }
        fetchCurrencies();
    }, [currency])

    return { data, loading };
}
