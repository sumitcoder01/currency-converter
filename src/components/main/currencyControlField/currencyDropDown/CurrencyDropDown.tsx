type CurrencyDropDownProps = {
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
  currencyOptions: string[];
  loading: boolean | null;
}
export function CurrencyDropDown({ loading, selectedCurrency, onCurrencyChange, currencyOptions }: CurrencyDropDownProps) {
  return (
    <div className="relative">
      <select
        disabled={loading !== false}
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className={`w-16 px-2 py-1 h-8 border border-gray-400 rounded-md shadow-sm sm:text-sm ${loading !== false && "animate-pulse"
          }`}
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
