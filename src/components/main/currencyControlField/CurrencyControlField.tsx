import { AmountField } from "./amountField/AmountField";
import { CurrencyDropDown } from './currencyDropDown/CurrencyDropDown';

type CurrencyControlFieldProps = {
  lableText: string;
  amount: number;
  onAmountChange: (amount: number) => void;
  disabled: boolean;
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
  currencyOptions: string[];
  loading:boolean | null;
}

export function CurrencyControlField({loading ,lableText, amount, onAmountChange, disabled, selectedCurrency, onCurrencyChange, currencyOptions }: CurrencyControlFieldProps) {
  return (
    <div className="flex justify-center gap-2 mx-1">
      <AmountField lableText={lableText} amount={amount} onAmountChange={onAmountChange} disabled={disabled} />
      <CurrencyDropDown loading={loading} selectedCurrency={selectedCurrency} onCurrencyChange={onCurrencyChange} currencyOptions={currencyOptions} />
    </div>
  )
}
