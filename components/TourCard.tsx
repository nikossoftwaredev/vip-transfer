import { TourConfig } from "@/data/tours"
import { MdAccessTime } from "react-icons/md";
import { Chip } from "./Chip";

export const TourCard = ({ cost, hours, image, subtitle, title }: TourConfig) => {
  return (
    <div className="card bg-base-300 max-w-[400px] cursor-pointer hover:scale-105 transition ease-in-out">
      <section className="relative">
        <img src={image} className="max-h-[250px] h-[250px] w-full rounded-xl border-b-0" />
        <span className="flex items-center gap-1 absolute top-1 right-1"><Chip icon={<MdAccessTime />} title={hours.toString()} /><Chip icon={'$'} title={`${cost}`} color="text-green-600" /> </span>
      </section>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{subtitle}</p>

      </div>
    </div>
  )
}