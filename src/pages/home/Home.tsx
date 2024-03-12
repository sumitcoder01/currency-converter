import BoxHeader from "../../components/boxHeader/BoxHeader";
import { Main } from "../../components/main/Main";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
        <div className="mx-3 md:mx-0 mb-7 md:-mt-7"><BoxHeader /></div>
        <div className="mx-3 md:mx-0 mb-2 w-[97%] md:w-auto"><Main /></div>
    </div>
  )
}
