import { CurrencyIcon } from "./convert/ConvertIcon";

type ConvertButtonProps = {
  from: string;
  to: string;
  handleConvert: () => void;
}

export function ConvertButton({ from, to, handleConvert }: ConvertButtonProps) {
  return (
    <button className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-sm text-white hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out" onClick={handleConvert}>
      <span>Convert</span>
      <CurrencyIcon />
      <span className="hidden sm:inline">{from} to {to}</span>
    </button>
  )
}
