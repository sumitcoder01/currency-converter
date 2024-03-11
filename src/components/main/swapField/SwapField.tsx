import { SwapIcon } from "./swap/SwapIcon";

type SwapFieldProps = {
  swap: () => void;
}
export function SwapField({ swap }: SwapFieldProps) {
  return (
    <button  className='flex items-center justify-center px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300'
      onClick={swap}
    >
      <span className="mr-2">Swap</span>
      <SwapIcon />
    </button>
  )
}
