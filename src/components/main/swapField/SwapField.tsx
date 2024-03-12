import { SwapIcon } from "./swap/SwapIcon";

type SwapFieldProps = {
  swap: () => void;
}
export function SwapField({ swap }: SwapFieldProps) {
  return (
    <button  className='flex items-center justify-center px-3 py-2 rounded-lg font-bold bg-purple-600 text-white hover:bg-purple-700 focus:outline-none'
      onClick={swap}
    >
      <span className="mr-2">Swap</span>
      <SwapIcon />
    </button>
  )
}
