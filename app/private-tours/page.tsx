import { TourCard } from "@/components/TourCard";
import { tours } from "@/data/tours";

export default function PrivateTransfers() {
  return (
    <main className="flex min-h-screen bg-transparent items-center justify-center ">
      <section className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8">
        {tours.map((tour) => (
          <TourCard key={tour.title} {...tour} />
        ))}
      </section>
    </main>
  );
}
