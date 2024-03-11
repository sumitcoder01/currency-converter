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
      onAmountChange(parseInt(e.target.value))
    }
  }
  return (
    <div className='flex justify-center gap-2 items-center'>
      <label htmlFor={id} className="text-sm">{lableText}</label>
      <input
        type={disabled ? "text" : "number"}
        name={lableText}
        id={id}
        value={amount}
        onChange={handleOnChange}
        className={`w-56 h-8 px-2 py-1 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:border-blue-500 ${disabled && 'cursor-not-allowed'}`}
      />
    </div>
  )
}
