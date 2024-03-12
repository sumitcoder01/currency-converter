type CurrencyDropDownProps = {
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
  currencyOptions: string[];
  loading: boolean | null;
}
export function CurrencyDropDown({ loading, selectedCurrency, onCurrencyChange, currencyOptions }: CurrencyDropDownProps) {
  return (
    <div className="relative text-center">
      <h4 className="text-sm md:text-md text-gray-400 mb-2 font-semibold">Currency Type</h4>
      <select
        disabled={loading !== false}
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className={`w-20 px-3 py-2 h-10 border border-gray-300 bg-white rounded-md shadow-sm sm:text-sm focus:outline-none ${loading !== false && "animate-pulse"}`}
      >
        {currencyOptions.map((currencyOption) => (
          <option key={currencyOption} value={currencyOption}>
            {currencyOption}
          </option>
        ))}
      </select>
    </div>
  )
}
