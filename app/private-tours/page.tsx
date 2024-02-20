import { TourCard } from "@/components/TourCard";
import { tours } from "@/data/tours";

export default function PrivateTransfers() {
  return (
    <main className="flex min-h-screen bg-transparent items-center justify-center ">
      <section className="grid grid-cols-3 gap-8 mt-8">
        {tours.map((tour) => (
          <TourCard key={tour.title} {...tour} />
        ))}

      </section>
    </main>
  );
}
