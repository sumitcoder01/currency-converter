import { CurrencyIcon } from "./currency/CurrencyIcon";

export default function BoxHeader() {
  return (
    <div className="flex justify-center md:justify-start text-green-500 items-center gap-3">
      <h2 className='text-lg md:text-2xl font-bold'>Currency Converter - Convert your Currency</h2>
      <CurrencyIcon/>
    </div>
  )
}
