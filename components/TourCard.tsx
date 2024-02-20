import { TourConfig } from "@/data/tours"
import { MdAccessTime } from "react-icons/md";
import { Chip } from "./Chip";

export const TourCard = ({ cost, hours, image, subtitle, title }: TourConfig) => {
  return (
    <div className="card bg-base-300 max-w-[400px] cursor-pointer hover:scale-105 transition ease-in-out">
      <section className="relative">
        <img src={image} className="max-h-[250px] h-[250px] w-full rounded-xl border-b-0" />
        <span className="flex items-center gap-1 absolute top-1 right-1"><Chip icon={<MdAccessTime />} title={hours.toString()} /> </span>
      </section>
      <div className="px-8 py-4">
        <h2 className="card-title mb-2">{title}</h2>
        <p>{subtitle}</p>
        <div className="flex w-full mt-2">
          <span className="text-green-500 ml-auto">{cost} $</span>

        </div>

      </div>
    </div>
  )
}