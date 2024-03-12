import { useEffect, useState } from "react";
import { API_URL } from "../../constant/apiUrl";
import { CurrencyData, CurrencyResponse } from "../../interfaces/currencyData";


export function useCurrency(currency: string) {
    const [data, setData] = useState<CurrencyData>({});
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCurrencies = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(API_URL + `${currency}.json`);
                const responseData = await response.json() as CurrencyResponse;
                setData(responseData[currency] as CurrencyData);
            } catch (error) {
                const err = new Error('Server error');
                setError(err);
                setData({});
                console.log(error);
            }
            finally {
                setLoading(false);
            }

        }
        fetchCurrencies();
    }, [currency])

    return { data, loading, error };
}
