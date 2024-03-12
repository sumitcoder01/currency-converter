import { useId } from "react"

type AmountFieldProps = {
  lableText: string;
  amount: number;
  onAmountChange: (amount: number) => void;
  disabled: boolean;
}

export function AmountField({ lableText, amount, onAmountChange, disabled }: AmountFieldProps) {
  const id = useId();
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      if(e.target.value.length===0){
            onAmountChange(NaN);
            return;
      }
      let amt = parseFloat(e.target.value);
      if(amt < 0) amt = 0;
      onAmountChange(amt);
    }
  }
  return (
    <div className='flex flex-col'>
      <label htmlFor={id} className="text-sm md:text-md text-gray-400 mb-2 font-semibold">{lableText}</label>
      <input
        type={disabled ? "text" : "number"}
        name={lableText}
        id={id}
        value={amount}
        onChange={handleOnChange}
        className={`w-44 md:w-52 px-2 py-1 h-10 border border-gray-300 bg-white rounded-md shadow-sm text-sm focus:outline-none ${disabled && 'cursor-not-allowed'}`}
      />
    </div>
  )
}
