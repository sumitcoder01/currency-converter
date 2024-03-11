import BoxHeader from "../../components/boxHeader/BoxHeader";
import { Main } from "../../components/main/Main";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="mx-2 md:mx-0">
        <div className="mb-7 md:-mt-7"><BoxHeader /></div>
        <div className="mb-2"><Main /></div>
      </div>
    </div>
  )
}
