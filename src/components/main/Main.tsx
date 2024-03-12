import { useEffect, useState } from "react";
import { useCurrency } from "../../hooks/currencyHook/useCurrency";
import { CurrencyControlField } from "./currencyControlField/CurrencyControlField";
import { SwapField } from "./swapField/SwapField";
import { ConvertButton } from "./convertButton/ConvertButton";
import { ErrorMessage } from "./error/ErrorMessage";

export function Main() {
  const [from, setFrom] = useState<string>("inr");
  const [amount, setAmount] = useState<number>(0);
  const [convertetAmount, setConvertetAmount] = useState<number>(0);
  const [to, setTo] = useState<string>("usd");
  const [options, setOptions] = useState<string[]>([]);
  const { data, loading, error } = useCurrency(from);

  const handleSwap = () => {
    const fromText = from;
    const toText = to;
    const fromAmt = amount;
    const toAmt = convertetAmount;
    setFrom(toText);
    setTo(fromText);
    setAmount(toAmt);
    setConvertetAmount(fromAmt);
  };

  const convertCurrency = (): void => {
    if (to in data) setConvertetAmount(amount * data[to]);
  };

  useEffect(() => {
    if (!loading) {
      setOptions(Object.keys(data));
    }
  }, [loading, data]);

  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-[#F9F6EE] px-7 py-9 rounded-md">
      {error && <ErrorMessage error={error} />}
      <CurrencyControlField
        loading={loading}
        lableText={"From"}
        amount={amount}
        onAmountChange={(amt: number) => setAmount(amt)}
        disabled={false}
        selectedCurrency={from}
        onCurrencyChange={(currency: string) => setFrom(currency)}
        currencyOptions={options}
      />
      <SwapField swap={handleSwap} />
      <CurrencyControlField
        loading={loading}
        lableText={"To"}
        amount={convertetAmount}
        onAmountChange={(amt: number) => setConvertetAmount(amt)}
        disabled={true}
        selectedCurrency={to}
        onCurrencyChange={(currency: string) => setTo(currency)}
        currencyOptions={options}
      />
      <ConvertButton from={from} to={to} handleConvert={convertCurrency} />
    </div>
  );
}
