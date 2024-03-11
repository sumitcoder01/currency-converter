import { CurrencyIcon } from "./currency/CurrencyIcon";

export default function BoxHeader() {
  return (
    <div className="flex justify-center md:justify-start items-center gap-3">
      <h2 className='text-xl font-bold'>Currency Converter - Convert your Currency</h2>
      <CurrencyIcon/>
    </div>
  )
}
